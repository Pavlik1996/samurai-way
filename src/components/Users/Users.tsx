import React from 'react';
import {UsersType} from "../../redux/store";

type PropsUsersType = {
    users: UsersType[],
    follow: (id: number) => void,
    unFollow: (id: number) => void,
    setUsers: (users: UsersType[]) => void
}

export const Users = (props: PropsUsersType) => {
    if (props.users.length === 0) props.setUsers([
        {
            id: 1,
            photoUrl: 'https://oir.mobi/uploads/posts/2020-01/1579286659_1-3.jpg',
            followed: true,
            fullName: 'Pasha',
            status: 'I am a boss',
            location: {city: 'Ivenets', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://oir.mobi/uploads/posts/2020-01/1579286659_1-3.jpg',
            followed: false,
            fullName: 'Masha',
            status: 'I am a super',
            location: {city: 'Bealostok', country: 'Poland'}
        },
        {
            id: 3,
            photoUrl: 'https://oir.mobi/uploads/posts/2020-01/1579286659_1-3.jpg',
            followed: true,
            fullName: 'Dasha',
            status: 'I love anime',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 4,
            photoUrl: 'https://oir.mobi/uploads/posts/2020-01/1579286659_1-3.jpg',
            followed: true,
            fullName: 'Sasha',
            status: 'I love BMW',
            location: {city: 'Batumi', country: 'Gruzia'}
        },
        {
            id: 5,
            photoUrl: 'https://oir.mobi/uploads/posts/2020-01/1579286659_1-3.jpg',
            followed: false,
            fullName: 'Zeka',
            status: 'I am developer',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 6,
            photoUrl: 'https://oir.mobi/uploads/posts/2020-01/1579286659_1-3.jpg',
            followed: false,
            fullName: 'Iliya',
            status: 'I want a cash',
            location: {city: 'Ivenets', country: 'Belarus'}
        },
        {
            id: 7,
            photoUrl: 'https://oir.mobi/uploads/posts/2020-01/1579286659_1-3.jpg',
            followed: true,
            fullName: 'Chebaa',
            status: 'I happy',
            location: {city: 'all', country: 'world'}
        },])

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
                    <img style={{width: '50px'}} src={el.photoUrl}/>
                    <div>
                        {el.followed
                            ? <button onClick={() => onClickUnFollowHandler(el.id)}>UnFollow</button>
                            : <button onClick={() => onClickFollowHandler(el.id)}>Follow</button>
                        }
                    </div>
                    {el.fullName}-
                    {el.status}-
                    {el.location.country}-
                    {el.location.city}-
                </div>)
            }
        </div>
    );
}