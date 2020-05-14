const dotenv=require('dotenv').config()
const axios=require('axios')
module.exports={

    getProducts:async(req,res)=>{
        const topic=req.params.topic
        try {
            const config={
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.PRODUCT_HUNT_TOKEN}`
                }
            }
            const response = await axios.get(`https://api.producthunt.com/v1/posts/all?search[topic]=${topic}`,config);
            res.status(200).json(response.data.posts)
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error in get products by topic');
        }
    },

    getProduct:async(req,res)=>{
        try {
            const id=req.params.id
            console.log(id)
            const config={
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.PRODUCT_HUNT_TOKEN}`,
                    'Host': 'api.producthunt.com'
                }
            }
            const response = await axios.get(`https://api.producthunt.com/v1/posts/${id}`,config);
            res.status(200).json(response.data.post)
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error in get user by ID');
        }
    },
    
}