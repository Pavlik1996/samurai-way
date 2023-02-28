import { Field, InjectedFormProps, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

type valueType = {
  newMessageBody: string;
};

const maxLength50 = maxLengthCreator(50);

const AddMessageForm: React.FC<InjectedFormProps<valueType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name={"newMessageBody"}
        placeholder={"enter tour message"}
        validate={[required, maxLength50]}
      />
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

export default reduxForm<valueType>({
  form: "DialogAddMessageForm",
})(AddMessageForm);
