const express = require('express')
const multer = require('multer')
const uploadFile = require('./services/storage.services')
const postModel = require('./models/post.model')
const cors = require('cors')





const app = express()

app.use(cors())
app.use(express.json())

const upload = multer({storage:multer.memoryStorage()})

app.post('/create_post',upload.single("image"),async(req,res)=>{

    

  const result = await uploadFile(req.file.buffer)
    
  
  const post = await postModel.create({
    image: result.url,
    caption:req.body.caption

  })
    return res.status(201).json({
        message: "Post created successfully",
        data:post
})

})

app.get('/posts',async(req,res)=>{
  
  const totalPosts =await postModel.find()

  return res.status(200).json({
    message:"Fetch Successfully",
    totalPosts:totalPosts
  })


}) 
  

app.delete('/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedPost = await postModel.findByIdAndDelete(id);

        if (!deletedPost) {
            return res.status(404).json({
                message: 'Post not found'
            });
        }

        return res.status(200).json({
            message: 'Post deleted successfully',
            data: deletedPost
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: 'Failed to delete post'
        });
    }
});
module.exports = app