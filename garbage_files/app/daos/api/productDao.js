const con = require('../../config/dbconfig')

const productDao = {
    table: 'product',

    findbyId: (req, res, table) => {
        const id = req.params.id

        con.execute(
            `SELECT p.product_id, p.name, p.product_img, p.description, p.weight, b.brand, c.category
            FROM product p
            JOIN brand b USING (brand_id)
            JOIN category c USING (category_id)
            WHERE p.${table}_id = ${id};`,
            (error, rows) => {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log("DAO ERROR in productDao findAll", error)
                }
            }

        )
    },

    sort: (req, res, table) => {
        con.execute(
            `SELECT * FROM ${table} ORDER BY product_id;`,
                (error, rows)=> {
                        if(!error) {
                            if(rows.length === 1) {
                                res.json(...rows)
                            } else {
                                res.json(rows)
                            }
                        } else {
                            console.log('DAO ERROR: ', error)
                        }
                    }
                )
        }
}

module.exports = productDao

// =================================================================================

// const con = require('../../config/dbconfig')

// const productDao = {
//     table: 'product',
//         // ...daoCommon, ...require('./api/productDao')

//         // getInfo to select product info for category, brand (?)
//         getInfo: (req, res, table) => {
//             // getInfo: (req, table, id) => {

//             const id = req.params.id
//             con.execute(
//                 `SELECT p.product_id, p.name, p.product_img, p.description, p.weight,
//                     b.brand, c.category
//                     FROM product p
//                     JOIN brand b USING (brand_id)
//                     JOIN category c USING (category_id)
//                     WHERE ${table}_id = ${id};`,

//             )
//         },


//         sort: (req, res, table) => {
//             // console.log(Object.keys(req.body))
//             con.execute(
//                 `SELECT * FROM ${table} ORDER BY product_id;`,
//                 (error, rows)=> {
//                                 if(!error) {
//                                     if(rows.length === 1) {
//                                         res.json(...rows)
//                                     } else {
//                                         res.json(rows)
//                                     }
//                                 } else {
//                                         console.log('DAO ERROR: ', error)
//                                 }
//                             }
//             )

//         },

//     // getInfo: (res, table, id) => {
//     //     con.execute(
//     //         `SELECT
//     //             p.product_id,
//     //             p.name, 
//     //             p.product_img, 
//     //             p.weight, 
//     //             p.description,
//     //             c.category_id, 
//     //             b.brand_id
//     //         FROM product p 
//     //             JOIN category c USING (category_id)
//     //             JOIN brand b USING (brand_id) 
//     //          WHERE ${table}_id = ${id}
//     //         ORDER BY ${id}
//     //         `,
//     //         (error, rows)=> {
//     //             if (!error) {
//     //                 res.json(rows)
//     //             } else {
//     //                 console.log('DAO ERROR: ', error)
//     //             }
//     //         }
//     //     )
//     // },

    
//     // create: (req, res, table) => {
//     //     if (Object.keys(req.body).length === 0) {
//     //         res.json({
//     //             "error": true,
//     //             "message": "No fields to create"
//     //         })
//     //     } else {
//     //         const fields = Object.keys(req.body)
//     //         const values = Object.values(req.body)

//     //         con.execute(
//     //             `INSERT INTO ${table}
//     //                 SET ${fields.join(' = ?, ')} = ?;`,
//     //             values, 
//     //             (error, dbres) => {
//     //                 console.log(dbres)
//     //                 if (!error) {
//     //                     res.render('pages/process-page', {
//     //                         title: 'Process Page',
//     //                         name: 'Process Page',
//     //                         id: dbres.insertId,
//     //                         table
//     //                     })
//     //                     console.log("record created")
//     //                 } else {
//     //                     console.log('DAO Error: ', error)
//     //                     res.send('Error creating record')
//     //                 }
//     //             }
//     //         )
//     //     }
//     // },

//     // update: (req, res, table) => {
//     //     if (isNaN(req.params.id)) {
//     //         res.json({
//     //             "error": true,
//     //             "message": "Id must be a number."
//     //         })
//     //     } else {
//     //         const fields = Object.keys(req.body)
//     //         const values = Object.values(req.body)

//     //         con.execute(
//     //             `UPDATE ${table}
//     //                 SET ${fields.join(' = ?, ')} = ?
//     //                 WHERE ${table}_id = ?;
//     //             `,
//     //             [...values, req.params.id],
//     //             (error, dbres) => {
//     //                 if (!error) {
//     //                     res.send(`Changed ${dbres.changedRows} row(s).`)
//     //                 } else {
//     //                     console.log('DAO Error: ', error)
//     //                     res.send('Error updating record.')
//     //                 }
//     //             }
//     //         )
//     //     }
//     // },

//     // sort: (req, res, table) => {
//     //     con.execute(
//     //         `SELECT * FROM ${table} ORDER BY ${table};`,
//     //         (error, rows)=> {
//     //             if(!error) {
//     //                 if(rows.length === 1) {
//     //                     res.json(...rows)
//     //                 } else {
//     //                     res.json(rows)
//     //                 }
//     //             } else {
//     //                     console.log('DAO ERROR: ', error)
//     //             }
//     //         }
//     //     )
//     // }
// }

// module.exports = productDao