const {CustomAPIError}=require('../errors');

const errorHandler=(err,req,res,next)=>{
    if(err instanceof CustomAPIError)
    {
        console.log('in error middlware2');
        return res.status(err.statusCode).json({msg:err.message});
       
    }
    console.log('in error middlware3');
    return res.status(err.status).json({msg:err.message});
}

module.exports=errorHandler;