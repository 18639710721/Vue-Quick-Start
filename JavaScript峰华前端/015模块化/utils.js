
/**
 * 
 * @param {Date} date 
 * 
 */

// 如果要导出的化 设置export关键字
// export function formatDate(date) {
//     return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
// }

// // 导出多个常量
// export const DAYS_OF_YEAR = 365;

function formatDate(date) {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
}

const DAYS_OF_YEAR = 365;

// 命名方式的导出
// export {formatDate, DAYS_OF_YEAR}

// 默认导出
export default formatDate;
export {DAYS_OF_YEAR}
