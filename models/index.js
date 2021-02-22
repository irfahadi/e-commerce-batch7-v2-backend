import Sequelize from 'sequelize'
import brand from '../models_schema/brand';
import product from './product.model';

import productImages from './productImages.model';
import productVariant from './productVariant.model';

export const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
      dialect: 'postgres',
    },
  );

const Op = Sequelize.Op;

const models = {
    //cart : sequelize.import('./cart.model'),
    status : sequelize.import('./status.model'),
    productImages: sequelize.import('./productImages.model'),
    productVariant : sequelize.import('./productVariant.model'),
    product : sequelize.import('./product.model'),
    account : sequelize.import('./account.model'),
    brand : sequelize.import('./brand.model'),
    category: sequelize.import('./category.model'),
    categoryImg: sequelize.import('./categoryImg.model'),
    condition : sequelize.import('./condition.model'),


};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
      models[key].associate(models);
    }
});

// export { sequelize };
export {Op};
export default models;
