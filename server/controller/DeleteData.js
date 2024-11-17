const dataModel= require('../Schma/data')


const deleteData=async(req, res)=>{
    try{

        const {id}= req.params
        const searchId= await dataModel.findByIdAndDelete(id)
        res.status(200).json({
            message: "User delete Successfully",
            success: true,
            error: false,
            data: searchId
        })

    }
    catch(err){
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false,

        })
    }
}

module.exports=deleteData