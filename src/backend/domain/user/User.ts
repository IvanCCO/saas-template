export class User {
  id: string;
  name: string;
  email: Email;
  created_at: Date;
  updated_at: Date;

  constructor(
    id: string,
    name: string,
    email: string,
    created_at?: Date,
    updated_at?: Date
  ) {
    this.id = id;
    this.name = name;
    this.email = new Email(email);
    this.created_at = created_at ?? new Date();
    this.updated_at = updated_at ?? new Date();
  }

  updateEmail(newEmail: string) {
    this.email = new Email(newEmail);
    this.updated_at = new Date();
  }

  updateName(newName: string) {
    this.name = newName;
    this.updated_at = new Date();
  }
}
