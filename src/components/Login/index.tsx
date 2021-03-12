import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";

// hoc
import { connect } from "react-redux";

// components
import { ThunkDispatch } from "redux-thunk";
// import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
// actions
import { userActions } from "../../actions/user.actions";

// types
import { AppState } from "../../reducers";
import { AuthState, AppActions } from "../../types/";

import { Container } from './styles';

type LoginFormState = {
  email: string;
  password: string;
  remember: boolean;
};

type Props = LinkStateToProps & LinkDispatchToProps;

// login form fc
const PageLogin: React.FC<Props> = (props: Props) => {

  const [values, setValues] = useState<LoginFormState>({
    email: "",
    password: "",
    remember: false
  });

  // handle fields change event
  const handleChange = (prop: keyof LoginFormState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    prop === "remember"
      ? setValues({ ...values, [prop]: event.target.checked })
      : setValues({ ...values, [prop]: event.target.value });
  };

  // handle password field
  // const [showPassword, setShowPassword] = useState(false);
  // const handlePasswordToggle = () => {
  //   setShowPassword(!showPassword);
  // };
  // const handleMouseDownPassword = (
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   event.preventDefault();
  // };

  // handle form submit
  const handleSubmit = (event: any): void => {
    debugger
    event.preventDefault();
    props.login(values);
  };

  useEffect(() => {
    // onComponentDidMount
    // ValidatorForm.addValidationRule("minLength", value => {
    //   if (value.length < 5) {
    //     return false;
    //   }
    //   return true;
    // });

    // return () => {
    //   // onComponentUnmount
    //   ValidatorForm.removeValidationRule("minLength");
    // };
  }, []);
  return (
    <Container className="container-fluid login-container">
      <div className="login-header">
        <a href="/">
          <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png" alt=""/>
        </a>
        <div className="login-header-form">
          <h3>Welcome Back</h3>
          <p>Don't miss your next opportunity. Sign in to stay updated on your professional world.</p>
          <form onSubmit={handleSubmit}>
            <div className="mt-5 mb-3">
              <input type="email" 
                placeholder="Name@example.com"
                onChange={handleChange("email")}
                name="email"
                value={values.email}
              />
            </div>
            <div>
              <input type="password" 
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange("password")}
              />
            </div>
            <div>
              <input type="checkbox" 
                checked={values.remember}
                onChange={handleChange("remember")}
                value="remember"
              />Remember me?
            </div>
            <div className="mt-4">
              <button className="confirm-btn" 
                type="submit">
                {/* {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )} */}
                <span>sign in</span>
              </button>
            </div>
              {/* {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )} */}
            <div className="help-contact">
              <a className="d-block mb-2 mt-4" href="/">Forgot Password?</a>
              <p className="d-inline">New to Linkedin? </p>
              <a href="/signup">Join now</a>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

// const mapDispatchToProps = {
//   logInConnect: signin
// };

// export default connect(
//   null,
//   mapDispatchToProps,
// )(PageLogin);

interface LinkStateToProps {
  auth: AuthState;
}

interface LinkDispatchToProps {
  login: ({
    email,
    password,
    remember
  }: {
    email: string;
    password: string;
    remember?: boolean;
  }) => void;
}

const mapStateToProps = (state: AppState): LinkStateToProps => ({
  auth: state.authentication
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchToProps => ({
  login: bindActionCreators(userActions.login, dispatch)
} as any);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageLogin);
