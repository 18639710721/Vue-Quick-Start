// import { formatDate , DAYS_OF_YEAR } from "./utils.js";

// import formatDate,{DAYS_OF_YEAR as DAYS} from "./utils.js"

// 使用别名导入
import * as utils from "./utils.js"

console.log(utils.default(new Date()));
console.log(utils.DAYS_OF_YEAR);

