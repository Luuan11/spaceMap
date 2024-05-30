import { styled } from "styled-components"
import ItemNavegacao from "./ItemNavegacao"

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 236px;
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                <ItemNavegacao
                        iconeAtivo="/icons/home.png"
                        iconeInativo="/icons/home-inactive.png"
                        ativo={true}
                    >
                        Home
                    </ItemNavegacao >
                    <ItemNavegacao
                        iconeAtivo="/icons/more-searched.png"
                        iconeInativo="/icons/more-searched-inactive.png"
                        ativo={false}
                    >
                        Mais vistas
                    </ItemNavegacao >

                    <ItemNavegacao
                        iconeAtivo="/icons/more-liked-active.png"
                        iconeInativo="/icons/more-liked-inactive.png"
                        ativo={false}
                    >
                        Mais curtidas
                    </ItemNavegacao >

                    <ItemNavegacao
                        iconeAtivo="/icons/new-active.png"
                        iconeInativo="/icons/new-inactive.png"
                        ativo={false}
                    >
                        Novas
                    </ItemNavegacao >

                    <ItemNavegacao
                        iconeAtivo="/icons/random-active.png"
                        iconeInativo="/icons/random-inactive.png"
                        ativo={false}
                    >
                       Surpreenda-me
                    </ItemNavegacao >
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral