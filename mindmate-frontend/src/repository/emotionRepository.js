import Repository from '../utils/repository'

const getEmotionList = (days) => {
    return Repository.get('/emotion/'+days)
}

const postResponse = (response) => {
    return Repository.post('/respond', response)
}

export {
    getEmotionList,
    postResponse
}