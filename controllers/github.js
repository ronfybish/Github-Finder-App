const dotenv=require('dotenv').config()
const axios=require('axios')
module.exports={

    getUsers:async(req,res)=>{
        try {
            const response= await axios.get(`https://api.github.com/users?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`)
            res.status(200).json(response.data)
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error in get users');
        }
    },

    getUser:async(req,res)=>{
        const username=req.params.username
        try {
            const response = await axios.get(
                `https://api.github.com/users/${username}?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
            );
            res.status(200).json(response.data)
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error in get user by ID');
        }
    },

    searchUsers:async(req,res)=>{
        const text=req.params.text
        try {
            const response = await axios.get(
                `https://api.github.com/search/users?q=${text}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
              );
            res.status(200).json(response.data)
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error in get users');
        }
    },

    getUserRepos:async(req,res)=>{
        const username=req.params.username
        try {
            const response = await axios.get(
                `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
            );
            res.status(200).json(response.data)           
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error in get users');
        }
    },
    
}