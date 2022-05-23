module.exports = (sequelize, DataTypes) =>{

    const Product = sequelize.define('Product',{
         title: {
             type: DataTypes.STRING,
             allowNull: false
         },
         description: {
             type: DataTypes.STRING,
             allowNull: false
         },
         price: {
             type: DataTypes.INTEGER,
             allowNull: false
         }
    })
    Product.associate = (models) => {
        Product.hasOne(models.Review, {
          foreignKey: 'productId'
        });
      };
      Product.associate = (models) => {
        Product.BelongsToMany(models.User, {
          foreignKey: 'userId'
        });
      };
    return Product
}
