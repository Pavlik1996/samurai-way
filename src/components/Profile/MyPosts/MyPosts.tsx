import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import { PostsType } from "../../../redux/store";
import { Field, Form, InjectedFormProps, reduxForm } from "redux-form";

type MyPostsType = {
  posts: PostsType[];
  newPostText: string;
  addPost: (value: string) => void;
};

type valueType = {
  handleSubmit: (values: string) => void;
  myPostMessage: string;
};

const AddNewPostForm: React.FC<InjectedFormProps<valueType>> = ({
  handleSubmit,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Field
          component={"textarea"}
          placeholder={"enter tour message"}
          name={"myPostMessage"}
        />
      </div>
      <div>
        <button>Send post</button>
      </div>
    </Form>
  );
};

const MyPostFormRedux = reduxForm<valueType>({
  form: "MyPostFormRedux",
})(AddNewPostForm);

export const MyPosts = (props: MyPostsType) => {
  const postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.messages} likeCount={p.like} />
  ));

  const onAddPost = (value: valueType) => {
    props.addPost(value.myPostMessage);
  };

  return (
    <div className={s.pastBlock}>
      <div>
        <h3>My post</h3>
        <MyPostFormRedux onSubmit={onAddPost} />
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
