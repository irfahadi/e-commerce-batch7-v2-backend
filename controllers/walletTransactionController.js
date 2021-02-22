const getWalletTransaction = (req,res,next) => {
  req.context.models.walletTransaction.findAll({}).then((result) => {
      return res.send(result)
  }).catch((err) => {
      return res.send(err.message)
  });
}

const insertWalletTransaction = (req,res,next) => {
    const {watr_numbers,watr_debet,watr_credit,watr_acc_target,watr_wale_id,watr_paty_name} = req.body
    const watr_date = Date.now()
    req.context.models.walletTransaction.create({
        watr_numbers,watr_date,watr_debet,watr_credit,watr_acc_target,watr_wale_id,watr_paty_name
    }).then((result) => {
        return res.send(result)
    }).catch((err) => {
        return res.send(err.message)
    });
}

const updateWalletTransaction = (req,res,next) => {
    const {watr_id,watr_numbers,watr_debet,watr_credit,watr_acc_target,watr_wale_id,watr_paty_name} = req.body
    const watr_date = Date.now()
    req.context.models.walletTransaction.update({
        watr_numbers,watr_date,watr_debet,watr_credit,watr_acc_target,watr_wale_id,watr_paty_name
    },{where:{watr_id}}).then((result) => {
        return res.send(result)
    }).catch((err) => {
        return res.send(err.message)
    });
}

const deleteWalletTransaction = (req,res,next) => {
  const {watr_id} = req.body
  req.context.models.walletTransaction.destroy({where:{watr_id}}).then((result) => {
      return res.sendStatus(200)
  }).catch((err) => {
      return res.send(err.message)
  });
}

export {getWalletTransaction,insertWalletTransaction,updateWalletTransaction,deleteWalletTransaction}