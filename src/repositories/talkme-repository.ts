export interface TalkMeCreateData {
  name: string;
  email: string;
  message: string;
}

export interface TalkMeRepository {
  create: (data: TalkMeCreateData) => Promise<void>;
}