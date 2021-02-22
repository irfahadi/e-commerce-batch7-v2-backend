var DataTypes = require("sequelize").DataTypes;
var _account = require("./account");
var _cart = require("./cart");
var _cart_line_items = require("./cart_line_items");
var _order_advertising = require("./order_advertising");
var _order_advertising_product = require("./order_advertising_product");
var _package_type = require("./package_type");
var _product = require("./product");
var _status = require("./status");

function initModels(sequelize) {
  var account = _account(sequelize, DataTypes);
  var cart = _cart(sequelize, DataTypes);
  var cart_line_items = _cart_line_items(sequelize, DataTypes);
  var order_advertising = _order_advertising(sequelize, DataTypes);
  var order_advertising_product = _order_advertising_product(sequelize, DataTypes);
  var package_type = _package_type(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var status = _status(sequelize, DataTypes);

  cart.belongsTo(account, { as: "cart_acco", foreignKey: "cart_acco_id"});
  account.hasMany(cart, { as: "carts", foreignKey: "cart_acco_id"});
  order_advertising.belongsTo(account, { as: "orad_acco", foreignKey: "orad_acco_id"});
  account.hasMany(order_advertising, { as: "order_advertisings", foreignKey: "orad_acco_id"});
  cart_line_items.belongsTo(cart, { as: "clit_cart", foreignKey: "clit_cart_id"});
  cart.hasMany(cart_line_items, { as: "cart_line_items", foreignKey: "clit_cart_id"});
  order_advertising_product.belongsTo(order_advertising, { as: "orap_orad", foreignKey: "orap_orad_id"});
  order_advertising.hasMany(order_advertising_product, { as: "order_advertising_products", foreignKey: "orap_orad_id"});
  order_advertising.belongsTo(package_type, { as: "orad_pack_name_package_type", foreignKey: "orad_pack_name"});
  package_type.hasMany(order_advertising, { as: "order_advertisings", foreignKey: "orad_pack_name"});
  cart_line_items.belongsTo(product, { as: "clit_prod", foreignKey: "clit_prod_id"});
  product.hasMany(cart_line_items, { as: "cart_line_items", foreignKey: "clit_prod_id"});
  order_advertising_product.belongsTo(product, { as: "orap_prod", foreignKey: "orap_prod_id"});
  product.hasMany(order_advertising_product, { as: "order_advertising_products", foreignKey: "orap_prod_id"});
  cart.belongsTo(status, { as: "cart_stat_name_status", foreignKey: "cart_stat_name"});
  status.hasMany(cart, { as: "carts", foreignKey: "cart_stat_name"});
  cart_line_items.belongsTo(status, { as: "clit_stat_name_status", foreignKey: "clit_stat_name"});
  status.hasMany(cart_line_items, { as: "cart_line_items", foreignKey: "clit_stat_name"});
  order_advertising.belongsTo(status, { as: "orad_stat_name_status", foreignKey: "orad_stat_name"});
  status.hasMany(order_advertising, { as: "order_advertisings", foreignKey: "orad_stat_name"});

  return {
    account,
    cart,
    cart_line_items,
    order_advertising,
    order_advertising_product,
    package_type,
    product,
    status,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
