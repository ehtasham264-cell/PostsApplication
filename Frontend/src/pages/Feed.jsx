import React, { useState,useEffect} from 'react';
import axios from 'axios'

const Feed = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{

        axios.get('http://localhost:3000/posts')
        .then((res)=>{
            setPosts(res.data.totalPosts);
            
        })
        .catch((err)=>{
            console.log("Error Fetching Posts",err);
            
        })
    },[])

    const handleDelete = async(id)=>{
        id.preventDefault()
    try{
        await axios.delete(`http://localhost:3000/posts/${id}`)

        setPosts((prevPosts)=>{
            prevPosts.filter((post)=>post.id!==id)
        })
        alert('Post deleted successfully!');
    } catch(err){
        console.error(err);
        alert('Failed to delete post');
    } 
    
    
    }
    return (
        <section className="feed-section">

            

            {posts.length > 0 ? (

                <div className="posts-container">
                    

                    {posts.map((post) => (
                        <div key={post.id} className="post-card">

                            <img
                                src={post.image}
                                alt={post.caption}
                            />

                            <div className="post-content">
                                <p>{post.caption}</p>

                            <button onClick={() => handleDelete(post._id)}>
                                Delete
                            </button>    
                            </div>

                        </div>
                    ))}

                </div>

            ) : (
                <h2 className="empty-feed">
                    No posts available
                </h2>
            )}

        </section>
        
    );
};

export default Feed;