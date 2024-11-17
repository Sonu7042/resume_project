const dataModel= require('../Schma/data')


const updateData= async(req, res)=>{
    try{


        const {id, name, email, password, contact, role}=req.body

        // console.log(id, name, email, password, contact, role)

        const payload={
            ...(name && {name:name}),
            ...(email && {email:email}),
            ...(password && {password:password}),
            ...(contact && {contact:contact}),
            ...(role && {role:role}),
        }

        const updateData= await dataModel.findByIdAndUpdate(id, payload)
        
        res.status(200).json({
            message: "Data updated Successfully",
            error: false,
            success: true,
            data: updateData

        })

    }
    catch(err){
        res.status(400).json({
            message: err.message || err,
            error: false,
            success: true

        })
    }
 

}


module.exports= updateData
