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
    status          : sequelize.import('./status.model'),
    cart            : sequelize.import('./cart.model'),
    category        : sequelize.import('./category.model'),
    brand           : sequelize.import('./brand.model'),
    condition       : sequelize.import('./condition.model'),
    product         : sequelize.import('./product.model'),
    productVariant  : sequelize.import('./productVariant.model'),
    productImages   : sequelize.import('./productImages.model'),
    categoryImg     : sequelize.import('./categoryImg.model'),
    cart            : sequelize.import('./cart.model'),
    cartLineItems   : sequelize.import('./cartLineItems.model'),
    province        : sequelize.import('./province.model'),
    city            : sequelize.import('./city.model'),
    kecamatan       : sequelize.import('./kecamatan.model'),
    kodepos         : sequelize.import('./kodepos.model'),
    address         : sequelize.import('./address.model'),
    users           : sequelize.import('./users.model'),
    account         : sequelize.import('./account.model'),
    orders : sequelize.import('./orders.model'),
    ordersLineItems : sequelize.import('./ordersLineItems.model'),
    expedition : sequelize.import('./expedition.model'),
    orderShipping : sequelize.import('./orderShipping.model'),
    expeditionRoute : sequelize.import('./expeditionRoute.model'),
    expeditionRoute : sequelize.import('./expeditionRoute.model'),
    vendor : sequelize.import('./vendor.model'),
    billTopup : sequelize.import('./billTopup.model'),
    vendorRules : sequelize.import ('./vendorRules.model'),
    packageType     : sequelize.import('./packageType.model'),
    orderAdvertising: sequelize.import('./orderAdvertising.model'),
    orderAdvertisingProduct: sequelize.import('./orderAdvertisingProduct.model'),
    bank : sequelize.import('./bank.model'),
    paymentType : sequelize.import('./paymentType.model'),
    bankAccount : sequelize.import('./bankAccount.model'),
    wallet : sequelize.import('./wallet.model'),
    walletTransaction : sequelize.import('./walletTransaction.model'),

};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
      models[key].associate(models);
    }
});

// export { sequelize };
export {Op};
export default models;
