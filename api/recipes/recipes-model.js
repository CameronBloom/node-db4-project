function getRecipeById(recipe_id) {
  return Promise.resolve(`argument: ${recipe_id}`)
}

module.exports = {
  getRecipeById
}