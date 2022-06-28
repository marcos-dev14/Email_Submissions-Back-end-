import { SubmitTalkMeUseCase } from "./submit-talkme-use-case";

const createTalkMeSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitTalkMe = new SubmitTalkMeUseCase(
  { create: createTalkMeSpy },
  { sendMail: sendMailSpy },
)

describe('Submit talkme', () => {
  it('should be able to submit a talkme', async () => {
    await expect(submitTalkMe.execute({
      name: 'Marcos',
      email: 'marcos@teste.com',
      message: 'Teste'
    })).resolves.not.toThrow();

    expect(createTalkMeSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit a talkme without name', async () => {
    await expect(submitTalkMe.execute({
      name: '',
      email: 'marcos@teste.com',
      message: 'Teste'
    })).rejects.toThrow();
  });

  it('should not be able to submit a talkme without email', async () => {
    await expect(submitTalkMe.execute({
      name: 'Marcos',
      email: '',
      message: 'Teste'
    })).rejects.toThrow();
  });

  it('should not be able to submit a talkme without message', async () => {
    await expect(submitTalkMe.execute({
      name: 'Marcos',
      email: 'marcos@teste.com',
      message: ''
    })).rejects.toThrow();
  });
})