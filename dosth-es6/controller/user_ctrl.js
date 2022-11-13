import db from './../db/index.js'

// 按需导出
export async function getAllUser(req, res) {
  try {    
    const [rows] = await db.query('select id, username, nickname, xxx from ev_users')
    console.log(rows)

    res.send({
      status: 0,
      message: '获取用户列表数据成功',
      data: rows
    })
  } catch(err) {
    res.send({
      status: 1,
      message: '获取用户列表数据成功',
      desc: err.message
    })
  }
}
