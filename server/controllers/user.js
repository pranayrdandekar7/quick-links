import User from "./../models/User.js"

const postSignup= async(req,res)=>
    {
        const { name ,email ,password} =req.body

        const user = new User({
            name,
            email,
            password
        })

        try{

            const savedUser = await user.save();
            res.status(201).json({
                suceess:true,
                message:`User created successfully`,
                data:savedUser
            })
        }
        catch(e){
            res.status(404).json({
                suceess:false,
                message:e.message,
                data :null
            })
        }

    }

    const postLogin = async(req,res)=>{

        const {email,password} =req.body
        console.log(email , password)
    
        const user = await User.findOne({
           email:email,
           password:password
        });
     
        if(user){
           res.status(200).json({
              success:true,
              message:`user login successfully`,
              data:user
           })
        }
        else{
           res.json({
              success:false,
              message:`invalid credintial`,
              data:null
           })
        }
     }
export {postSignup,postLogin}