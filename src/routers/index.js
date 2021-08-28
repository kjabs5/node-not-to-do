import express from 'express'
const route = express.Router()
import { taskList } from '../assets/tickets.js'
import {
  insertTicket, getTasks, getATask,
  deleteATask, deleteTasks, updateTodo
} from '../modules/TaskList.Model.js'

route.all('/', (req, res, next) => {
  console.log('we got hit')
  next()
  // res.json({ message: 'got hit' })
})

//return all tickets
route.get('/', async (req, res) => {
  const taskLists = await getTasks()
  console.log(taskLists)
  res.json({ result: taskLists })
})


//return a ticket
route.get('/:id?', async (req, res) => {
  const { id } = req.params
  try {

    if (id) {
      const result = await getATask(id)
      res.json({ result })
    }
    else {
      const taskLists = await getTasks()
      console.log(taskLists)
      res.json({ result: taskLists })
    }
  } catch (error) {
    console.log(error)
    res.json({
      message: "We are unable to process your request, Please contact administrator."
    })
  }
})

//add new ticket
route.post('/', async (req, res) => {
  // store data in the database
  const result = await insertTicket(req.body)

  console.log(result)
  res.json(result)
})

//update ticket
route.patch('/', async (req, res) => {
  //
  try {
    if (req.body) {
      const result = await updateTodo(req.body)
      const msg = result ? "selected data is updated" : "no data avalable to patch"

    }
  }
  catch (error) {
    console.log(error)
    res.json({
      message: "We are unable to process your request for update, Please contact administrator."
    })
  }

})

//delete ticket
route.delete('/', async (req, res) => {
  const { id } = req.body;
  try {
    if (!id) {

      res.json("error in id")
    }
    //  const result = await deleteATask(id)
    const result = await deleteTasks(id)
    res.json({ result })
  }
  catch (error) {
    console.log(error)
    res.json({
      message: "We are unable to process your request for delete, Please contact administrator."
    })
  }

})

export default route
