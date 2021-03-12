import React from 'react';
import { Row, Col } from 'reactstrap';
import { Container } from './styles';

const HomePage: React.FC = () => {
  return (
    <Container className="container">
      <Row>
        <Col xs="6">
          <div id="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png" alt=""/>
          </div>
        </Col>
        <Col xs="6">
          <div id="login-option-nav">
            {/* {this.state.token == null ? */}
            <>
              <a href="/signup" className="mr-3">Join Now</a>
              <button onClick={() => window.location.href = '/login'} className="sign-btn">sign in</button>
            </>
            {/* : <button onClick={this.Logout} className="sign-btn">Log out</button>
            } */}
          </div>
        </Col>
      </Row>
      <Row id="header-loginpage">
        <Col xs="6">
          <h1>Welcome to your professional community</h1>
          <input id="searchbar" type="text" placeholder="Find courses, people, groups and more..." />
        </Col>
        <Col xs="6">
          <div >
            <img id="login-img-header" src="https://img.freepik.com/free-vector/people-using-digital-devices-modern-office_1262-19462.jpg?size=626&ext=jpg" alt=""/>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
