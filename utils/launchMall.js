/**
 * 跳转「眠加商城」小程序
 * wx-open-launch-weapp 仅支持在微信内置浏览器（公众号/独立H5）中使用，
 * 在小程序内、或在小程序的 web-view 中打开的 H5 里均无法使用。
 * 本工具根据运行环境选择：小程序 API / 开放标签 / web-view 内提示。
 */

const MALL_APPID = 'wx041bde7c633d4ec0'

/**
 * H5：即将弹出「进商城引导」showModal 前在 window 上派发，业务页可关闭自建弹层（如推荐弹窗），
 * 避免页面 fixed 层级高于系统 Modal。事件名需与监听方一致。
 */
export const MALL_GUIDE_PREPARE_EVENT = 'mall-guide-prepare-open'

/**
 * 是否在「小程序 web-view 内」打开的 H5（此时开放标签不可用）
 * 仅 H5 环境有效，需在 wx.ready 之后或延迟判断
 */
export function isInMiniProgramWebView() {
  if (typeof window === 'undefined') return false
  const wx = window.wx
  if (!wx || !wx.miniProgram) return false
  // 存在 wx.miniProgram 即表示当前页面在小程序 web-view 内
  return true
}

/**
 * 是否在微信小程序 WebView 內（基于 UA + __wxjs_environment）
 *  仅 H5 环境有效：
 * - true  => 微信小程序 WebView 內
 * - false => 非微信 / 微信內普通 H5
 */
export function isWechatMiniProgramWebview() {
  // #ifdef H5
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return false
  }
  const ua = navigator.userAgent.toLowerCase()
  const isWechat = ua.includes('micromessenger')
  if (!isWechat) return false
  // 小程序 WebView 會暴露 window.__wxjs_environment = 'miniprogram'
  return window.__wxjs_environment === 'miniprogram'
  // #endif

  return false
}

/**
 * 是否可以使用 wx-open-launch-weapp 开放标签
 * 仅当：H5 + 微信内置浏览器 + 非 web-view 内时为 true
 */
export function canUseLaunchWeappTag() {
  // #ifdef MP-WEIXIN
  return false
  // #endif
  // #ifdef H5
  return !isInMiniProgramWebView()
  // #endif
  return false
}

/**
 * 跳转到眠加商城（小程序端 或 H5 在 web-view 内时使用）
 * @param {Object} options
 * @param {string} [options.path] 小程序路径，如 '/pages/goods_detail/goods_detail?scene=xxx'
 * @param {string} [options.inviteCode] 邀请码，会拼到 path 的 scene 中
 * @param {string} [options.goodsId] 商品 id，会拼到 path 的 scene 中
 */
export function goToMall(options = {}) {
  const { path: customPath, inviteCode, goodsId } = options
  let path = customPath || ''

  if (!path && (inviteCode || goodsId)) {
    const scene = [
      inviteCode != null ? `invite_code%3D${encodeURIComponent(String(inviteCode))}` : '',
      goodsId != null ? `id%3D${encodeURIComponent(String(goodsId))}` : ''
    ].filter(Boolean).join('%26')
    path = `/pages/goods_detail/goods_detail?scene=${scene}`
  }

  // #ifdef MP-WEIXIN
  uni.navigateToMiniProgram({
    appId: MALL_APPID,
    path: path || undefined,
    success: () => {},
    fail: (err) => {
      console.error('navigateToMiniProgram fail', err)
      uni.showToast({ title: '跳转失败，请稍后重试', icon: 'none' })
    }
  })
  return
  // #endif

  // #ifdef H5
  // 在 H5 环境下，只要是“小程序 web-view”场景（无论通过 wx.miniProgram 还是 __wxjs_environment 判断），都走 web-view 逻辑
  if (isInMiniProgramWebView() || isWechatMiniProgramWebview()) {
    // H5 在小程序 web-view 内：无法直接打开其他小程序，通过 postMessage 通知宿主
    // 宿主小程序需在 web-view 的 bindmessage 中处理 action: 'navigateToMall' 并调用 wx.navigateToMiniProgram
    if (window.wx && window.wx.miniProgram && window.wx.miniProgram.postMessage) {
      window.wx.miniProgram.postMessage({
        data: {
          action: 'navigateToMall',
          appId: MALL_APPID,
          path: path || ''
        }
      })
    }
    // 分步说明：showModal 的 content 用 \n 换行；仅纯文本（不支持富文本）
    const returnToMiniProgramSteps = [
      '说明：当前网页无法直接打开其他小程序，请按下面步骤操作。',
      '',
      '1. 快速连续点击左上角「返回」箭头回到小程序。',
      '2. 进入商城后再浏览商品即可。'
    ].join('\n')

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent(MALL_GUIDE_PREPARE_EVENT))
    }
    // 先让页面关闭自建高 z-index 弹层，再打开系统 Modal，避免被盖住或双蒙层
    const openGuide = () => {
      uni.showModal({
        title: '如何进入商城',
        content: returnToMiniProgramSteps,
        showCancel: false,
        confirmText: '我知道了'
      })
    }
    if (typeof uni !== 'undefined' && typeof uni.nextTick === 'function') {
      uni.nextTick(openGuide)
    } else {
      setTimeout(openGuide, 0)
    }
    return
  }

  // H5 在微信浏览器内（非 web-view）：应使用 wx-open-launch-weapp，不在此处处理
  uni.showToast({ title: '请在微信内打开', icon: 'none' })
  // #endif
}

export { MALL_APPID }

/**
 * 通用：向宿主小程序发送 postMessage
 * @param {Object} payload - 要发送的数据，会放在 data 数组的第一个元素中
 * 约定结构示例：
 *   { action: 'backFromH5' }
 *   { action: 'navigate', target: 'xxx', extra: {...} }
 */
export function postMessageToMiniProgram(payload = {}) {
  if (typeof window === 'undefined') return
  if (!(window.wx && window.wx.miniProgram && window.wx.miniProgram.postMessage)) {
    console.warn('[postMessageToMiniProgram] wx.miniProgram.postMessage 不可用', window.wx)
    return
  }
  try {
    window.wx.miniProgram.postMessage({ data: [payload] })
  } catch (e) {
    console.error('[postMessageToMiniProgram] 调用失败', e)
  }
}

/**
 * 通用：通知小程序“从 H5 返回”
 * 小程序侧可在 web-view 的 bindmessage 中监听 action === 'backFromH5'
 * 示例（小程序页面 js）：
 *  onWebViewMessage(e) {
 *    const msg = (e.detail && e.detail.data && e.detail.data[0]) || {}
 *    if (msg.action === 'backFromH5') {
 *      wx.navigateBack()
 *    }
 *  }
 */
export function backToMiniProgram() {
  postMessageToMiniProgram({ action: 'backFromH5' })
}
