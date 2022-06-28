import { prisma } from "../../prisma";
import { TalkMeCreateData, TalkMeRepository } from "../talkme-repository";

export class PrismaTalkMeRepository implements TalkMeRepository {
  async create({ name, email, message }: TalkMeCreateData) {
    await prisma.talkeMe.create({
      data: {
        name,
        email,
        message,
      }
    })
  }
}