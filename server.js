const express =  require('express');
const path =  require('path')
const ports = process.env.PORT || 8000
const app = express();

    // app.use(express.static(path.join(__dirname, 'public')));

    // app.get('/', (req, res)=>{
    //     res.sendFile(path.join(__dirname, 'public', 'index.html'));
    // })

    // app.get('/about', (req,res) => {
    //     res.sendFile(path.join(__dirname, 'public', 'about.html'))
    // })

    const posts = [
        {id: 1, name:'One'},
        {id: 2, name:'two'},
        {id: 3, name:'three'},
        {id: 4, name:'four'},
        {id: 5, name:'five'}
    ]

    //Get all posts
    app.get('/api/posts', (req, res) => {
        const limit = parseInt(req.query.limit)
        if(!isNaN(limit) && limit>0){
            return res.status(200).json(posts.splice(0,limit))
        }
        res.status(200).json(posts)
        
    })

    //Get single posts
    app.get('/api/posts/:id', (req,res) => {
        const id = parseInt(req.params.id);
        const post = posts.find((post) => post.id===id)
        // res.json(posts.filter((post)=>post.id===id))
        if (!post){
           return res.status(404).json({msg: "Post Not Found"})
        }
        res.status(200).json(post)
        
    })



app.listen(ports,()=>console.log(`Server is running on port ${ports}`))