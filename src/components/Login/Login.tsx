import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {useFormik} from "formik";
import React from "react";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {login, logOut} from "../../redux/auth-reducer";
import {AppStateType, useAppDispatch} from "../../redux/redux-store";
import {SubmitHandler, useForm, Controller} from "react-hook-form";

export type FormDataType = {
    login: string, password: string, rememberme: boolean
};

export const Logintwo = () => {

    const dispatch = useAppDispatch()
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    // const formik = useFormik({
    //     validate: (values) => {
    //         if (!values.email) {
    //             return {
    //                 email: 'Email is required'
    //             }
    //         }
    //         if (!values.password) {
    //             return {
    //                 password: 'Password is required'
    //             }
    //         }
    //
    //     },
    //     initialValues: {
    //         email: '',
    //         password: '',
    //         rememberMe: false
    //     },
    //     onSubmit: values => {
    //         dispatch(login(values.email, values.password, values.rememberMe))
    //     },
    // })

    const {getValues, register, formState: {errors}, handleSubmit, reset, setValue, control} = useForm<FormDataType>({
        mode: 'onBlur',
        defaultValues: {
            rememberme: false,
            password: '',
            login: ''
        }
    })


    const onSubmit: SubmitHandler<any> = data => {
        dispatch(login(data.login, data.password, data.rememberme))
        // alert(JSON.stringify(data))
        reset()
    }


    if (isAuth) {
        return <Redirect to={"/profile"}/>;
    }

    return (
        <Grid container justifyContent="center">
            <Grid item xs={4}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl>
                        <FormLabel>
                            <p> Email: free@samuraijs.com</p>
                            <p>Password: free</p>
                        </FormLabel>
                        <FormGroup>
                            <TextField
                                {...register('login', {required: 'Required'})}
                            />
                            <div>
                                {errors?.login?.message && errors.login.message}
                            </div>
                            <TextField
                                type={'password'}
                                {...register('password', {
                                    required: 'Required',
                                    minLength: {
                                        value: 5,
                                        message: 'Min five symbols'
                                    }
                                })}
                            />
                            <div>
                                {errors.password?.message && errors.password.message}
                            </div>
                            <Controller
                                control={control}
                                name={'rememberme'}
                                render={({field: {onChange, value}}) => (
                                    <Checkbox
                                        onChange={onChange}
                                        checked={value}
                                    />
                                )}
                            />
                            <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
                        </FormGroup>
                    </FormControl>
                </form>
            </Grid>

        </Grid>
    )
}

// <TextField
//     label="Email"
//     margin="normal"
//     {...formik.getFieldProps("email")}
// />
// {formik.errors.email ? <div>{formik.errors.email}</div> : null}
// <TextField
//     type="password"
//     label="Password"
//     margin="normal"
//     {...formik.getFieldProps("password")}
// />
// {formik.errors.password ? <div>{formik.errors.password}</div> : null}
// <FormControlLabel
//     label={'Remember me'}
//     control={<Checkbox
//         {...formik.getFieldProps("rememberMe")}
//         checked={formik.values.rememberMe}
//     />}
// />
// <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
