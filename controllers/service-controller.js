    //refer to service
    const service = require("../services/service");


    exports.getData = async (req, res) => {
        const result = await service.getData();
        console.log(result);
        res.send({message: "Successfully Retrieved", data: result});
    }

    exports.createService = async (req, res) => {
        const result = await service.createService(req.body);
        console.log(result);
        res.send({message: "Successfully Added!"});
    }

    exports.updateService = async (req, res) => {
        const values = req.body; //specify what to update
        const condition = { where : { id: req.body.id}} //specify where to update
        const result = await service.updateServuce({values, condition});
        res.send({message: "Successfully Updated!", result});
    }

    exports.deleteService = async (req, res) => {
        const result = await service.deleteService({where: {id: req.body.id}}); //specify where to update
        res.send({message: "Successfully Deleted!", result});
    }