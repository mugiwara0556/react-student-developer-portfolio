
export class Skill {
  constructor({ id, name, category, level = "Beginner" }) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.level = level;
  }
}
