export interface EmailGateway {
  send(email: Email): void;
}
