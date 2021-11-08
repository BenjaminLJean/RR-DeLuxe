import { useState, useEffect } from "react"
import { Switch, Route, useHistory } from "react-router-dom";
import PostCreate from "../screens/Forums/PostCreate";
import PostEdit from "../screens/Forums/PostEdit";
import Posts from "../screens/Forums/Posts";
import Home from "../screens/Home/Home";
import { getAllAvatars, postAvatar } from "../services/avatars";
import { deletePost, getAllPosts, postPost, putPost } from "../services/posts";
import AvatarCreate from '../screens/Avatar/AvatarCreate'

import './MainContainer.css'


export default function MainContainer(props) {

  const [posts, setPosts] = useState([]);
  const [avatars, setAvatars] = useState([]);
  const history = useHistory();
  const { currentUser } = props

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts();
      setPosts(postList);
    }
    fetchPosts();
  }, [])

  useEffect(() => {
    const fetchAvatars = async () => {
      const avatarList = await getAllAvatars();
      setAvatars(avatarList);
    }
    fetchAvatars();
  }, [])

  const handlePostCreate = async (formData) => {
    const newPost = await postPost(formData);
    setPosts(prevState => [...prevState, newPost]);
    history.push("/forums")
  }

  const handleAvatarCreate = async (formData) => {
    const newAvatar = await postAvatar(formData);
    setAvatars(prevState => [...prevState, newAvatar]);
    history.push("/chapterone")
  }

  const handlePostUpdate = async (id, formData) => {
    const newPost = await putPost(id, formData);
    setPosts(prevState => prevState.map(post => {
      return post.id === Number(id) ? newPost : post;
    }))
    history.push("/forums")
  }

  const handlePostDelete = async (id) => {
    await deletePost(id);
    setPosts(prevState => prevState.filter(post => post.id !== id))
  }

  return (
    <Switch>
      <Route path="/forums/:id/edit">
        <PostEdit posts={posts} currentUser={currentUser} handlePostUpdate={handlePostUpdate} />
      </Route>
      <Route path="/forums/new">
        <PostCreate currentUser={currentUser} handlePostCreate={handlePostCreate} />
      </Route>
      <Route path="/forums">
        <Posts posts={posts} handlePostDelete={handlePostDelete} currentUser={currentUser} />
      </Route>
      <Route path="/chapterone">
        <Posts avatars={avatars} currentUser={currentUser} />
      </Route>
      <Route path="/avatar/new">
        <AvatarCreate currentUser={currentUser} handleAvatarCreate={handleAvatarCreate} />
      </Route>
      <Route path="/">
        <Home currentUser={currentUser} />
      </Route>
    </Switch>
  )
}
