import { styled } from "styled-components"

import ItemNav from "./ItemNav"

const ListStyled = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 10px;
    width: 215px;
`

const AsideBar = () => {
    return (
        <aside>
            <nav>
                <ListStyled>
                    <ItemNav
                        iconActive="/icons/home.png"
                        iconInactive="/icons/home-inactive.png"
                        active={true}
                    >
                        Home
                    </ItemNav >
                    <ItemNav
                        iconActive="/icons/more-searched.png"
                        iconInactive="/icons/more-searched-inactive.png"
                        active={false}
                    >
                        More searched
                    </ItemNav >

                    <ItemNav
                        iconActive="/icons/more-liked-active.png"
                        iconInactive="/icons/more-liked-inactive.png"
                        active={false}
                    >
                        More liked
                    </ItemNav >

                    <ItemNav
                        iconActive="/icons/new-active.png"
                        iconInactive="/icons/new-inactive.png"
                        active={false}
                    >
                        New
                    </ItemNav >

                    <ItemNav
                        iconActive="/icons/random-active.png"
                        iconInactive="/icons/random-inactive.png"
                        active={false}
                    >
                        Randomize it
                    </ItemNav >
                </ListStyled>
            </nav>
        </aside>
    )
}

export default AsideBar