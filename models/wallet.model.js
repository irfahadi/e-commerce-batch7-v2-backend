const wallet = (sequelize,DataTypes) => {
  const Wallet = sequelize.define('wallet',{
    wale_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      wale_created_on: {
        type: DataTypes.DATE
      },
      wale_saldo: {
        type: DataTypes.INTEGER
      },
      wale_pin_number: {
        type: DataTypes.INTEGER
      },
      wale_acco_id: {
        type: DataTypes.INTEGER,
        references:{
            model : 'account',
            key:'acco_id'
        }
      },
    },{
        sequelize,
        freezeTableName:true,
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: "wallet_pkey",
            unique: true,
            fields: [
              { name: "wale_id" },
            ]
          },
        ]
      })
    return Wallet
}
export default wallet