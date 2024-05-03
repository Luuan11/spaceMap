import {styled} from "styled-components"
import search from './search.png'

const DivStyled = styled.div`
    position: relative;
    display: inline-block;
`;

const InputTextStyled = styled.input`
    height: 56px;
    padding: 12px 16px;
    margin: 0 10px 0 0;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`;

const InputIcon = styled.img`
    position: absolute;
    top: 10px;
    right: 20px;
    width: 38px;
    height: 38px;
`

const InputText = (props) => {
    return (
        <DivStyled>
            <InputTextStyled placeholder="O que você procura astronauta?" {...props}/>
            <InputIcon src={search} alt="icone de busca"/>
        </DivStyled>
    )
}

export default InputText