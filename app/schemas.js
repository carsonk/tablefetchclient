import { schema } from 'normalizr';

const menuCategorySchema = new schema.Entity('menuCategories');
const menuIngredientSchema = new schema.Entity('menuIngredients');
const menuItemSchema = new schema.Entity('menuItems', {
  category: [ menuCategorySchema ],
  possible_ingredients: [ menuIngredientSchema ],
  default_ingredients: [ menuIngredientSchema ]
});

export { menuCategorySchema, menuIngredientSchema, menuItemSchema }
