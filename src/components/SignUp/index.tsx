// libraries
import React, { useState, useEffect } from "react";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";

// hoc
import { connect } from "react-redux";

// actions
import { userActions } from "../../actions/user.actions";

// types
import { AppState } from "../../reducers";
import { AppActions, RegisterState } from "../../types/";

import { Container } from './styles';

type SignupFormState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

type Props = LinkDispatchToProps & LinkStateToProps;

const PageSignup: React.FC<Props> = (props: Props) => {
  const [values, setValues] = useState<SignupFormState>({
    firstName: "",
    lastName:"",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false
  });

  // handle fields change event
  const handleChange = (prop: keyof SignupFormState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    prop === "terms"
      ? setValues({ ...values, [prop]: event.target.checked })
      : setValues({ ...values, [prop]: event.target.value });
  };

  // handle password field
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // handle form submit
  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (values.terms) {
      props.register(values);
    } else {
      // show error
      alert("Please agree to terms and conditions first");
    }
  };

  return (
    <Container className="container-fluid login-container">
      <div className="login-header">
        <a href="/">
          <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png" alt=""/>
        </a>
        <div className="login-header-form">
          <h3>Register</h3>
          <p>Make the most of your professional life</p>
          <form onSubmit={handleSubmit}>
            <div className="mt-5 mb-3">
              <input type="firstName" 
                placeholder="First Name"
                name="firstName"
                onChange={handleChange("firstName")}
                value={values.firstName}
              />
            </div>
            <div className="mb-3">
              <input type="lastName" 
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange("lastName")}
                value={values.lastName}
              />
            </div>
            <div className="mb-3">
              <input type="email"
                placeholder="Email address"
                name="email"
                onChange={handleChange("email")}
                value={values.email}
              />
            </div>
            <div className="mb-3">
              <input type="password"
                placeholder="Confirm password"
                value={values.confirmPassword}
                onChange={handleChange("confirmPassword")}
                name="confirmPassword"
              />
            </div>
            <div>
              <input type="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange("password")}
                name="password"
              />
            </div>
            <div>
              <input type="checkbox"
                checked={values.terms}
                onChange={handleChange("terms")}
                value="terms"
              />Agreed to terms and conditions?
              </div>
            <div className="mt-4">
              <button className="confirm-btn" type="submit">
                {/* {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )} */}
                <span>Join Now</span>
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
              <a className="d-block mb-2 mt-1" href="/">Cancel</a>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

interface LinkStateToProps {
  reg: RegisterState;
}

interface LinkDispatchToProps {
  register: ({
    firstName,
    lastName,
    email,
    password
  }: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    }) => void;
}

const mapStateToProps = (state: AppState): LinkStateToProps => ({
  reg: state.registration
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchToProps => ({
  register: bindActionCreators(userActions.register, dispatch)
} as  any);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageSignup);