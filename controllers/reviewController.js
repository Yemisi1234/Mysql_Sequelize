const db = require('../index')

const Review = db.reviews
const Reviews = async(req, res)=> {
    try{
        const body = {
            productId: req.body.productId,
            rating: req.body.rating,
            description: req.body.description
        }
        let reviews =  await Review.create(body)
        res.status(200).send(reviews)
    }
   catch(err){
       console.log(err)
   }
   return Reviews
}

module.exports = Reviews