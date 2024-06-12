const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3005

const tables = [ 
    'product'
    // 'category', 
    // 'brand' 
]

// .get()
router.get('/', (req, res) => {
    res.json({
        'All Products': `http://localhost:${PORT}/api/product`,
        'All Categories': `http://localhost:${PORT}/api/category`,
        'All Brands': `http://localhost:${PORT}/api/brand`
        // 'All Users': `http://localhost:${PORT}/api/user`
    })
})

// routes
tables.forEach(table => {
    router.use(`/api/${table}`, require(`./api/${table}Routes`))
})

// .get()
router.get('*', (req, res) => {
    if (req.url === '/favicon.ico') {
        res.end()
    } else {
        res.send ('<h1>404 Error -- Page does not exist.  No Sweetz for you!</h1>')
    }
})

module.exports = router