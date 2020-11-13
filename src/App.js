import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import One from './components/One';
import Two from './components/Two';
import Footer from './components/Footer';
import Three from './components/Three';
import AddPost from './components/AddPost';

/* 
  Component: Trong React có 2 loại component
  - Class Component: OOP
  - Function Component - 16.8 hook

  - hook nó là 1 cái hàm đặc biệt của react
  - state: useState();
*/
function App() {
  const data = [
    { id: 1, title: 'TEMPUS FEUGIAT', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure eligendi non cumque iusto illum earum reprehenderit, neque voluptates vero magnam sapiente esse veniam harum obcaecati quas. Quis molestias laboriosam in? 1' },
    { id: 2, title: 'TEMPUS FEUGIAT 2', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure eligendi non cumque iusto illum earum reprehenderit, neque voluptates vero magnam sapiente esse veniam harum obcaecati quas. Quis molestias laboriosam in? 2' },
    { id: 3, title: 'TEMPUS FEUGIAT 3', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure eligendi non cumque iusto illum earum reprehenderit, neque voluptates vero magnam sapiente esse veniam harum obcaecati quas. Quis molestias laboriosam in? 3' },
  ];

  const [posts, setPosts] = useState(data);
  const onDeletePost = (id) => {
    console.log(id);
    const newPosts = data.filter(post => post.id !== id);
    setPosts(newPosts);
  }
  const onAddPost = (post) => {
    const newPost = {
      id: posts.length + 1,
      ...post
    }// Tao post moi co id

    setPosts([
      ...posts,
      newPost
    ])
  }
  return (
    <div>

      <div>
        {/* Header */}
        <Header />
        <a href="#menu" className="navPanelToggle"><span className="fa fa-bars" /></a>
        {/* Banner */}
        <Banner />
        {/* One */}
        <One />
        {/* Two */}
        <Two />
        <AddPost onAdd={onAddPost} />
        {/* Three */}
        <Three posts={posts} deletePost={onDeletePost} />
        {/* Footer */}
        <Footer />
      </div>

    </div>


  )
}
export default App;
