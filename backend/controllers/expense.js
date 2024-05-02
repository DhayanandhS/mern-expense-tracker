const ExpenseSchema = require("../models/ExpenseModel")


exports.addExpense = async(req,res) =>{
    const {title, amount, category, description, date} = req.body

    const income = ExpenseSchema({
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
        res.status(200).json({message: 'Expense Added Successfully!!'})
    } catch (error) {
        res.status(500).json({message: 'Error!!'})
    }

    console.log(income)
}

//getting all documents
exports.getExpense = async(req,res) => {
    try {
        const incomes = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Error!!'})
    }
}

//delete documents

exports.deleteExpense = async(req,res) => {
    //first getting id of the documents to delete it
    const {id} = req.params; 
    ExpenseSchema.findByIdAndDelete(id)
    
    .then((income) => {
        res.status(200).json({message:'Expense Deleted'})
    })
    .catch((error) => {
        res.status(500).json({message: 'error!'})
    })
}