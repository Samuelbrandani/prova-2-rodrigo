const express = require('express')
const app = express()
const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
const service = require('./src/services')

const router = express.Router()
router.get('/', (req, res) => {
    res.send('rodando')
})
router.delete('/api/v1/bills/:id', service.deleteBill)
router.get('/api/v1/bills', service.getBills)
router.post('/api/v1/bills', service.newBiils)

app.use('/', router)

const porta = process.env.PORT;
console.log(porta)


app.listen(porta || 8081, () => {
    console.log('Server started on port 8081')
})