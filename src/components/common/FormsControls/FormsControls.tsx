import s from "./FormsControls.module.css";

const FromControl = ({meta: {touched, error}, children}: any) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>{children}</div>
            {hasError && <span>{error}</span>}
        </div>
    );
};

export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FromControl {...props}>
            <textarea {...input} {...restProps} />
        </FromControl>
    );
};

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    return <FromControl {...props}>
            <input {...input} {...restProps} />
        </FromControl>

};

