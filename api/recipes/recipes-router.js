const express = require('express')

const router = express.Router()

const Recipe = require('./recipes-model')

router.get('/:recipe_id', (req, res, next) => {
  Recipe.getRecipeById(req.params.recipe_id)
    .then(resource => {
      res.status(200).json(resource)
    })
    .catch(next)
})

router.use("*", (req, res) => {
  res.json({ message: 'api is live', api: 'active' })
})

router.use((err, req, res, next) => {
  res.status(500).json({
    custom: 'recipes-router error occurred',
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router