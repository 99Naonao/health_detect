/**
 * 商品ID映射工具类
 * 用途：根据传入的数值（如压力度/情绪综合分等）+ 条件规则，选出对应商品ID。
 *
 * 只提供“通用映射能力”，不内置业务阈值（阈值/商品ID由外部传入，避免写死导致维护困难）。
 */

/**
 * 按区间（min/max）规则映射商品ID（区间匹配优先按数组顺序）。
 * @param {number|string} value - 传入的数值
 * @param {Array<{min?: number, max?: number, productId: (number|string)}>} rules
 *   规则示例：
 *   [
 *     { min: 80, productId: 10022 },              // v >= 80
 *     { min: 60, max: 79, productId: 10020 },   // 60 <= v <= 79
 *     { max: 59, productId: 10019 }              // v <= 59
 *   ]
 * @param {(number|string|null)} [defaultProductId=null] - 默认兜底商品ID
 * @returns {number|string|null}
 */
export function mapProductIdByRanges(value, rules = [], defaultProductId = null) {
  const v = Number(value)
  if (!Number.isFinite(v)) return defaultProductId

  if (!Array.isArray(rules) || rules.length === 0) return defaultProductId

  for (let i = 0; i < rules.length; i++) {
    const r = rules[i] || {}
    const productId = r.productId

    const hasMin = r.min !== undefined && r.min !== null && Number.isFinite(Number(r.min))
    const hasMax = r.max !== undefined && r.max !== null && Number.isFinite(Number(r.max))

    const min = hasMin ? Number(r.min) : -Infinity
    const max = hasMax ? Number(r.max) : Infinity

    // 区间边界包含（更符合业务“>= / <=”直觉）
    if (v >= min && v <= max) {
      return productId
    }
  }

  return defaultProductId
}

/**
 * 按“条件函数”规则映射商品ID（更灵活，但需要外部传入函数）。
 * @param {number|string} value
 * @param {Array<{when: (v:number)=>boolean, productId:(number|string)}>} rules
 * @param {(number|string|null)} [defaultProductId=null]
 */
export function mapProductIdByPredicates(value, rules = [], defaultProductId = null) {
  const v = Number(value)
  if (!Number.isFinite(v)) return defaultProductId
  if (!Array.isArray(rules) || rules.length === 0) return defaultProductId

  for (let i = 0; i < rules.length; i++) {
    const r = rules[i] || {}
    if (typeof r.when === 'function' && r.when(v)) {
      return r.productId
    }
  }

  return defaultProductId
}

