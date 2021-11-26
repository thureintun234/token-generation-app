const db = require('../config/db')

class Survey {
  constructor(title, question1, question2, question3, userId) {
    this.title = title
    this.question1 = question1
    this.question2 = question2
    this.question3 = question3
    this.userId = userId
  }

  async save() {
    let d = new Date()
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();

    let createdAtDate = `${yyyy}-${mm}-${dd}`;

    let sql = `
    INSERT INTO surveys(
        title,
        question1,
        question2,
        question3,
        created_at,
        userId
      )
      VALUES(
        '${this.title}',
        '${this.question1}',
        '${this.question2}',
        '${this.question3}',
        '${createdAtDate}',
        '${this.userId}'
      )
    `;
    const [newSurvey, _] = await db.execute(sql)

    return newSurvey
  }

  static findAll() {
    let sql = `SELECT * FROM surveys`
    return db.execute(sql)
  }
}

module.exports = Survey