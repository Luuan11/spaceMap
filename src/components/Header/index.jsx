import { styled } from "styled-components"

const HeaderStyled = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
`

const Header = () =>{
    return (
    <HeaderStyled>
            <img src="./assets/images/logo.png" alt="logo"/>
    </HeaderStyled>
    )
} 

export default Header