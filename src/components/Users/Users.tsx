import React from 'react';
import {UserPageType, UsersType} from "../../redux/store";
import axios from "axios";
import userPhoto from '../../assets/images/user.jpg'

type PropsUsersType = {
    users: UsersType[],
    follow: (id: number) => void,
    unFollow: (id: number) => void,
    setUsers: (users: UsersType[]) => void
}

export const Users = (props: PropsUsersType) => {
    if (props.users.length === 0) {

        axios.get<UserPageType>('https://social-network.samuraijs.com/api/1.0/users')
            .then(r => props.setUsers(r.data.items))
    }

    const onClickUnFollowHandler = (id: number) => {
        props.unFollow(id)
    }
    const onClickFollowHandler = (id: number) => {
        props.follow(id)
    }
    return (
        <div>
            {
                props.users.map(el => <div key={el.id} style={{display: 'flex'}}>
                    <img alt={'ava'} style={{width: '50px'}} src={el.photos.small !== null ? el.photos.small : userPhoto}/>
                    <div>
                        {el.followed
                            ? <button onClick={() => onClickUnFollowHandler(el.id)}>UnFollow</button>
                            : <button onClick={() => onClickFollowHandler(el.id)}>Follow</button>
                        }
                    </div>
                    {el.name}
                </div>)
            }
        </div>
    );
}