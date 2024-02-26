const Category =require('../models/category')

//  to reterive a category by its id
module.exports.getCategory=async function(req,res)
{
    try {
        const category= await Category.find()
        return res.status(200).json({
            category
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
        
    }

}