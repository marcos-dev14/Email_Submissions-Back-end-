import { MailAdapter } from "../adapters/mail-adapter";
import { TalkMeRepository } from "../repositories/talkme-repository";

interface SubmitTalkMeUseCaseRequest {
  name: string;
  email: string;
  message: string;
}

export class SubmitTalkMeUseCase {
  constructor(
    private talkMeRepository: TalkMeRepository,
    private mailAdapter: MailAdapter,
  ) {}

  async execute(request: SubmitTalkMeUseCaseRequest) {
    const { name, email, message } = request;

    await this.talkMeRepository.create({
      name,
      email,
      message,
    })

    await this.mailAdapter.sendMail({
      subject: 'Fale Comigo',
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #0f172a;">`,
        `<p>Meu nome é: ${name}</p>`,
        `<p>Meu email é: ${email}</p>`,
        `<p>Mensagem: ${message}</p>`,
        `</div>`
      ].join('\n')
    })
  }
}