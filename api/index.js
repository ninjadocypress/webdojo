const express = require('express')
const cors = require('cors')
const prisma = require('./prismaClient')

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())

app.use((err, req, res, next) => {
    console.log(err)

    if (err instanceof SyntaxError)
        return res.status(400).json({ error: 'Invalid JSON format' })
    next()
})

app.get('/', (req, res) => {
    res.json({
        message: 'API do curso Ninja do Cypress!!!'
    })
})

app.get('/api/users', async (req, res) => {

    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                password: false
            }
        })

        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users.' })
    }
})

app.put('/api/users/:id', async (req, res) => {
    const {id} = req.params
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
        const user = await prisma.user.findUnique({  
            where: { id: Number(id) }
        })

        if (!user) {
            return res.status(404).json({ error: 'User not found.' })
        }

        await prisma.user.update({
            where: { id: Number(id) },
            data: req.body
        })
        res.status(204).end()
    } catch (error) {
        res.status(500).json({ error: 'Error updating user.' })
    }
})

app.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params

    try {

        const user = await prisma.user.findUnique({  
            where: { id: Number(id) }
        })

        if (!user) {
            return res.status(404).json({ error: 'User not found.' })
        }

        await prisma.user.delete({
            where: { id: Number(id) }
        })
        return res.status(204).end()
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user.' })
    }
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
            message: 'User successfully registered!',
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        })

    } catch (error) {
        if (error.code === 'P2002') {
            return res.status(409).json({
                error: 'Email already exists!'
            })
        }

        console.error(error)
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
})

app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`)
})