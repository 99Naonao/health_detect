/**
 * 跳转「眠加商城」小程序
 * wx-open-launch-weapp 仅支持在微信内置浏览器（公众号/独立H5）中使用，
 * 在小程序内、或在小程序的 web-view 中打开的 H5 里均无法使用。
 * 本工具根据运行环境选择：小程序 API / 开放标签 / web-view 内提示。
 */

const MALL_APPID = 'wx041bde7c633d4ec0'

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
 * 是否可以使用 wx-open-launch-weapp 开放标签
 * 仅当：H5 + 微信内置浏览器 + 非 web-view 内 时为 true
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
  if (isInMiniProgramWebView()) {
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
    uni.showToast({
      title: '请点击右上角···在浏览器中打开本页后即可跳转商城',
      icon: 'none',
      duration: 3000
    })
    return
  }

  // H5 在微信浏览器内（非 web-view）：应使用 wx-open-launch-weapp，不在此处处理
  uni.showToast({ title: '请在微信内打开', icon: 'none' })
  // #endif
}

export { MALL_APPID }
