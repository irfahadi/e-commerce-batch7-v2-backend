const getWallet = (req,res,next) => {
    req.context.models.wallet.findAll({}).then((result) => {
        return res.send(result)
    }).catch((err) => {
        return res.send(err.message)
    });
}

const insertWallet = (req,res,next) => {
    const {wale_saldo,wale_pin_number,wale_acco_id} = req.body
    const wale_created_on = Date.now()
  req.context.models.wallet.create({wale_saldo,wale_created_on,wale_pin_number,wale_acco_id}).then((result) => {
      return res.send(result)
  }).catch((err) => {
      return res.send(err.message)
  });
}

const updateWallet = (req,res,next) => {
  const {wale_id,wale_saldo,wale_pin_number,wale_acco_id} = req.body
  const wale_created_on = Date.now()
  req.context.models.wallet.update({
    wale_saldo,wale_pin_number,wale_acco_id,wale_created_on
  },{where:{
      wale_id
    }}).then((result) => {
      return res.send(result)
  }).catch((err) => {
      return res.send(err)
  });
}

const deleteWallet = (req,res,next) => {
  const {wale_id} = req.body
  req.context.models.wallet.destroy({wale_id}).then((result) => {
      return res.send(result)
  }).catch((err) => {
      return res.send(err)
  });
}
export {getWallet,insertWallet,updateWallet,deleteWallet}