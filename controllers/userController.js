const db = require('../index')

const User= db.users
const createUsers = async (req, res)=>{
    try{
        const data = {
            username: req.body.username,
            password: req.body.password
        }
        let users =  await User.create(data)
        res.status(200).send(users)
    }catch(err){
     console.log(err)
    }
    return createUsers
}

module.exports = createUsers
