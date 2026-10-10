
export class Project {
  constructor({
    id,
    title,
    category,
    description,
    technologies = [],
    image = "",
    link = "",
  }) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.description = description;
    this.technologies = technologies;
    this.image = image;
    this.link = link;
  }
}
