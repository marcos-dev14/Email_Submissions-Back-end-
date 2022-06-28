import express from 'express';
import { prisma } from './prisma';

const app = express();

app.use(express.json())

app.post('/talkme', async ( req, res ) => {
  const { name, email, message } = req.body

  const talkme = await prisma.talkeMe.create({
    data: {
      name,
      email,
      message,
    }
  })

  return res.status(201).json({ data: talkme })
})

app.listen(3333, () => {
console.log('HTTP server running!')
})