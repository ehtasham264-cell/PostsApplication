import React from 'react'
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import CreatePost from './pages/CreatePost.jsx'
import Feed from './pages/Feed'

const App = () => {
  return (
    
    <Router>
       <Routes>
         <Route path='/'  element={<Feed />}/>
        <Route path='/create-posts'  element={<CreatePost />}/>
         <Route path='/feed'  element={<Feed />}/>
       </Routes>
    </Router>

    
  )
}

export default App