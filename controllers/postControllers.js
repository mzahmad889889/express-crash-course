let posts = [
    {id: 1, title:'One'},
    {id: 2, title:'two'},
    {id: 3, title:'three'},
    {id: 4, title:'four'},
    {id: 5, title:'five'}
]

//Get all posts
//GET /api/posts

export const getPosts = (req, res) => {
    const limit = parseInt(req.query.limit)
    if(!isNaN(limit) && limit>0){
        return res.status(200).json(posts.splice(0,limit))
    }
    res.status(200).json(posts)

};

//Get single post
//GET /api/posts/:id

export const getSinglePost = (req,res,next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id===id)
    // res.json(posts.filter((post)=>post.id===id))
    if (!post){
       const error = new Error(`Post Not Found with id of ${id}`);
       error.status = 404;
       return next(error);
    }
    res.status(200).json(post)

}

//create new post
//POST /api/posts

export const createPost = (req, res, next) => {
    let newPost = {
        id: posts.length + 1,
        title: req.body.title,
    };
    if(!newPost.title){
       const error = new Error(`Please include title`);
       error.status = 400;
       return next(error);
    }
    posts.push(newPost);
    res.status(201).json(posts);
}

//update post
//PUT /api/posts/:id

export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post)=>post.id===id)

    if(!post){
       const error = new Error(`Post Not Found with id of ${id}`);
       error.status = 404;
       return next(error);
    }
    post.title = req.body.title;
    res.status(201).json(posts)
}

//delete post
//DELETE /api/posts/:id

export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post)=>post.id===id)

    if(!post){
        const error = new Error(`Post Not Found with id of ${id}`);
        error.status = 404;
        return next(error);
    }
    posts = posts.filter((post)=>post.id !== id);
    res.status(201).json(posts)
}