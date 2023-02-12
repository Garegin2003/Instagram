import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { delPost as delPost_posts } from '../../store/slices/posts/postsSlice';
import { delPost as delPost_users, selectUsers } from '../../store/slices/users/usersSlice';
import './Profile.css'

const Profile = () => {
    const dispatch =useDispatch()
    const { currentUser } = useSelector(selectUsers)
    const navigate = useNavigate()

    useEffect(() => {
        if (!currentUser) {
            navigate('/signin')
        }
    }, [currentUser])

    return (
        <>
        <header>
            <div className="container">
                <div className="profile">
                    <div className="profile-image">
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAMFBMVEXk5ueutLfo6eqssbTq7O2orrK7wMPa3d7S1dfGyszMz9Hg4+TCxsnd4OG4vcCzuLuHxgkrAAAC/0lEQVR4nO2a626rMAyAwSYXAiTv/7YntIytFQ022Kl0lE+bNG0//DVxnIvXdY1Go9FoNBqNRqPxPwKQv39++Ep8F2YbU4p29lN1CQBvjcF+A00/u6Fm/C4g7uE3CUy+2kCA79/CbxLRVVGALh7GfziECgrgPsbPmDhpO0AoCeRRSIuuwpnA6jCpCjhzJpDRFFgoAn3SM5go8fM8zFqpAPNpEmwKXkmhuA5fFXQMBmr8XBZGDQXwpDTcUFmSiSGACoNAKwU7CisSLDkPV4z8ciDWgn0arPiBhZWHK9ICA7Ua7ThpA85KWMEgbMBMg3VzEE6EhWvQJ2EDxzbohQ08NxHFdye+gWkG4gb8TETptcAeA+m1MHENMEpvTdwRED+jDJFr4GUFOhiZ04CLsAE/FeUPirztGUfxMxJ3GqQPKJmFZRDlBfJhmSGgcFTOcC4MSeXiONBvDEbpUY18VpSvyBuER6TNQLwa7Qq0edBJww1KWdK4N/9C2KTRqj4owqmCWhb+KqSig5G+Kh1hC5XJ1Hjazovy+HG/wqPyrjDN5sDBYKjX6xmmuX+VQEwV469A521CRPP46tPs6jfccsTFh3Ecg3fLNxp+AMNfqhrAAJ3Ln97GlKf/0XSLdh6Dm9a/qEeHyYX4DIwvifj4RRz9ojka+aM/o3+uSGjWpNTJCgA3p6MycGRhPUgX52EZe86TJqLo8syjb0tD/8Eh+k7IAVxkx39KJBEHWEp74Qkm+bv5sG5Cl+M/He4d3D912TngeH0qoGM/qB8qXB4GcPcHYHMIl7IBwr0M+IuxVwS4zzZFMLKTgdzhpSpwm29wowh8UOA1nuBmFTgkMfqwsjnwA+M6B/yHdJoC+T41KUzBA+q1HriNPYYCKRXILyUXwEgZBHZnkaVAmAfpUvQGoTBdaKZwOP/PNeUh6Alv7toCZytSckv+wEllBG4zhw+eTIL6EJxMA/Mfbi5RfvDU2RTfKDY/WF2Mq5TPCfqJmCm+vCfUxxSbYFCDkkCj0Wg0vss/Bz8hBPfP7w0AAAAASUVORK5CYII=' alt=""/>
                    </div>
                    <div className="profile-user-settings">
                        <h1 className="profile-user-name">{currentUser?.username}</h1>
                        <button class="btn profile-edit-btn">Edit Profile</button>
                        <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>
    
                    </div>
                    <div className="profile-stats">
                        <ul>
                            <li><span className="profile-stat-count">{currentUser?.images.length}</span> posts</li>
                            <li><span className="profile-stat-count">{currentUser?.followers}</span> followers</li>
                            <li><span className="profile-stat-count">{currentUser?.following}</span> following</li>
                        </ul>
                    </div>
                    <div className="profile-bio">
                        <h3>{currentUser?.name}</h3>
                        <p>{currentUser?.bio}</p>
                    </div>
                </div>
            </div>
        </header>
    
        <div className="container">
            <div className="gallery">
        {
            currentUser?.images.map(el => (
                <div key={el.id} className="gallery-item">
                    <img src={el.img} className="gallery-image" alt=""/>
                    <div className="gallery-item-info">
                        <ul>
                            <span onClick={() => {
                                dispatch(delPost_posts(el.id))
                                dispatch(delPost_users(el.id))
                            }}>X</span>
                            <li className="gallery-item-likes"><span >Likes</span> {el.likesCount}</li>
                            <li className="gallery-item-comments"><span >Comments</span> {el.comments.length}</li>
                        </ul>
                    </div>
                </div>
            ))
        }
        </div>
        </div>
    
        </>
    );
}

export default Profile;
