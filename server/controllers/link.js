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

 export {
    postLink
 }