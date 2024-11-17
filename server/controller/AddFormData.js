const dataModel= require('../Schma/data')

const addData=async(req, res)=>{
    try{
        const formdata= req.body
        const saveData= await dataModel.create(formdata)

        res.status(200).json({
            message: "Data Added Successfully",
            data: saveData,
            success : true,
            error: false
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




module.exports= addData