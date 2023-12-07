const user = require("../models/user")
class usercontroller{
    static adduser = async (req,res) => {
        try{
            const newuser = new user(
                {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                }
            )
            const added_user = await newuser.save();
            return res.send({
                message : "done"
            })
        }
        catch(err)
        {
            console.log(err)
        }
    }
}

module.exports = usercontroller;