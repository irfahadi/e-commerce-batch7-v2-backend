const vendorRules = (sequelize,DataTypes) => {
    const vendorRules = sequelize.define('vendor_rules', {
        veru_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        veru_bill_amount: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        veru_vendor_name: {
          type: DataTypes.STRING(5),
          allowNull: true,
          references: {
            model: 'vendor',
            key: 'vendor_name'
          }
        }
      }, {
        sequelize,
        tableName: 'vendor_rules',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: "vendor_rules_pkey",
            unique: true,
            fields: [
              { name: "veru_id" },
            ]
          },
        ]
      });
      // vendorRules.associate = models => {
      //   vendorRules.belongsTo(models.vendor,{foreignKey : 'veru_vendor_name'});
      // }

      return vendorRules;
    
}

export default vendorRules;