import Repository from "../utils/repository";

const getParentDetails = (id) => {
    return Repository.get('/parent/'+id)
}

const updateParentDetails = (Details) => {
    return Repository.put("/parent",Details)
}

const updateParentPassword = (id) => {
    return Repository.post("/parent/"+id)
}

export {
    getParentDetails,
    updateParentDetails,
    updateParentPassword,
}