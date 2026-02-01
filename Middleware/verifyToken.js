
import jwt from "jsonwebtoken"


export const verifyToekn = (req,res,next) => {
    let token = req.headers.token // token 
    jwt.verify(token, "iti", async(err, decoded) => {
        if(err){
            return res.status(401).json({message: "Please Login First"})
        }
        req.user = decoded // token after decode
        next()
    })

}