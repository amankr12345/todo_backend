const TodoModel=require('../model/post')

exports.addToDo=async (req,res)=>{
    try{
        const Item = await new TodoModel({
            item:req.body.item,
            description:req.body.description
        })
        const saveItem=await Item.save()
        res.status(200).send("adeed")

    }catch(err)
    {
        res.status(500).send(err)
    }
}

exports.show=async (req,res)=>{
    try{
        const allTodo= await TodoModel.find()
        res.status(200).send(allTodo)

    }catch(err)
    {
        res.status(500).send(err)
    }
}

exports.update=async (req,res)=>{
    try{
        const updateTodo=await TodoModel.findByIdAndUpdate(req.params.id,{
            item:req.body.item,
            description:req.body.description,
        },{new:true,
            runValidators:true
        })
        res.status(200).send(updateTodo)
    }catch(err)
    {
        res.status(500).send(err)
    }
    
}

exports.delete=async(req,res)=>{
    try{
        await TodoModel.findByIdAndDelete(req.params.id)
        res.status(200).send("deleted")
    }catch(err){
        res.status(500).send(err)
    }
    
}