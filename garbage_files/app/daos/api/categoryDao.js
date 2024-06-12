// const con = require('../../config/dbconfig')
// // const { categoryDao } = require('../dao')

// const categoryDao = {
//     table: 'category',

//     getInfo: (res, table, id) => {
//         con.execute(
//             `SELECT
//                 category_id,
//                 category
//             FROM ${table} WHERE ${table}_id = ${id}
//             ORDER BY ${id}
//             `,
//             (error, rows)=> {
//                 if (!error) {
//                     res.json(rows)
//                 } else {
//                     console.log('DAO ERROR: ', error)
//                 }
//             }
//         )
//     },

    
//     create: (req, res, table) => {
//         if (Object.keys(req.body).length === 0) {
//             res.json({
//                 "error": true,
//                 "message": "No fields to create"
//             })
//         } else {
//             const fields = Object.keys(req.body)
//             const values = Object.values(req.body)

//             con.execute(
//                 `INSERT INTO ${table}
//                     SET ${fields.join(' = ?, ')} = ?;`,
//                 values, 
//                 (error, dbres) => {
//                     console.log(dbres)
//                     if (!error) {
//                         res.render('pages/process-page', {
//                             title: 'Process Page',
//                             name: 'Process Page',
//                             id: dbres.insertId,
//                             table
//                         })
//                         console.log("record created")
//                     } else {
//                         console.log('DAO Error: ', error)
//                         res.send('Error creating record')
//                     }
//                 }
//             )
//         }
//     },

//     update: (req, res, table) => {
//         if (isNaN(req.params.id)) {
//             res.json({
//                 "error": true,
//                 "message": "Id must be a number."
//             })
//         } else {
//             const fields = Object.keys(req.body)
//             const values = Object.values(req.body)

//             con.execute(
//                 `UPDATE ${table}
//                     SET ${fields.join(' = ?, ')} = ?
//                     WHERE ${table}_id = ?;
//                 `,
//                 [...values, req.params.id],
//                 (error, dbres) => {
//                     if (!error) {
//                         res.send(`Changed ${dbres.changedRows} row(s).`)
//                     } else {
//                         console.log('DAO Error: ', error)
//                         res.send('Error updating record.')
//                     }
//                 }
//             )
//         }
//     },

//     sort: (req, res, table) => {
//         con.execute(
//             `SELECT * FROM ${table} ORDER BY ${table};`,
//             (error, rows)=> {
//                 if(!error) {
//                     if(rows.length === 1) {
//                         res.json(...rows)
//                     } else {
//                         res.json(rows)
//                     }
//                 } else {
//                         console.log('DAO ERROR: ', error)
//                 }
//             }
//         )
//     }
// }

// module.exports = categoryDao