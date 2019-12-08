const joi = require('joi')

exports.validate_user = (req,res,next) => {
    let schema = joi.object().keys({
        nilai1 : joi.string().required().min(1),
        nilai2 : joi.string().required().min(1),
        operator : joi.string().required().min(1)
    })

    joi.validate(req.body,schema)
    .then(validate => {
        next()
    })
    .catch(err => {
        res.render("kalku",{message : err.details})
    })
}