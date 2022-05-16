const dbConfig = require('./config/db.config')
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USERNAME,
    dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false
    }
)

sequelize.authenticate().then(()=>{
    console.log('connecting...')
}).catch(err => console.log(err))

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.products = require('./models/productModel')(sequelize, DataTypes)
db.reviews = require('./models/reviewModel')(sequelize, DataTypes)

db.sequelize.sync({force: false})
.then(()=>{
    console.log('...syncing')
})


db.products.hasMany(db.reviews, {
    foreignKey: 'product_id',
    as: 'review'
})

db.reviews.belongsTo(db.products, {
    foreignKey: 'product_id',
    as: 'product'
})

module.exports = db

