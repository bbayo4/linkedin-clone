// libraries
import React from "react";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";

// hoc
import { connect } from "react-redux";

// types
import { AppActions, AuthState } from "../../types/";

// actions
import { userActions } from "../../actions/user.actions";

import { AppState } from "../../reducers";
import { Container } from './styles';


type Props = LinkStateToProps & LinkDispatchToProps;

const LogoutButton: React.FC<Props> = (props: Props) => {
  const handleLogout = () => {
    // logout user
    props.logout();
  };
  return (
    <Container id="home-button">
      <button type="submit" className="active" onClick={handleLogout} data-tip="Go to the feed">
        <span>Sign Out</span>
      </button>
    </Container>
  );
};

interface LinkStateToProps {
  auth: AuthState
}

interface LinkDispatchToProps {
  logout: () => void;
}

const mapStateToProps = (
  state: AppState,
): LinkStateToProps => ({
  auth: state.authentication
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchToProps => ({
  logout: bindActionCreators(userActions.logout, dispatch)
} as any);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutButton);