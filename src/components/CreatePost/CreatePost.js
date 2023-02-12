import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../images';
import { addPost as addPost_posts } from '../../store/slices/posts/postsSlice';
import { addPost as addPost_users, selectUsers } from '../../store/slices/users/usersSlice';
import classes from './CreatePost.module.css'

const CreatePost = () => {
    const { currentUser } = useSelector(selectUsers)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (!currentUser) {
            navigate('/signin')
        }
    }, [currentUser])

    const formRef = useRef(null)
    const handelSubmit = e => {
        e.preventDefault()
        const {img: {value: img}, desc: {value: postText}} = formRef.current
        
        const initialPost = {
            id: new Date().getTime().toString(),
            name: currentUser.username,
            timeAgo: Math.round(Math.random() * 8 + 2) + 'Minutes Ago',
            likesCount: Math.round(Math.random() * 300 + 200),
            comments: [],
            img, postText
        }

        dispatch(addPost_posts(initialPost))
        dispatch(addPost_users(initialPost))

        navigate('/')

        formRef.current.reset()
    }
    return (
        <div style={{marginTop: '100px', textAlign: 'center'}} className={classes.container}>
            <h1 style={{fontSize: '50px' }}>Create Post</h1>
            <br/>
            <br/>
            <form onSubmit={handelSubmit} ref={formRef} style={{marginTop: '50px', display: 'flex', flexDirection: 'column'}}>
                <input type='text' name='img' placeholder='img' />
                <input type='text' name='desc' placeholder='desc' />
                <label class={classes.input_file}>
                    <input type="submit" style={{display: 'none'}} name="file"/>		
                    <button><span>Add post</span></button>
                </label>
            </form>
        </div>
    );
}

export default CreatePost;
