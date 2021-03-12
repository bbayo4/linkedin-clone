import styled from 'styled-components';

export const Container = styled.div`
  .login-header{
    text-align: center;
    position: absolute;
    top:40%;
    left:50%;
    transform:translate(-50%, -40%);
  }
  .login-header img{
    width:90px
  }
  .login-header-form{
    margin-top:2rem
  }
  .login-header-form h3{
    font-weight: 600;
    font-size:25px
  }
  .login-header-form p{
    color:rgb(90, 90, 90);
  }
  .login-header-form input{
    color: black;
    padding-top:0.8rem;
    padding-bottom: 0.8rem;
    padding-left:0.5rem;
    padding-right:0.5rem;
    width:340px
  }
  .confirm-btn{
    border:0px;
    padding:0.8rem;
    padding-left:20px;
    padding-right:20px;
    background-color: #0073b1;
    color: white;
    border:1px solid #0073b1;
    font-weight: 600;
    width:340px
  }
  .help-contact a{
    color:#0073b1;
    font-weight: 600;
  }
  .help-contact a:hover{
    color:#004b74;
  }
  .help-contact p{
    color:black
  }
`;