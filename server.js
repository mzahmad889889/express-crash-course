import express from "express"
import path from "path"
const ports = process.env.PORT
import posts from './posts.js'
import logger from "./middleware/logger.js"
import error from "./middleware/error.js"
import notFound from "./middleware/notFound.js"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__filename);
const app = express();

    app.use(express.static(path.join(__dirname, 'public')));

    // app.get('/', (req, res)=>{
    //     res.sendFile(path.join(__dirname, 'public', 'index.html'));
    // })

    // app.get('/about', (req,res) => {
    //     res.sendFile(path.join(__dirname, 'public', 'about.html'))
    // })
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//logger
app.use(logger)

//url
app.use('/api/posts', posts)

//errorhandler
app.use(notFound)
app.use(error)

app.listen(ports,()=>console.log(`Server is running on port ${ports}`));