import Repository from '../utils/repository'

const getDataSet = (dateTime) => {
    return Repository.post('/dataset/', dateTime)
}


export {
    getDataSet
}