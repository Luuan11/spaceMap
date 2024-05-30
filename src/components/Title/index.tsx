import { styled } from "styled-components";

const Title = styled.h2`
    color: #7878e6;
    font-size: 32px;
    text-align: ${ props => props.$alinhamento ? props.$alinhamento : 'left' };
`

export default Title