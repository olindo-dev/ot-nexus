export class Database {
  async connect() {
    console.log("Database module initialized.");
  }
}

export const database = new Database();