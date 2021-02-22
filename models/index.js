import Sequelize from 'sequelize'

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
    cart      : sequelize.import('./cart.model'),
    province  : sequelize.import('./province.model'),
    city      : sequelize.import('./city.model'),
    kecamatan : sequelize.import('./kecamatan.model'),
    kodepos   : sequelize.import('./kodepos.model'),
    address   : sequelize.import('./address.model'),






};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
      models[key].associate(models);
    }
});

// export { sequelize };
export {Op};
export default models;
