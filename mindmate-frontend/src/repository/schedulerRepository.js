import Repository from "../utils/repository";

const getScheduledTasks =  (id) =>{
    return Repository.get('/scheduler/tasks/' + id)
}

export {
    getScheduledTasks
}