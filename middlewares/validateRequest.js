const joi = require('joi');

const validator = require('express-joi-validation').createValidator({passError: true});

const schemaCreate = joi.object({
    id: joi.integer().required(),
    lrn: joi.integer().required(),
    departmend_id: joi.integer().required(),
    age: joi.integer().required(),
    section: joi.string().required(),
    yearlevel: joi.integer().required(),
    section: joi.string().required(),
    lastschool_attended: joi.string().required(),
    permanentbarangay: joi.string().required(),
    permanentprovince: joi.string().required(),
    presentbarangay: joi.string().required(),
    status: joi.string().required(),
})

const schemaUpdate = joi.object({
    id: joi.integer().required(),
    lrn: joi.integer().required(),
    departmend_id: joi.integer().required(),
    age: joi.integer().required(),
    section: joi.string().required(),
    yearlevel: joi.integer().required(),
    section: joi.string().required(),
    lastschool_attended: joi.string().required(),
    permanentbarangay: joi.string().required(),
    permanentprovince: joi.string().required(),
    presentbarangay: joi.string().required(),
    status: joi.string().required(),
})
module.exports = {validator, schema};