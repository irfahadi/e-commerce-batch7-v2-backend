const getBankAccount = (req,res,next) => {
  req.context.models.bankAccount.findAll({}).then((result) => {
      return res.send(result)
  }).catch((err) => {
      return res.send(err.message)
  });
}

const insertBankAccount = (req,res,next) => {
    const {bacc_owner,bacc_acc_number,bacc_saldo,bacc_acco_id,bacc_bank_id} = req.body
    req.context.models.bankAccount.create({bacc_owner,bacc_acc_number,bacc_saldo,bacc_acco_id,bacc_bank_id})
    .then((result) => {
        return res.send(result)
    }).catch((err) => {
        return res.send(err.message)
    });
}

const updateBankAccount = (req,res,next) => {
    const {bacc_id,bacc_owner,bacc_acc_number,bacc_saldo,bacc_acco_id,bacc_bank_id} = req.body
    req.context.models.bankAccount.update({bacc_owner,bacc_acc_number,bacc_saldo,bacc_acco_id,bacc_bank_id},{
        where:{bacc_id}
    }).then((result) => {
        return res.send(result)
    }).catch((err) => {
        return res.send(err.message)
    });
}

const deleteBankAccount = (req,res,next) => {
    const {bacc_id} = req.body
    req.context.models.bankAccount.destroy({where:{bacc_id}})
    .then((result) => {
        return res.sendStatus(200)
    }).catch((err) => {
        return res.send(err.message)
    });
}

export {getBankAccount,insertBankAccount,updateBankAccount,deleteBankAccount}