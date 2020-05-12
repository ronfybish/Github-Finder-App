const router= require('express').Router()

const {
    getUsers,
    searchUsers,
    getUser,
    getUserRepos,
}=require('../controllers/github')

router.get('/',getUsers)
router.get('/:username',getUser)
router.get('/search/:text',searchUsers)
router.get('/repos/:username',getUserRepos)


module.exports=router
