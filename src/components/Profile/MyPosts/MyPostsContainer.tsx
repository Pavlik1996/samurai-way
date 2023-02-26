import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { PostsType } from "../../../redux/store";
import { ActionsTypeProfile, addPostAC } from "../../../redux/profile-reducer";
import { MyPosts } from "./MyPosts";

type mapStateToPropsType = {
  posts: PostsType[];
  newPostText: string;
};

type mapDispatchToProps = {
  addPost: (myPostMessage: string) => void;
};

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (
  dispatch: (action: ActionsTypeProfile) => void
): mapDispatchToProps => {
  return {
    addPost: (myPostMessage: string) => {
      dispatch(addPostAC(myPostMessage));
    },
  };
};

export const MyPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
