const {
  findByIdAndDelete,
  findByIdAndRemove,
} = require("../models/Author.model")

const Author = require("../models/Author.model")

module.exports.authorController = {
  postAuthor: (req, res) => {
    Author.create({
      authorName: req.body.authorName,
      authorDescription: req.body.authorDescription
    }).then(() => {
      res.json("Автор добавлен")
    }).catch((err) => res.json("Ошибка при добавлении автора"))
  },
  getAuthor: (req, res) => {
    Author.find().then((data) => {
        res.json(data)
      })
      .catch((err) => res.json("Ошибка при получении авторов"))
  },
  getAuthorById: (req, res) => {
    Author.findById(req.params.id).then((data) => {
      res.json(data)
    }).catch((err) => res.json("Ошибка при получении автора"))
  },
  deleteAuthorById: (req, res) => {
    Author.findByIdAndRemove(req.params.id).then(() => {
      res.json("Автор удален")
    }).catch((err) => res.json("Ошибка при удалении автора"))
  },
  patchAuthorById: (req, res) => {
    Author.findByIdAndUpdate(req.params.id, {
      authorName: req.body.authorName,
      authorDescription: req.body.authorDescription
    }).then(() => {
      res.json("Автор изменен")
    }).catch((err) => res.json("Ошибка при изменении автора"))
  }
}