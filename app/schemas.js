import { schema } from 'normalizr';

export const menuCategorySchema = new schema.Entity('menuCategories');
export const menuIngredientSchema = new schema.Entity('menuIngredients');
export const menuItemSchema = new schema.Entity('menuItems', {
  category: [ menuCategorySchema ],
  possible_ingredients: [ menuIngredientSchema ],
  default_ingredients: [ menuIngredientSchema ]
});
