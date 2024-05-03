import { styled } from "styled-components"

const HeaderStyled = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    
    img {
        max-width: 210px;
        margin: 0 0 0 10px;

    }
`

const Header = () =>{
    return (
    <HeaderStyled>
            <img src="./public/images/logo.png" alt="logo"/>
    </HeaderStyled>
    )
} 

export default Header