const dataModel= require('../Schma/data')



const getData=async(req, res)=>{
    try{

        const data= await dataModel.find()

        res.status(200).json({
            message: "Data got Successfully",
            data: data,
            error: false,
            success: true

        })

    }
    catch(err){
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

module.exports= getData