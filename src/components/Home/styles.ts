import styled from 'styled-components';

export const Container = styled.div`
  #logo{
    margin-top:10px;
    // margin-left:12rem;
  }
  #logo img{
    width: 130px;
  }

  #login-option-nav{
    margin-top:10px;
    float: right;
    // margin-right:16rem
  }
  .sign-btn{
    border:0px;
    padding:6px;
    padding-left:20px;
    padding-right:20px;
    background-color: transparent;
    color: #0073b1;
    border:1px solid #0073b1;
    font-weight: 600;
  }
  .sign-btn:hover{
    background-color: rgba(113, 207, 214, 0.466);
  }
  #login-option-nav a{
    color: rgba(0,0,0,0.6);
    font-weight: 600;
  }
  #login-option-nav a:hover{
    color: black;
    padding:6px;
    padding-left:20px;
    padding-right:20px;
    font-weight: 600;
    border-radius:4px;
    background-color:grey;
  }
  #header-loginpage{
    margin-top: 8rem
  }
  #header-loginpage h1{
    // margin-left:11rem;
    color:#0073b1;
    font-size:4rem; 
  }

  #header-loginpage #searchbar{
    // margin-left: 11rem;
    margin-top:6rem;
    padding-top:0.8rem;
    padding-bottom:0.8rem;
    padding-left:2rem;
    width:450px;
    border-radius:3px;
    border:1px solid rgb(218, 218, 218);
    box-shadow: 0px 3px 4px 2px rgba(0, 0, 0, 0.199);
  }
  #login-img-header{
    border-radius:100%;
    overflow: hidden;
    width: 100%;
    height: 670px;

  }
`;