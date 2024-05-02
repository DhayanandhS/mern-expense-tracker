const IncomeSchema = require("../models/IncomeModel")


exports.addIncome = async(req,res) =>{
    const {title, amount, category, description, date} = req.body

    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        if(!title || !category || !description || !date){
            return res.status(400).json({message: 'All fiels are required!'})
        }
        if(amount <=0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount must be positive!'})
        }
        await income.save()
        res.status(200).json({message: 'Income Added Successfully!!'})
    } catch (error) {
        res.status(500).json({message: 'Error!!'})
    }

    console.log(income)
}

//getting all documents
exports.getIncomes = async(req,res) => {
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Error!!'})
    }
}

//delete documents

exports.deleteIncome = async(req,res) => {
    //first getting id of the documents to delete it
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id)
    .then((income) => {
        res.status(200).json({message:'Income Deleted'})
    })
    .catch((error) => {
        res.status(500).json({message: 'error!'})
    })
}