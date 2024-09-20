
import Links from '../models/Links.js'
import User from "./../models/User.js"

const postLink = async(req,res)=>{

    const {target,slug,title,user} = req.body ;
    const link = new Links({

      title,
      slug,
      target,
      user
    })
try{
    const savedLink = await link.save()

    res.json({
        success:true,
        data:savedLink,
        message:'link created successfully'
    })
 }
 catch(err){
   res.json({
      success:false,
      message:err.message,
      data:null
   })
 } };

 const getSlugRedirect = async (req,res)=>{

    const {slug} =req.params ;

    const link = await Links.findOne({slug:slug}) ;
    
    if (!link){
        return res.status(404).json({
           success: false,
           message:"link not found",
           
        })
    }

    link.views = link.views + 1 ;
     await link.save();

    res.redirect(link.target)
    
 }

  const getLinks = async (req, res) => {
   try {
     const { userId } = req.query;
     const user = await User.findById(userId);
     const links = await Links.find({ user : userId }).sort({ createdAt: -1 });
 
     res.json({
       message: "All links featched successfully",
       success: true,
       data: links,
     });
   } catch(e) {
     res.json({
       success: false,
       message: e.message
     });
   }
 };

 export {
    postLink,
    getSlugRedirect,
    getLinks 
 }