import TicketListSchema from './TaskLists.schema.js'

export const insertTicket = (newTask) => {
  return new Promise((resolve, reject) => {
    TicketListSchema(newTask)
      .save()
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

//read data from database

export const getTasks = () => {
  return new Promise((resolve, reject) => {
    TicketListSchema.find()
      .then((data) => {
        // console.log(data)
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
//get a single ticket

export const getATask = (_id) => {
  return new Promise((resolve, reject) => {
    TicketListSchema.findById(_id).then(
      data => resolve(data)).catch(
        error => reject(error)
      )
  })
}

//delete a single ticket

export const deleteATask = (_id) => {
  return new Promise((resolve, reject) => {
    TicketListSchema.findByIdAndDelete(_id).then(
      data => resolve(data)).catch(
        error => reject(error)
      )
  })

}

//delete Tasks
export const deleteTasks = (_ids) => {
  return new Promise((resolve, reject) => {
    TicketListSchema.deleteMany({
      _id: {
        $in: ids
      }
    }).then(
      data => resolve(data)).catch(
        error => reject(error)
      )
  })

}

//Patch
export const updateTodo = ({ id, todo }) => {
  return new Promise((resolve, reject) => {
    TicketListSchema.findByIdAndUpdate(
      id, { todo }
    )
  }).then(result => resolve(result)).catch(error => reject(error))
}
//mark as to do

//mar as not to do
