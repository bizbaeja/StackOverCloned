/*eslint-disable*/
import styled from "styled-components";
import React from 'react'
import Logo from './Logo';
import Menu from './Menu';


const StyledHeader = styled.header` 
    background-color: #393939;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
    display: grid;
    grid-template-columns: 100px 1fr 300px;
    /* grid-column-gap: 20px; */
`;
    

const LogoLink = styled.a`

    color:#fff;
    text-decoration: none;
    display: inline-block;
    height:45px ;
    line-height: 50px;
    padding: 8px 8px;
    svg{
      margin-top: 10px;
      display: inline-block;
 

    }
    span{
      display: inline-block;
      padding-left: 5px;
      padding-top: 15px;
      line-height: 30px;
      font-size: 1.2rem;
      font-weight:300;
    }
    b {
      font-weight:normal;
      margin-left: 2px;
    }
    button{
      content: "f16c";
      font-family: "Font Awesome\ 5 Free";
      width: 30px;
      height: 20px;
    }
`;

const SearchInput = styled.input`
 display:inline-block ;
 box-sizing: border-box;
 width:70%;
 height: 50px;
 border:1px solid #777;
 border-radius: 3px;
 background:rgba(0,0,0,.1);
 padding:8px,10px;
 margin-top: 9px;
`



function Header() {
    return(
        <StyledHeader>
         <Menu></Menu>
         <LogoLink href=""><Logo></Logo><span>Stack<b>OverCloned</b></span>  </LogoLink>
     
          <form action="" className="search">
          <SearchInput type="text" placeholder="Search"/>
          </form>
          
          <LogoLink href="" className="profile">Bizbaeja</LogoLink>
         </StyledHeader>
    )
}

export default Header;