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
    cart : sequelize.import('./cart.model'),
    cartLineItems : sequelize.import('./cartLineItems.model'),
    province  : sequelize.import('./province.model'),
    city      : sequelize.import('./city.model'),
    kecamatan : sequelize.import('./kecamatan.model'),
    kodepos   : sequelize.import('./kodepos.model'),
    address   : sequelize.import('./address.model'),
    users   : sequelize.import('./users.model'),
    account   : sequelize.import('./account.model'),
    orders : sequelize.import('./orders.model'),
    ordersLineItems : sequelize.import('./ordersLineItems.model')
=======
    orderShipping : sequelize.import('./orderShipping.model'),
    expedition : sequelize.import('./expedition.model'),
    expeditionRoute : sequelize.import('./expeditionRoute.model')

};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
      models[key].associate(models);
    }
});

// export { sequelize };
export {Op};
export default models;
