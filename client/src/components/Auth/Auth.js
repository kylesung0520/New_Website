import React, { useState } from 'react';
import {Avatar, Button, Paper, Grid, Typography, Container, TextField} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login';

import useStyles from './styles';
import Input from './Input';
import Icon from './Icon';
import {LockOutlined} from "@material-ui/icons";

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    const handleSubmit = () => {

    };
    const handleChange = () => {

    };

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        handleShowPassword(false);
    };

    const googleSuccess = async (res) => {
        console.log(res);
    };

    const googleFailure = (error) => {
        console.log(error);
        console.log("Google Sign In was unsuccessful");
    };

    return (
        <div>
            <Container component={"main"} maxWidth={"xs"}>
                <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant={"h5"}>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {
                                isSignUp && (
                                    <>
                                        <Input name={"firstName"} label={"First Name"} handleChange={handleChange} autoFocus half/>
                                        <Input name={"firstName"} label={"Last Name"} handleChange={handleChange} half/>
                                    </>
                                )
                            }
                            <Input name={"email"} label={"Email Address"} handleChange={handleChange()} type={"email"}/>
                            <Input name={"password"} label={"Password"} handleChange={handleChange()} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                            { isSignUp && <Input name={"confirmPassword"} label={"Repeat Password"} handleChange={handleChange()} type={"password"} />}
                        </Grid>
                        <Button type={"submit"} fullWidth variant={"contained"} color={"primary"} className={classes.submit}>
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </Button>
                        <GoogleLogin
                            clientId={"173172486674-197q00gje7n4i3il5eniptt7sibn96ns.apps.googleusercontent.com"}
                            render={(renderProps) => (
                                <Button
                                    className={classes.googleButton}
                                    color={"primary"}
                                    fullWidth
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                    startIcon={<Icon />}
                                    variant={"contained"}> Google Sign In</Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy={"single_host_origin"}
                        />
                        <Grid container justify={"flex-end"}>
                            <Grid item>
                                <Button onClick={switchMode}>
                                    { isSignUp ? 'Click here to sign in' : "Click here to sign up"}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </div>
    )
}

export default Auth;