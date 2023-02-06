import React from 'react';
import {UserPageType, UsersType} from "../../redux/store";
import axios from "axios";
import userPhoto from '../../assets/images/user.jpg'
import s from './users.module.css'

type PropsUsersType = {
    items: UsersType[],
    pageSize: number,
    totalCount: number,
    follow: (id: number) => void,
    unFollow: (id: number) => void,
    setUsers: (users: UsersType[]) => void,
    setCurrentPage: (page: number) => void,
    currentPage: number,
    setTotalUsersCount: (totalPage: number) => void
}

class Users extends React.Component<PropsUsersType> {

    componentDidMount() {
        axios.get<UserPageType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}& count=${this.props.pageSize}`)
            .then(r => {
                this.props.setUsers(r.data.items)
                this.props.setTotalUsersCount(r.data.totalCount)
            })
    }

    onClickHandlerChangePage = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get<UserPageType>(`https://social-network.samuraijs.com/api/1.0/users?page=${page}& count=${this.props.pageSize}`)
            .then(r => {
                this.props.setUsers(r.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= 30; i++) {
            pages.push(i)
        }


        return (
            <div>
                <div>
                    {pages.map(el => {
                        return (
                             <span
                                 onClick={() => this.onClickHandlerChangePage(el)}
                                 className={this.props.currentPage === el ? s.selected : ''}> { el } </span>
                        )
                    })}
                    <span>{pagesCount}</span>

                </div>
                {
                    this.props.items.map(el => <div key={el.id} style={{display: 'flex'}}>
                        <img alt={'ava'} className={s.userPhoto}
                             src={el.photos.small !== null ? el.photos.small : userPhoto}/>
                        <div>
                            {el.followed
                                ? <button onClick={() => this.props.unFollow(el.id)}>UnFollow</button>
                                : <button onClick={() => this.props.follow(el.id)}>Follow</button>
                            }
                        </div>
                        {el.name}
                    </div>)
                }
            </div>
        );
    }
}

export default Users