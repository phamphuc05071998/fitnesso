import React, { useState } from "react";
import styles from "./Auth.module.scss";
import { ReactComponent as AuthImg } from "./../../../assets/icon/undraw_personal_trainer_re_cnua.svg";
import NormalButton from "../../UI/NormalButton/NormalButton";
import { useParams } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logUserIn, signUpUser } from "../../../utils/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn, logOut } from "../../../store/authProvider";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";
import {  toast } from 'react-toastify';
const Auth = () => {
  const [enteredEmail, setEnteredEmail] = useState({
    value: "",
    isValid: false,
    isTouchInput: false,
  });
  const [enteredUserName, setEnteredUserName] = useState({
    value: "",
    isValid: true,
    isTouchInput: false,
  });
  const [enteredPassword, setEnteredPassword] = useState({
    value: "",
    isValid: false,
    isTouchInput: false,
  });
  const [enteredRepeatPassword, setEnteredRepeatPassword] = useState({
    value: "",
    isValid: false,
    isTouchInput: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mode } = useParams();
  let isLoginMode: boolean;
  if (mode === "login") {
    isLoginMode = true;
  } else if (mode === "signup") {
    isLoginMode = false;
  } else if (mode === "logout") {
    isLoginMode = false;
    navigate("/auth/login");
    dispatch(logOut);
  } else {
    return <></>;
  }
  const userNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEnteredUserName({
      value: value,
      isTouchInput: true,
      isValid: true,
    });
  };
  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let isValid;
    if (value.match(mailFormat)) {
      isValid = true;
    } else {
      isValid = false;
    }
    setEnteredEmail({
      value: value,
      isTouchInput: true,
      isValid: isValid,
    });
  };
  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let isValid: boolean;
    if (value.length >= 6) {
      isValid = true;
    } else {
      isValid = false;
    }
    setEnteredPassword({
      value: value,
      isTouchInput: true,
      isValid: isValid,
    });
  };
  const passwordRepeatHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let isValid;
    if (value === enteredPassword.value) {
      isValid = true;
    } else {
      isValid = false;
    }
    setEnteredRepeatPassword({
      value,
      isValid,
      isTouchInput: true,
    });
  };
  const formIsValid =
    enteredEmail.isValid &&
    enteredPassword.isValid &&
    (!isLoginMode ? enteredRepeatPassword.isValid : true);
    const notifyError = (message:string):void => {
        toast.error(message)
      }
      const notifySuccess = (message:string):void => {
        toast.success(message)
      }
  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (isLoginMode === true) {
        const response = await logUserIn(
          enteredEmail.value,
          enteredPassword.value
        );
        if (response?.code === "ERR_BAD_REQUEST")
          throw new Error("Wrong email or password, Please try later");
        const email = response.user.email;
        const name = response.user.name;
        setIsLoading(false);
        if (email && name) {
          dispatch(logIn({ token: response.token, user: { name, email } }));
          notifySuccess('Login successful')
          navigate("/");
        }
      }
      if (!isLoginMode) {
        const response = await signUpUser(
          enteredEmail.value,
          enteredPassword.value,
          enteredUserName.value,
          enteredRepeatPassword.value
        );
        const email = response.user.email;
        const name = response.user.name;

        setIsLoading(false);
        if (email && name) {
          dispatch(logIn({ token: response.token, user: { name, email } }));
          notifySuccess('Login successful')

          navigate("/");
        }
      }
    } catch (err: any) {
      setIsLoading(false);
   
      notifyError(err.response.data.message)
    }
  };
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section className={styles.authSection}>
      <div className={styles.authContainer}>
        <div className={styles.authImgContainer}>
          <AuthImg className={styles.authImg} />
        </div>
        <div className={styles.authForm}>
          <p className={styles.authLabel}>
            {isLoginMode ? "New user?" : "Already have account?"}
            <Link to={`/auth/${isLoginMode ? "signup" : "login"}`}>
              {" "}
              {isLoginMode ? "Sign up" : "Login"}
            </Link>{" "}
          </p>
          <h2 className={styles.authHeading}>
            {isLoginMode ? "Welcome back!" : "Welcome to finesso"}
          </h2>
          {/* <h3 className={styles.authSubHeading}>
            {isLoginMode ? "Login to continue" : "Sign up continue"}
          </h3> */}
          <form className={styles.form} onSubmit={onSubmitHandler}>
            {!isLoginMode && (
              <div className={styles.formControl}>
                <input
                  onChange={userNameChangeHandler}
                  type="text"
                  required
                  className={styles.formInput}
                  placeholder="&#xf007; username"
                  value={enteredUserName.value}
                ></input>
              </div>
            )}
            <div className={styles.formControl}>
              <input
                type="email"
                required
                className={styles.formInput}
                placeholder="&#xf007;  username111@gmail.com"
                onChange={emailChangeHandler}
                value={enteredEmail.value}
                data-iserror={
                  !enteredEmail.isValid && enteredEmail.isTouchInput
                }
              ></input>
            </div>
            <div className={styles.formControl}>
              <input
                type="password"
                required
                className={styles.formInput}
                placeholder="&#xf084;  enter Password"
                onChange={passwordChangeHandler}
                value={enteredPassword.value}
                data-iserror={
                  !enteredPassword.isValid && enteredPassword.isTouchInput
                }
              ></input>
            </div>
            {!isLoginMode && (
              <div className={styles.formControl}>
                <input
                  type="password"
                  required
                  className={styles.formInput}
                  placeholder="&#xf084; repeat password"
                  onChange={passwordRepeatHandler}
                  value={enteredRepeatPassword.value}
                  data-iserror={
                    !enteredRepeatPassword.isValid &&
                    enteredRepeatPassword.isTouchInput
                  }
                ></input>
              </div>
            )}
            <div className={styles.formAction}>
              <NormalButton disable={!formIsValid} type="submit">
                {isLoginMode ? "Login" : "Sign up"}
              </NormalButton>
              <NormalButton white>Forget Password?</NormalButton>
            </div>
          </form>
          <div className={styles.authLoginWith}>
            <p>Or login with:</p>
            <div className={styles.authIcon}>
              <FcGoogle size={24} />
            </div>
            <div className={styles.authIcon}>
              <FaFacebookSquare size={24} />
            </div>
            <div className={styles.authIcon}>
              <FaTwitter size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
