import Repository from "../utils/repository";

const getScheduledTasks = (id) => {
    return Repository.get('/scheduler/tasks/web/' + id)
}

const deleteScheduledTasks = (childId, reminderId) => {
    return Repository.delete('/scheduler/onetime/' + childId + '/' + reminderId)
}

export {
    getScheduledTasks,
    deleteScheduledTasks
}