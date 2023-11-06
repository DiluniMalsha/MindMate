import Repository from '../utils/repository'

const getEmotionList = () => {
    return Repository.get('/emotion/')
}


export {
    getEmotionList
}