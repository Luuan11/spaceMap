import styled from "styled-components"

const ListStyled = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 210px;
`

const AsideBar = () => {
    return (
        <aside>
            <nav>
                <ListStyled>
                    <li>
                        <a href="#">Home</a>
                    </li>
                </ListStyled>
            </nav>
        </aside>
    )
}

export default AsideBar