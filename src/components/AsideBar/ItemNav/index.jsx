import styled from "styled-components"

const ItemNavStyled = styled.li`
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${ props => props.$active ? '#7b78e5' : '#e7e5e5' } ;
    font-weight: ${ props => props.$active ? 700 : 300};
    display: flex;
    align-items: center;
    gap: 22px;
`

const itemNav = ({children, iconActive, iconInactive, active = false}) =>{
    return <ItemNavStyled $active={active}>
        <img src={active ? iconActive : iconInactive} alt="" />
        {children}
    </ItemNavStyled>
}

export default itemNav