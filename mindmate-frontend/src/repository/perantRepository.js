import Repository from "../utils/repository";

const getParentDetails = (id) => {
    return Repository.get('/parent/'+id)
}

const updateParentDetails = () => {
    return Repository.post("/")
}

const updatePassword = (id) => {
    return Repository.post("/"+id)
}

export {
    getParentDetails,
    updateParentDetails,
    updatePassword,
}