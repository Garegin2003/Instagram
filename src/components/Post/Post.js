import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { showMore } from '../../hoc/showMore'
import IMAGES from '../../images'
import { addComment } from '../../store/slices/posts/postsSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'
import Comments from '../Comments/Comments'

function Post({id, img, name, likesCount, postText, timeAgo, comments, isShow, open}) {

    const dispatch = useDispatch()
    const {currentUser} = useSelector(selectUsers)
    const formRef = useRef(null)

    const handlerSubmit = e => {
        e.preventDefault()

        dispatch(addComment({
            id,
            username: currentUser.username,
            body: formRef.current[0].value
        }))

        formRef.current.reset()
    }
  return (
    <div className="post">
        <div className="info">
            <NavLink style={{textDecoration: 'none'}} to={`${id}/uniq`} className="user">
                <div className="profile-pic"><img src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAMFBMVEXk5ueutLepr7Ln6erg4uPJzc/T1ti7wMO2u77DyMqzuLvq7O3P0tTW2dvc3+DZ3N7ueM45AAAC2UlEQVR4nO2a2ZLjIAxFAYHZvPz/3za2O8v0JCA5kl3dxXly5eXeCAmDZKU6nU6n0+l0Op1O5/cCAErZglofzle3UwxJryTvFnWuB4DJa2P0DWNSnM+zAHnUD/G7Cb/kc/Tz9EJ+t3DKQkB8Lb8xiDsAFSr62jhhB2BTRX51EEUdgK3Lb4kg6qDx/6VjAL6tXxyMUg7A1fLvyYHQngQLTr/szUIGAlJfqBhhxAagIKCvAC+vtUQIBkIAtOE3kNEZsBkQKEVKALQO3AZIKbiGwHIbQG2CTwbYX8w0fa253wgzbQVKEvDqA6kIN5gNIN9DT8y8BiJVXy8XGzATrwFiFa51+McMXL4Elyfh1WVIOw1s8OorS96K/9rL6PLXMfVAorkPJApoBvivqLQ1MBP/oRR9MdsQuBcA4mp+D4DI3WwihEDkdorPAv4j8U67P/ONVJcGvRdYqRZJ9hgHEiV4A9OjkGsRbVTblJu+dKuy4UBcvxRjtVUr3ywup7P38uGUoQHM74Lgzprd5OVFJpgoVv6vLMzu35FNGE+eGq1TqzH6kFIKPg7XDM4y3Mhnz8zK/7XLMLq44cZhmfdfTxDPah5jKKu+ck+B9TlFNynRYKzDSheek+9nIWiT4mBlIlGCPnj9ZmD3bMLo4Gb2kthHpS3xhwk/sFoA5RLxXmLKvsQ1SAVbG1VWPISFIwpF/oj6bsEzWHg1pyZYiJ/lQl6oa/+fAz1+kAr52OL/sJCOBgHm5gEQybFjEgw86nrLBDqZ3herOPDkRKh+pnDAAXV8wKyvqQMMfn2aA9b1fzhA5wFQWhF48N9WkLuiWAfY/YA0pCWBamAfaIyjQTWQ0Y2YA2B6B5k8nCHRDgB5REqi3T6gT6eINNdANADtUpQsgR3fCIDcHnCjPkiQ2gQf1NfgwJSeTPVscmA+SSbVVgD/tdYHVJOAMJQ4TG2ma78bD6LwjtU7nU6n8/v5AuY6HZyRatEhAAAAAElFTkSuQmCC'} alt="" /></div>
                <p className="username">{name}</p>
            </NavLink>
            <img src={IMAGES.option} className="options" alt=""/>
        </div>
        <img src={img} className="post-image" alt=""/>
        <div className="post-content">
            <div className="reaction-wrapper">
                <img src={IMAGES.like} className="icon" alt=""/>
                <img src={IMAGES.comment} className="icon" alt=""/>
                <img src={IMAGES.send} className="icon" alt=""/>
                <img src={IMAGES.save} className="save icon" alt=""/>
            </div>
            <p className="likes">{likesCount}</p>
            <p className="description"><span>{name} </span> {postText}</p>
            <p className="post-time">{timeAgo}</p>
            {
            
                !!comments.length && (isShow ?
                comments.map(e => <Comments key = {e.id} username = {e.username} body = {e.body} />)
                : <h1
                    style={{
                        cursor: 'pointer'
                    }}
                    onClick = {() => open()}
                >Show All Comments</h1>)
            }
        </div>
        <form ref={formRef} onSubmit={handlerSubmit}>
            <div className="comment-wrapper">
                <img src={IMAGES.smile} className="icon" alt=""/>
                <input onFocus={() => open()} type="text" className="comment-box" placeholder="Add a comment"/>
                <button className="comment-btn">post</button>
            </div>
        </form>
    </div>
  )
}

export default showMore(Post)