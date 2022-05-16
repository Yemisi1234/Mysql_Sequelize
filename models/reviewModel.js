module.exports = (sequelize, DataTypes) =>{

    const Reviews = sequelize.define('reviews',{
         rating: {
             type: DataTypes.STRING,
             allowNull: false
         },
         description: {
             type: DataTypes.STRING,
             allowNull: false
         }
    })
    return Reviews
}