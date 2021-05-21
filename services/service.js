const db = require("../config/config")

exports.getData = async () => {
    try{
        const result = await db.service.findAll();
        return result;
    }catch(err){
        return false;
    }
}

exports.createService = async (body) => {
    try{
        await db.service.create(body);
        return true;
    }catch(err){
        return err;
    }
}

exports.updateService = async (body) => {
    try{
        await db.service.update(body.values, body.condition);
        return true;
    }catch(err){
        return err;
    }
}

exports.deleteService = async (body) => {
    try{
        await db.service.destroy(body);
        return true;
    }catch(err){
        return false;
    }
}