import Links from '../models/Links.js'

const postLink = async(req,res)=>{

    const {target,slug,title} = req.body ;
    const link = new Links({

      title,
      slug,
      target
    })

    const savedLink = await link.save()

    res.json({
        success:true,
        data:savedLink,
        message:'link created successfully'
    })
 }

 const getSlugRedirect = async (req,res)=>{

    const {slug} =req.params ;

    const link = await Links.findOne({slug:slug}) ;
    
    if (!link){
        return res.json({
           success: false,
           message:"link not found",
           
        })
    }

    link.views = link.views + 1 ;
     await link.save();

    res.redirect(link.target)
    
 }

 export {
    postLink,
    getSlugRedirect
 }