import fs from "fs"

function getFile(fpath) {
  return new Promise(function(resolve, reject) {
    fs.readFile(fpath, "utf8", (err, dataStr) => {
      if (err) reject(err)
      resolve(dataStr)
    })
  })
}

// 读取存在文件
getFile('./files/1.txt').then((r1) => {
  console.log(r1)
}, (err) => {
  console.log(err.message)
})

// 读不存在文件
getFile('./files/11.txt').then((r1) => {
  console.log(r1)
}, (err) => {
  console.log(err.message)
})
