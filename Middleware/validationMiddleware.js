import userValidation from "../Validation/userValidation.js"

export const validationMiddleware = (req,res, next) =>{
    const validation = userValidation.validate(req.body)
    if(validation.error){
        return res.status(422).json({message: validation.error.details[0].message})
    }
    next()
}