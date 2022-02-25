const db = require("../../data/dbConfig");

function findBy(filter) {
  return db("users").where(filter);
}

function findById(id) {
  return db("users").where("id", id);
}

async function add(user) {
  const userId = await db("users").insert(user);
  return findById(userId);
}

module.exports = {
  findBy,
  findById,
  add,
};
