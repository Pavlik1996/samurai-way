import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React from "react";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {login, logOut} from "../../redux/auth-reducer";
import {AppStateType, useAppDispatch} from "../../redux/redux-store";
import {SubmitHandler, useForm, Controller} from "react-hook-form";

export type FormDataType = {
    login: string, password: string, rememberMe: boolean
};

export const Logintwo = () => {

    const dispatch = useAppDispatch()
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)


    const {register, formState: {errors}, handleSubmit, reset,  control} = useForm<FormDataType>({
        mode: 'onChange',
        defaultValues: {
            rememberMe: false,
            password: '',
            login: ''
        }
    })


    const onSubmit: SubmitHandler<any> = data => {
        dispatch(login(data.login, data.password, data.rememberMe))
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
                            <p>Email: free@samuraijs.com</p>
                            <p>Password: free</p>
                        </FormLabel>
                        <FormGroup>
                            <TextField
                                {...register('login', {required: 'Required'})}
                                margin="normal"
                            />
                            <div>
                                {errors?.login && <p>{errors?.login.message || "some error"}</p>}
                            </div>
                            <TextField
                                type={'password'}
                                margin="normal"
                                {...register('password', {
                                    required: 'Required',
                                    minLength: {
                                        value: 4,
                                        message: 'Min four symbols'
                                    }
                                })}
                            />
                            <div>
                                {errors?.password && <p>{errors?.password.message || "some error"}</p>}
                            </div>

                           <FormControlLabel
                                label={'Remember me'}
                                control={ <Controller
                                    control={control}
                                    name={'rememberMe'}
                                    render={({field: {onChange, value}}) => (
                                        <Checkbox
                                            onChange={onChange}
                                            checked={value}

                                        />
                                    )}
                                />}
                            />
                            <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
                        </FormGroup>
                    </FormControl>
                </form>
            </Grid>

        </Grid>
    )
}


