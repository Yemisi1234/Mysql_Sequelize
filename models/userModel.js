module.exports = (sequelize, DataTypes) =>{

    const User = sequelize.define('User',{
       username:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        password: {
           type: DataTypes.INTEGER,
           allowNull: false 
        }
    })
    User.associate = (models) => {
        User.hasMany(models.Product, {
            foreignKey: 'userId'
        });
      };
      
    User.associate = (models) => {
    User.hasMany(models.Review, {
        foreignKey: 'userId'
    });
    };
      return User
}