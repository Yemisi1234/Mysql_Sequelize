module.exports = (sequelize, DataTypes) =>{

    const Review= sequelize.define('Review',{
        productId:{
            type: DataTypes.INTEGER,
        },
         rating: {
             type: DataTypes.STRING,
             allowNull: false
         },
         description: {
             type: DataTypes.STRING,
             allowNull: false
         }
    })
    Review.associate = (models) => {
        Review.belongsTo(models.Product, {
          foreignKey: 'productId'
        });
      };
      Review.associate = (models) => {
    Review.BelongsToMany(models.User, {
          foreignKey: 'productId'
        });
      };
    return Review;
}

