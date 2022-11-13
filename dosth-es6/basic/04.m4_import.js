// 按需导入
// import { s1 } from './03.m3_export.js'
// import { s2 } from './03.m3_export.js'

// console.log(s1)
// console.log(s2)

// info 默认导出, 按需导出集合
// s2重命名str
import info, { s1, s2 as str, say} from './03.m3_export.js'
console.log(s1)
console.log(str)
console.log(say)
say()
console.log(info)