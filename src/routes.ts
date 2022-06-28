import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaTalkMeRepository } from './repositories/prisma/prisma-talkme-respository';
import { SubmitTalkMeUseCase } from './use-cases/submit-talkme-use-case';

export const routes = express.Router();

routes.post('/talkme', async ( req, res ) => {
  const { name, email, message } = req.body

  const prismaTalkMeRepository = new PrismaTalkMeRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();

  const submitTalkMeUseCase = new SubmitTalkMeUseCase(
    prismaTalkMeRepository,
    nodemailerMailAdapter
  )

  await submitTalkMeUseCase.execute({
    name,
    email,
    message,
  })

  return res.status(201).send();
})