const recipes = [
  { recipe_name: 'recipe 1'},
  { recipe_name: 'recipe 2'},
  { recipe_name: 'recipe 3'},
]

const ingredients = [
  { ingredient_name: 'cake', ingredient_unit: 'slice'},
  { ingredient_name: 'pizza', ingredient_unit: 'slice'},
  { ingredient_name: 'butter', ingredient_unit: 'tbsp'},
  { ingredient_name: 'water', ingredient_unit: 'cup'},
  { ingredient_name: 'milk', ingredient_unit: 'cup'},
  { ingredient_name: 'salt', ingredient_unit: 'tsp'},
]

const steps = [
  { ingredient_name: 'step 1', step_number: 1, recipe_id: 1 },
  { ingredient_name: 'step 2', step_number: 2, recipe_id: 1 },
  { ingredient_name: 'step 3', step_number: 3, recipe_id: 1 },
  { ingredient_name: 'step 1', step_number: 1, recipe_id: 2 },
  { ingredient_name: 'step 2', step_number: 2, recipe_id: 2 },
  { ingredient_name: 'step 3', step_number: 3, recipe_id: 2 },
  { ingredient_name: 'step 1', step_number: 1, recipe_id: 3 },
  { ingredient_name: 'step 2', step_number: 2, recipe_id: 3 },
  { ingredient_name: 'step 3', step_number: 3, recipe_id: 3 },
]

const step_ingredients = [
  { step_id: 1, ingredient_id: 1, quantity: 1 },
  { step_id: 2, ingredient_id: 2, quantity: 1 },
  { step_id: 3, ingredient_id: 3, quantity: 1 },
  { step_id: 4, ingredient_id: 4, quantity: 1 },
  { step_id: 5, ingredient_id: 5, quantity: 1 },
  { step_id: 6, ingredient_id: 6, quantity: 1 },
  { step_id: 7, ingredient_id: 1, quantity: 1 },
  { step_id: 8, ingredient_id: 2, quantity: 1 },
  { step_id: 9, ingredient_id: 3, quantity: 1 },
]

exports.seed = async function (knex) {
  await knex('recipes').insert(recipes)
  await knex('ingredients').insert(ingredients)
  await knex('steps').insert(steps)
  await knex('step_ingredients').insert(step_ingredients)
}