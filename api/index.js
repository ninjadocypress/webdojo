const express = require('express')
const cors = require('cors')
const prisma = require('./prismaClient')

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: 'API do curso Ninja do Cypress!!!'
    })
})

app.post('/api/users/register', async (req, res) => {

    const { name, email, password } = req.body

    if (!name) {
        return res.status(400).json({
            error: 'Name is required!'
        })
    }

    if (!email) {
        return res.status(400).json({
            error: 'Email is required!'
        })
    }

    if (!password) {
        return res.status(400).json({
            error: 'Password is required!'
        })
    }

    try {

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })

        return res.status(201).json({
            message: 'Usuário cadastrado com sucesso!',
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        })

    } catch (error) {

        console.error(error)

        return res.status(500).json({
            error: 'Internal server error'
        })
    }
})

app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`)
})