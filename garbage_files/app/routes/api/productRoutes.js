const express = require('express')
const router = express.Router()

const { productDao: dao} = require('../../daos/dao')
// console.log(dao)

// localhost:3005/api/product
router.get('/', (req, res) => {
    // dao.findAll(res, dao.table)
    dao.findAll(res, dao.table)
})

// localhost:3005/api/product/count
router.get('/count', (req, res) => {
    dao.countAll(res, 'product')
})

// localhost:3005/api/product/sort
router.get('/sort', (req, res) => {
    dao.sort(req, res, 'product')
})

// localhost:3005/api/product/id
router.get('/:id', (req, res) => {
    dao.findById(res, dao.table, req.params.id)
})

router.post('/create', (req, res) => {
    dao.create(req, res)
})

router.patch('/update/:id', (req, res) => {
    dao.update(req, res)
})

module.exports = router