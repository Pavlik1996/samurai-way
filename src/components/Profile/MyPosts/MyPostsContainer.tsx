import React from "react";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { PostsType } from "../../../redux/store";
import {
  ActionsTypeProfile,
  addPostAC,
  changeNewTextAC,
} from "../../../redux/profile-reducer";

type mapStateToPropsType = {
  posts: PostsType[];
  newPostText: string;
};

type mapDispatchToProps = {
  addPost: () => void;
  updateNewPostText: (newText: string) => void;
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
    addPost: () => {
      dispatch(addPostAC());
    },
    updateNewPostText: (newText: string) => {
      dispatch(changeNewTextAC(newText));
    },
  };
};

export const MyPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
