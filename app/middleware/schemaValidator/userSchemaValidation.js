const { body, validationResult } = require('express-validator');
const userSchemaValidation = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({
            error: error.array()
        })
    }
    next();
}
module.exports = {
    userSchemaValidation
}