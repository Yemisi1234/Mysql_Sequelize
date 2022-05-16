// const { products } = require('../index')
const publishToQueue = require('../servces/my_service');
const db = require('../index')

const Products = db.products
const Reviews = db.reviews

// const createProducts = async (req, res)=>{
//     try{
//         const data = {
//             title: req.body.title,
//             description: req.body.description,
//             price: req.body.price
//         }
//         let products =  await Products.create(data)
//         console.log(Products)
//         res.status(200).send(products)
//     }catch(err){
//      console.log(err)
//     }
// }

const getAllProducts = async(req, res)=>{
    const products = await Products.findAll({}) 
    res.status(200).send(products)
}

const getOneProduct = async function(req, res){
       let id = req.params.id;
    try{
        const project = await Products.findByPk(id)
        res.status(200).send(project)
        if(project === null){
            console.log('Not found!');
        }
    }
    catch(err){
       console.log(err)
    }
}
  const deleteProduct = async(req, res)=>{
    let id = req.params.id;
     const data = await Products.destroy({ where: { id: id }}) 
     res.status(200).send(`Product is deleted`)
        .then(num => {
          if (num == null) {
            res.send({
              message: "Tutorial was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
            });
          }
      })
  }

  const updateProduct = async(req, res)=>{
      let id = req.params.id;

      const data = await Products.update(req.body, {where: {id : id}})
      console.log(data)
      res.status(200).send(data)

  }
  const rabbitMq = async(req, res)=>{
    try{
      let { queueName, payload} = req.body;
    await publishToQueue( queueName, payload);
    
    res.status(200).send({"message-sent":true})
    }
    catch(err){
      res.status(500).send({"message-sent":false})
    }
         
    // let { queueName, payload} = req.body;
    
    // res.send(queueName, payload)
    // await publishToQueue(title, description, price);
    // res.statusCode = 200;
    // res.data = {"message-sent":true};
    // next();
  }
   
module.exports = {rabbitMq , getAllProducts, getOneProduct, deleteProduct, updateProduct};



