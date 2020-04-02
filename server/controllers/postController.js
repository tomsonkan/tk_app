const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError} = require('../sql/error')


const getAllUserPosts = (req, res) => {
  console.log("getallusers getting hit??")
  pool.query('SELECT * FROM mockData', (err, rows) => {
    if(err) {
      console.log("***error works!")
      return handleSQLError(res, err)
    } else {
      console.log("***it works!")
      return res.json(rows);
    }
  })
}

// const getPostById = (req, res) => {
//   pool.query('SELECT * FROM mockData WHERE id = ?', {id: `${req.params.postId}`}, (err, rows) => {
//     if (err) return handleSQLError(res, err)
//     return res.json(rows);
//   })
// }

const createPost = (req, res) => {
    console.log("REQPARAMS:", req.params.id)
    console.log(req.body,"here i am dude")

    const { id, first_name, last_name, email, lvl, isLiked1, isLiked2, isLiked3 } = req.body
    let sql = 'insert into mockData (id, first_name, last_name, email, lvl, isLiked1, isLiked2, isLiked3) value (?,?,?,?,?,?,?,?)'
    // const replacements = [req.body.description,req.body.Address]
    sql = mysql.format(sql, [id, first_name, last_name, email, lvl, isLiked1, isLiked2, isLiked3])
    pool.query(sql,  (err, results) => {
      if (err) return handleSQLError(res, err)
      return res.json({ newId: results.insertId });
  })
}

const updatePostById = (req, res) => {
  // const isLiked = [ req.body.isLiked1, req.body.isLiked2, req.body.isLiked3 ]
  let sql = "UPDATE mockData SET isLiked1 = ?, isLiked2 = ?, isLiked3 = ? WHERE id = ?"
  sql = mysql.format(sql, [ req.body.isLiked1, req.body.isLiked2, req.body.isLiked3, req.params.id ])
  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

  // pool.query(`UPDATE mockData SET ? WHERE id = ${req.params.id}`, (err, results) => {
  //   if (err) return handleSQLError(res, err)
  //   return res.send(req.body);
  // })
}

const deletePostById = (req, res) => {
    let sql = "DELETE FROM mockData WHERE id = ?";
    sql = mysql.format(sql, [req.params.id]);
    console.log("****HELLO" + req.params.id)
    pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err);
      return res.json({ message: `Deleted ${results.affectedRows} post(s)` });
  })
}

module.exports = {
  getAllUserPosts,
  createPost,
  deletePostById,
  updatePostById
}
//deletePostById
// getPostById,
//   createPost,
//   updatePostById,
//   deletePostById