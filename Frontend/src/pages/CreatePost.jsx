import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const CreatePost = () => {

const navigate = useNavigate()

const handleSubmit= async(e)=>{

  e.preventDefault()
  const formdata = new FormData(e.target)



  await  axios.post('http://localhost:3000/create_post',formdata)
    .then((res)=>{
      
    navigate('/Feed') 
      
    })
    .catch((err)=>{
    console.log(err);
    alert("An Error Accured While Posting")
      
      
    })
  }
  return (
   <section className='create-post-section'>

    <h1> CreatePost</h1>
    <form onSubmit={handleSubmit}>

        <input type='file' name='image' accept='image/*'/>
        <input type='text' name='caption' placeholder='Enter Caption' required />
        <button type='submit'>Submit</button>
    </form>
   </section>
  )
}

export default CreatePost