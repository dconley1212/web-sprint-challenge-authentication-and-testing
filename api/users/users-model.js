const db = require("../../data/dbConfig");

async function findBy(filter) {
  const userFound = await db("users").where(filter);
  return userFound;
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
