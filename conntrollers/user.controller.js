const db = require("../db");

class UserController {
  async createUser(req, res) {
    const { name, surname } = req.body;
    try {
      const newPerson = await db.query(
        `INSERT INTO person (name, surname) values($1, $2) Returning *`,
        [name, surname]
      );

      res.json(newPerson.rows[0]);

      console.log("Created!");
    } catch (err) {
      console.log(err);
    }
  }
  async getUser(req, res) {
    try {
      const users = await db.query(`SELECT * FROM person`);
      res.json(users.rows);
    } catch (err) {
      console.log(err);
    }
  }
  async getOneUser(req, res) {
    try {
      const id = req.params.id;
      const user = await db.query(`SELECT * FROM person where id = $1`, [id]);
      res.json(user.rows[0]);
    } catch (err) {
      console.log(err);
    }
  }
  async updateUser(req, res) {
    try {
      const { id, name, surname } = req.body;
      const user = await db.query(
        `UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *`,
        [name, surname, id]
      );
      ``;
      res.json(user.rows[0]);
      console.log("Updated!");
    } catch (err) {
      console.log(err);
    }
  }
  async deleteUser(req, res) {
    try {
      const id = req.params.id;
      const user = await db.query(`DELETE FROM person where id = $1`, [id]);
      res.json(user.rows[0]);
      console.log("Deleted!");
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new UserController();
