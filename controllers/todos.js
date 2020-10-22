var Model = require('../models')

const todos = {

     getAllTodos: async (req, res) => {
        let todos = []
		try {
				todos = await Model.Todos.findAll({
                    include: [{
                        model: Model.Comments
                    }]
                })
		} catch(e) {
				console.log(e)
		}

		res.json(todos)
    },

    getTodo: async (req, res) => {
        let todo = []
        
        console.log(req)

		try {
			todo = await Model.Todos.findOne({
				where: {
					id: req.params.id
                },
                include: [{
                    model: Model.Comments
                }]
			})
		} catch(e) {
				console.log(e)
		}

		res.json(todo)
	},

    createTodo: async (req, res) => {
        let todo = {}

        // console.log(req)

        try{
            todo = await Model.Todos.create({
                title: req.body.title,
                description: req.body.description
            })
        } catch(e){
            console.log(e)
        }
        res.json(todo) //insert data in DB todos
    },

    updateTodo: async (req, res) => {
        let todo = {}

        try{
            todo = await Model.Todos.update(
                req.body, {
                    where:{
                        id: req.params.id
                    }

            })

        }catch(e){
            console.log(e)
        }
        res.json(todo)

    },

    deleteTodo: async (req,res) => {

        await Model.Todos.destroy({
			where: {
				id: req.params.id
			}	
		})

		res.status(204).json({
			status: 'Success Delete'
		})
    },
    
    addComment: async (req, res) => {

		let comment = {}

		try {
			comment = await Model.Comments.create({
				comment: req.body.comment,
				TodoId: req.params.id
			})
		} catch(e) {
			console.log(e)
		}

		res.json(comment)
	}
}


module.exports = todos