/**
 * 计算综合睡商分数（仅方法设计，不在任何页面直接调用）
 *
 * 设计思路：
 * - 将生理分、生心理（情绪）分、睡眠问卷分统一换算到 0–100 分
 * - 再根据权重做加权平均
 *
 * 输入参数说明（全部可选，但至少应提供一个分数）：
 * @param {Object} params
 * @param {number} [params.physScore]  生理检测综合分（0–100）
 * @param {number} [params.moodScore]  情绪/心理检测综合分（0–100）
 * @param {number} [params.psqiScore]  匹兹堡睡眠问卷原始分（0–21，分数越高睡眠越差）
 * @param {Object} [params.weights]    各部分权重，可选，默认：{ phys: 0.4, mood: 0.3, sleep: 0.3 }
 *
 * 返回：
 * - 综合睡商分数（0–100，数值越高代表整体睡眠/身心状态越好）
 */
export function calcTotalSleepScore(params = {}) {
  const {
    physScore,   // 生理分：0–100
    moodScore,   // 情绪分：0–100
    psqiScore,   // PSQI 原始分：0–21，越高越差
    weights = { phys: 0.4, mood: 0.3, sleep: 0.3 },
  } = params

  const safeNumber = (v, fallback = 0) => {
    const n = Number(v)
    return Number.isFinite(n) ? n : fallback
  }

  const clamp100 = (v) => {
    const n = safeNumber(v, 0)
    if (n < 0) return 0
    if (n > 100) return 100
    return n
  }

  // 1. 规范化各部分分数到 0–100
  const physNorm = physScore != null ? clamp100(physScore) : null
  const moodNorm = moodScore != null ? clamp100(moodScore) : null

  // PSQI：0–21 分，分数越高越差
  // 当前项目中用法是：sleepScore = 100 - psqiScore * 5
  const psqiRaw = psqiScore != null ? safeNumber(psqiScore, 0) : null
  const sleepNorm =
    psqiRaw != null
      ? clamp100(100 - psqiRaw * 5)
      : null

  // 2. 根据传入权重和实际存在的分数组合加权
  const parts = []
  if (physNorm != null) parts.push({ score: physNorm, w: safeNumber(weights.phys, 0) })
  if (moodNorm != null) parts.push({ score: moodNorm, w: safeNumber(weights.mood, 0) })
  if (sleepNorm != null) parts.push({ score: sleepNorm, w: safeNumber(weights.sleep, 0) })

  // 如果没有任何有效分数，返回 0
  if (!parts.length) return 0

  // 如果权重和为 0，则平均处理
  let weightSum = parts.reduce((sum, p) => sum + p.w, 0)
  if (weightSum <= 0) {
    return parts.reduce((sum, p) => sum + p.score, 0) / parts.length
  }

  // 3. 加权平均
  const total = parts.reduce((sum, p) => sum + p.score * p.w, 0)
  const result = total / weightSum
  return Math.round(result * 10) / 10 // 保留 1 位小数
}

