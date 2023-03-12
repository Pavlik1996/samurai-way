import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import { PostsType } from "../../../redux/store";
import { Field, Form, InjectedFormProps, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

type MyPostsType = {
  posts: PostsType[];
  newPostText: string;
  addPost: (value: string) => void;
};

type valueType = {
  handleSubmit: (values: string) => void;
  myPostMessage: string;
};

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm: React.FC<InjectedFormProps<valueType>> = ({handleSubmit}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        component={Textarea}
        name={"myPostMessage"}
        placeholder={"post message"}
        validate={[required, maxLength10]}
      />
      <div>
        <button>Send post</button>
      </div>
    </Form>
  );
};

const AddNewPostFormRedux = reduxForm<valueType>({form: "MyPostFormRedux"})(AddNewPostForm);

export const MyPosts = React.memo((props: MyPostsType) => {

  const postsElements = [...props.posts]
    .reverse()
    .map(p => <Post key={p.id} message={p.messages} likeCount={p.like} />)

  const onAddPost = (value: valueType) => {
    props.addPost(value.myPostMessage);
  };

  return (
    <div className={s.pastBlock}>
      <div>
        <h3>My post</h3>
        <AddNewPostFormRedux onSubmit={onAddPost} />
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});
