import React from "react";
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/nav.jpg'

let Users = (props) => {
    if (props.users.length === 0) {
        
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => { 
        props.setUsers(response.data.item)
        
        
        ;});

    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>


                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
export default Users;
        // props.setUsers(
        //     [
        //     {
        //         id: 1,
        //         photoUrl: 'https://images.esellerpro.com/2466/I/304/4/navimask2.jpg',
        //         followed: false,
        //         fullName: 'Dmitry',
        //         status: 'I am a boss',
        //         location: { city: 'Minsk', country: 'Belarus' }
        //     },
        //     {
        //         id: 2,
        //         photoUrl: 'https://images.esellerpro.com/2466/I/304/4/navimask2.jpg',
        //         followed: true,
        //         fullName: 'Sasha',
        //         status: 'I am a boss too',
        //         location: { city: 'Moscow', country: 'Russia' }
        //     },
        //     {
        //         id: 3,
        //         photoUrl: 'https://images.esellerpro.com/2466/I/304/4/navimask2.jpg',
        //         followed: false,
        //         fullName: 'Petr',
        //         status: 'I am a boss too',
        //         location: { city: 'Kiev', country: 'Ukraine' }
        //     }
        // ]
        // )