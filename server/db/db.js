const mongooose= require('mongoose')




const link="mongodb+srv://admin:sonusingh@cluster0.4e8zdvt.mongodb.net/"

const connectDB=async()=>{
    try{
        await mongooose.connect(link)
        console.log("db is connected")
    }
    catch(err){
        console.log("this is error", err)

    }

}

module.exports= connectDB

