var DataTypes = require("sequelize").DataTypes;
var _account = require("./account");
var _address = require("./address");
var _city = require("./city");
var _kecamatan = require("./kecamatan");
var _kodepos = require("./kodepos");
var _province = require("./province");
var _users = require("./users");

function initModels(sequelize) {
  var account = _account(sequelize, DataTypes);
  var address = _address(sequelize, DataTypes);
  var city = _city(sequelize, DataTypes);
  var kecamatan = _kecamatan(sequelize, DataTypes);
  var kodepos = _kodepos(sequelize, DataTypes);
  var province = _province(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  address.belongsTo(account, { as: "addr_accu", foreignKey: "addr_accu_id"});
  account.hasMany(address, { as: "addresses", foreignKey: "addr_accu_id"});
  kecamatan.belongsTo(city, { as: "kec_city", foreignKey: "kec_city_id"});
  city.hasMany(kecamatan, { as: "kecamatans", foreignKey: "kec_city_id"});
  kodepos.belongsTo(kecamatan, { as: "kodepos_kec", foreignKey: "kodepos_kec_id"});
  kecamatan.hasMany(kodepos, { as: "kodepos", foreignKey: "kodepos_kec_id"});
  address.belongsTo(kodepos, { as: "addr_kodepos_kodepo", foreignKey: "addr_kodepos"});
  kodepos.hasMany(address, { as: "addresses", foreignKey: "addr_kodepos"});
  city.belongsTo(province, { as: "city_prov", foreignKey: "city_prov_id"});
  province.hasMany(city, { as: "cities", foreignKey: "city_prov_id"});
  account.belongsTo(users, { as: "acco_user", foreignKey: "acco_user_id"});
  users.hasMany(account, { as: "accounts", foreignKey: "acco_user_id"});

  return {
    account,
    address,
    city,
    kecamatan,
    kodepos,
    province,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
