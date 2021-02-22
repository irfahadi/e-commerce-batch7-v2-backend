// view data 
const readExpeditionMethod = async (req, res)=>{
    const expedition = await req.context.models.expedition.findAll();
    return res.send(expedition);
}



// filter data
const findExpeditionMethod = async (req, res)=>{
    const expedition = await req.context.models.expedition.findByPk(
        req.params.expeditionId
    );
    return res.send(expedition);
}


// add Data
const addExpeditionMethod = async (req, res)=>{
    const { expe_id, expe_name} = req.body.data;
    const expedition = await req.context.models.expedition.create({
        expe_id: expe_id,
        expe_name: expe_name
    });
    return res.send(expedition);
}


const editExpeditionMethod = async (req, res)=>{
    const {expe_name} = req.body.data;
    const expedition = await req.context.models.expedition.update({
        expe_name: expe_name
    },
    {
        returning: true,
        where: { expe_id: req.params.expeId }
    });
    return res.send(true);
}

const deleteExpeditionMethod = async (req, res)=>{
    const expedition = await req.context.models.expedition.destroy({
        where: {expe_id : req.params.expeId}
    });
};

export default {
    readExpeditionMethod,
    findExpeditionMethod,
    addExpeditionMethod,
    editExpeditionMethod,
    deleteExpeditionMethod
}