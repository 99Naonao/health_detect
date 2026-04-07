/**
 * 双报告推荐选品：生理报告 + 情绪报告
 * - 生理参与：心率变异性、收缩压、舒张压、体重指数、心血管病风险(bpcvd)
 * - 情绪参与：压力度、疲劳度、焦虑度、抑郁度、活力度、进取性
 * - 展示：每个报告各取「问题最严重」的 1 条指标（共最多 2 条）
 * - 商品：除 BMI 外，每个指标配置 3 个商品 ID（优先级从高到低），实际推荐取在 getAllGoodlists 中第一个有货的；BMI 仍为单 ID。
 */

function num(v) {
  const n = Number(v)
  return Number.isFinite(n) ? n : null
}

/** 心率变异性：一般越高越从容，过低更差 */
function hrvToWorse(hrv) {
  const v = num(hrv)
  if (v == null) return null
  if (v < 40) return 88
  if (v < 70) return 72
  if (v < 100) return 58
  if (v < 130) return 42
  if (v < 160) return 28
  return 18
}

/** 收缩压 mmHg：越高越差 */
function systolicToWorse(s) {
  const v = num(s)
  if (v == null) return null
  if (v < 110) return 18
  if (v < 120) return 28
  if (v < 130) return 45
  if (v < 140) return 58
  if (v < 160) return 72
  return 85
}

/** 舒张压 mmHg：越高越差 */
function diastolicToWorse(d) {
  const v = num(d)
  if (v == null) return null
  if (v < 75) return 22
  if (v < 80) return 30
  if (v < 85) return 42
  if (v < 90) return 55
  if (v < 100) return 70
  return 82
}

/** BMI：偏离 18.5–24.9 越多越差 */
function bmiToWorse(bmi) {
  const v = num(bmi)
  if (v == null) return null
  if (v >= 18.5 && v <= 24.9) return 16
  if (v < 18.5) return Math.min(88, 38 + (18.5 - v) * 8)
  return Math.min(88, 35 + (v - 24.9) * 6)
}

/** 心血管病风险概率 0~1：越高越差 → 折算到 0~100 */
function cvdToWorse(p) {
  const v = num(p)
  if (v == null) return null
  return Math.min(100, Math.round(v * 580))
}

/**
 * 从报告抽取生理侧候选指标（均带 worse，越大越需要关注）
 */
export function extractPhysiologicalCandidates(report) {
  if (!report) return []
  const hr = report.hrreport && report.hrreport.data
  const bp = report.bpreport && report.bpreport.data
  const ess = report.essentialreport && report.essentialreport.data
  const risk = report.riskreport && report.riskreport.data

  const list = []
  const hrv = hr && num(hr.hrv)
  if (hrv != null) {
    const worse = hrvToWorse(hrv)
    list.push({
      key: '心率变异性',
      value: hrv,
      worse,
      betterHigher: true,
      source: 'phys',
      formatDisplay: (x) => (Number.isFinite(x) ? x.toFixed(1) : String(x))
    })
  }
  // 收缩压 + 舒张压合并为「血压」一项：参与排序用二者 worse 的较大值，展示为 收缩/舒张
  const sys = bp && num(bp.bpsystolic)
  const dia = bp && num(bp.bpdiastolic)
  if (sys != null || dia != null) {
    const wSys = sys != null ? systolicToWorse(sys) : null
    const wDia = dia != null ? diastolicToWorse(dia) : null
    const ws = [wSys, wDia].filter((w) => w != null)
    const worse = ws.length ? Math.max.apply(null, ws) : null
    const worseIsSystolic = wSys != null && (wDia == null || wSys >= wDia)
    list.push({
      key: '血压',
      value: worseIsSystolic ? sys : dia,
      worse,
      betterHigher: false,
      source: 'phys',
      bpsystolic: sys,
      bpdiastolic: dia,
      bpWorseSide: worseIsSystolic ? 'systolic' : 'diastolic',
      formatDisplay: () => {
        const parts = []
        if (sys != null) parts.push(`收缩压 ${Math.round(sys)}`)
        if (dia != null) parts.push(`舒张压 ${Math.round(dia)}`)
        return parts.join(' / ')
      }
    })
  }
  const bmi = ess && num(ess.bmi)
  if (bmi != null) {
    list.push({
      key: '体重指数',
      value: bmi,
      worse: bmiToWorse(bmi),
      betterHigher: false,
      source: 'phys',
      formatDisplay: (x) => (Number.isFinite(x) ? x.toFixed(1) : String(x))
    })
  }
  const cvd = risk && num(risk.bpcvd)
  if (cvd != null) {
    list.push({
      key: '心血管病风险',
      value: cvd,
      worse: cvdToWorse(cvd),
      betterHigher: false,
      source: 'phys',
      formatDisplay: (x) => (Number.isFinite(x) ? (x * 100).toFixed(1) + '%' : String(x))
    })
  }
  return list.filter((m) => m.worse != null)
}

/**
 * 情绪侧候选（与原逻辑一致：0–100，worst = 高越差 OR 100-值）
 */
export function extractEmotionalCandidates(report) {
  if (!report) return []
  const metrics = [
    { key: '压力度', value: num(report.msireport && report.msireport.data), betterHigher: false },
    { key: '疲劳度', value: num(report.fatiguereport && report.fatiguereport.data), betterHigher: false },
    { key: '焦虑度', value: num(report.anxietyreport && report.anxietyreport.data), betterHigher: false },
    { key: '抑郁度', value: num(report.suppressionreport && report.suppressionreport.data), betterHigher: false },
    { key: '活力度', value: num(report.vitalityreport && report.vitalityreport.data), betterHigher: true },
    { key: '进取性', value: num(report.aggressivityreport && report.aggressivityreport.data), betterHigher: true }
  ]
  const list = []
  for (const m of metrics) {
    if (m.value == null) continue
    const worse = m.betterHigher ? (100 - m.value) : m.value
    list.push({
      key: m.key,
      value: m.value,
      worse,
      betterHigher: m.betterHigher,
      source: 'emotion',
      formatDisplay: (x) => (Number.isFinite(x) ? x.toFixed(1) : String(x))
    })
  }
  return list
}

/** 去重并保持顺序，保证至少返回最多 3 个有效 ID */
function normalizePriorityIds(ids) {
  const seen = new Set()
  const out = []
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i]
    if (id == null || !Number.isFinite(Number(id))) continue
    const n = Number(id)
    const k = String(n)
    if (seen.has(k)) continue
    seen.add(k)
    out.push(n)
    if (out.length >= 3) break
  }
  return out
}

/**
 * 情绪类指标：每一档返回 3 个商品 ID（优先级从高到低）。无数据返回 []。
 */
function emotionProductPriorityIds(metricKey, rawValue) {
  const v = Number(rawValue)
  if (!Number.isFinite(v)) return []
  switch (metricKey) {
    case '压力度':
      if (v >= 80) return normalizePriorityIds([10022, 10020, 10083])
      if (v >= 60) return normalizePriorityIds([10020, 10022, 10065])
      if (v >= 40) return normalizePriorityIds([10065, 10083, 10022])
      return normalizePriorityIds([10083, 10061, 10020])
    case '焦虑度':
      if (v >= 80) return normalizePriorityIds([10067, 10022, 10083])
      if (v >= 60) return normalizePriorityIds([10022, 10067, 10083])
      if (v >= 40) return normalizePriorityIds([10083, 10022, 10061])
      return normalizePriorityIds([10083, 10061, 10022])
    case '抑郁度':
      if (v >= 80) return normalizePriorityIds([10084, 10083, 10061])
      if (v >= 60) return normalizePriorityIds([10083, 10084, 10061])
      if (v >= 40) return normalizePriorityIds([10061, 10083, 10084])
      return normalizePriorityIds([10061, 10083, 10056])
    case '疲劳度':
      if (v >= 80) return normalizePriorityIds([10063, 10083, 10061])
      if (v >= 60) return normalizePriorityIds([10083, 10063, 10061])
      if (v >= 40) return normalizePriorityIds([10061, 10083, 10063])
      return normalizePriorityIds([10061, 10083, 10056])
    case '活力度':
      if (v <= 20) return normalizePriorityIds([10055, 10056, 10083])
      if (v <= 40) return normalizePriorityIds([10056, 10055, 10083])
      if (v <= 60) return normalizePriorityIds([10083, 10056, 10061])
      return normalizePriorityIds([10083, 10061, 10055])
    case '进取性':
      if (v <= 20) return normalizePriorityIds([10026, 10065, 10083])
      if (v <= 40) return normalizePriorityIds([10065, 10026, 10083])
      if (v <= 60) return normalizePriorityIds([10083, 10065, 10026])
      return normalizePriorityIds([10083, 10065, 10022])
    default:
      return []
  }
}

/**
 * 生理指标（不含 BMI）：每一指标 3 个商品 ID（优先级从高到低）。BMI 单独走 pickBmiProductId。
 */
function physiologicalProductPriorityIds(metricKey, rawValue) {
  const v = Number(rawValue)
  if (!Number.isFinite(v)) return []
  switch (metricKey) {
    case '心率变异性':
      if (v <= 50) return normalizePriorityIds([10022, 10020, 10083])
      if (v <= 90) return normalizePriorityIds([10020, 10022, 10083])
      return normalizePriorityIds([10083, 10020, 10022])
    case '收缩压':
      if (v >= 150) return normalizePriorityIds([10083, 10061, 10084])
      if (v >= 135) return normalizePriorityIds([10061, 10083, 10063])
      if (v >= 125) return normalizePriorityIds([10083, 10061, 10063])
      return normalizePriorityIds([10083, 10061, 10056])
    case '舒张压':
      if (v >= 100) return normalizePriorityIds([10083, 10061, 10084])
      if (v >= 90) return normalizePriorityIds([10061, 10083, 10063])
      return normalizePriorityIds([10083, 10061, 10056])
    case '心血管病风险': {
      const pct = v <= 1 ? v * 100 : v
      if (pct >= 25) return normalizePriorityIds([10084, 10083, 10061])
      if (pct >= 15) return normalizePriorityIds([10083, 10084, 10061])
      if (pct >= 8) return normalizePriorityIds([10061, 10083, 10084])
      return normalizePriorityIds([10083, 10061, 10056])
    }
    default:
      return []
  }
}

/** BMI：仅 1 个确定商品（业务约定，不做三选一） */
function pickBmiProductId(rawValue) {
  const v = Number(rawValue)
  if (!Number.isFinite(v)) return null
  if (v <= 23.9) return 10082
  if (v <= 28) return 10080
  return 10081
}

/**
 * 从商品列表中按优先级取第一个在架商品
 * @param {number[]} candidateProductIds
 * @param {Array<{id:number|string}>} goodsList
 * @returns {{ productId: number|null, goods: object|null }}
 */
export function pickFirstAvailableGoods(candidateProductIds, goodsList) {
  if (!Array.isArray(candidateProductIds) || candidateProductIds.length === 0) {
    return { productId: null, goods: null }
  }
  if (!Array.isArray(goodsList) || goodsList.length === 0) {
    return { productId: candidateProductIds[0] || null, goods: null }
  }
  for (let i = 0; i < candidateProductIds.length; i++) {
    const id = candidateProductIds[i]
    if (id == null) continue
    const g = goodsList.find(x => String(x.id) === String(id))
    if (g) return { productId: Number(id), goods: g }
  }
  return { productId: null, goods: null }
}

/**
 * 同上，但跳過已選商品 ID（生理+情緒兩路若首位相同時，第二路走候選清單下一檔）
 * @param {Set<string>|string[]} excludeIds - 已佔用的商品 id（字串化）
 */
export function pickFirstAvailableGoodsExcluding(candidateProductIds, goodsList, excludeIds) {
  const ex = excludeIds instanceof Set ? excludeIds : new Set((excludeIds || []).map(String))
  if (!Array.isArray(candidateProductIds) || candidateProductIds.length === 0) {
    return { productId: null, goods: null }
  }
  if (!Array.isArray(goodsList) || goodsList.length === 0) {
    const first = candidateProductIds.find((id) => id != null && !ex.has(String(id)))
    return { productId: first != null ? Number(first) : null, goods: null }
  }
  for (let i = 0; i < candidateProductIds.length; i++) {
    const id = candidateProductIds[i]
    if (id == null) continue
    if (ex.has(String(id))) continue
    const g = goodsList.find(x => String(x.id) === String(id))
    if (g) return { productId: Number(id), goods: g }
  }
  return { productId: null, goods: null }
}

/**
 * 每个来源取 worse 最高的一条；若要求阈值可先过滤再兜底取最大
 */
function pickTopCandidate(candidates, minWorse) {
  if (!candidates || candidates.length === 0) return null
  const sorted = [...candidates].sort((a, b) => (b.worse || 0) - (a.worse || 0))
  if (minWorse != null && minWorse > 0) {
    const ok = sorted.filter((m) => m.worse >= minWorse)
    if (ok.length) return ok[0]
  }
  return sorted[0]
}

function displayTrend(m) {
  if (!m) return '需关注'
  if (m.key === '心血管病风险') return '偏高'
  if (m.betterHigher) return '偏低'
  return '偏高'
}

/**
 * @param {Object} report - getresultLists 返回的 lists[0].result
 * @param {Object} [options]
 * @param {number} [options.minWorsePhys=0] - 生理侧最低 worse，0 表示总是取相对最差一项
 * @param {number} [options.minWorseEmotion=60] - 情绪侧与原逻辑一致；若无人达标则退化为取相对最差
 */
export function buildDualReportRecommendSelection(report, options = {}) {
  const minWorsePhys = options.minWorsePhys != null ? options.minWorsePhys : 0
  const minWorseEmotion = options.minWorseEmotion != null ? options.minWorseEmotion : 60

  const physList = extractPhysiologicalCandidates(report)
  const emoList = extractEmotionalCandidates(report)

  const physPick = pickTopCandidate(physList, minWorsePhys)
  let emoPick = pickTopCandidate(emoList, minWorseEmotion)
  if (!emoPick && emoList.length) {
    emoPick = pickTopCandidate(emoList, 0)
  }

  const displayMetrics = []
  if (physPick) {
    displayMetrics.push({
      key: physPick.key,
      value: physPick.formatDisplay(physPick.value),
      trend: displayTrend(physPick),
      source: 'phys'
    })
  }
  if (emoPick) {
    displayMetrics.push({
      key: emoPick.key,
      value: emoPick.formatDisplay(emoPick.value),
      trend: displayTrend(emoPick),
      source: 'emotion'
    })
  }

  const productHints = []
  if (physPick) {
    let metricKeyForHint = physPick.key
    let rawForHint = physPick.value
    let candidateProductIds = []

    if (physPick.key === '体重指数') {
      const single = pickBmiProductId(physPick.value)
      if (single != null) {
        candidateProductIds = [single]
      }
    } else if (physPick.key === '血压') {
      if (physPick.bpWorseSide === 'systolic' && physPick.bpsystolic != null) {
        candidateProductIds = physiologicalProductPriorityIds('收缩压', physPick.bpsystolic)
        metricKeyForHint = '血压(收缩压为主)'
        rawForHint = physPick.bpsystolic
      } else if (physPick.bpdiastolic != null) {
        candidateProductIds = physiologicalProductPriorityIds('舒张压', physPick.bpdiastolic)
        metricKeyForHint = '血压(舒张压为主)'
        rawForHint = physPick.bpdiastolic
      }
    } else {
      candidateProductIds = physiologicalProductPriorityIds(physPick.key, physPick.value)
    }

    if (candidateProductIds.length > 0) {
      productHints.push({
        candidateProductIds,
        metricKey: metricKeyForHint,
        source: 'phys',
        rawValue: rawForHint
      })
    }
  }
  if (emoPick) {
    const candidateProductIds = emotionProductPriorityIds(emoPick.key, emoPick.value)
    if (candidateProductIds.length > 0) {
      productHints.push({
        candidateProductIds,
        metricKey: emoPick.key,
        source: 'emotion',
        rawValue: emoPick.value
      })
    }
  }

  return {
    physPick,
    emoPick,
    displayMetrics,
    productHints,
    physCandidates: physList,
    emoCandidates: emoList
  }
}
