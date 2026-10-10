
export class ContactMessage {
  constructor({ name, email, message }) {
    this.name = name.trim();
    this.email = email.trim();
    this.message = message.trim();
  }

  isValid() {
    return (
      this.name.length > 0 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email) &&
      this.message.length > 0
    );
  }
}
