import Joi from "joi";

const userValidation = Joi.object({
    name: Joi.string().min(3).max(50).required().messages({
        "string.empty": "name is required from the user EMPtYYYY",
        "string.min": "name must be at least 3 characters long",
        "string.max": "name must be at most 50 characters long",
        "any.required": "name is required from the user"
    }),
    age: Joi.number().min(18).max(30).required().messages({
        "number.empty": "age is required from the user",
        "number.min": "age must be at least 18 years old",
        "number.max": "age must be at most 30 years old",
        "any.required": "age is required from the user"
    }),
    email: Joi.string().email().required().messages({
        "string.empty": "email is required from the user",
        "string.email": "email must be valid",
        "any.required": "email is required from the user"
    }),
    password: Joi.string().min(8).required().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).messages({
        "string.empty": "password is required from the user",
        "string.min": "password must be at least 8 characters long",
        "any.required": "password is required from the user",
        "string.pattern": "password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
    })
})

export default userValidation