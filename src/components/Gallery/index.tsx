import Title from "../Title";
import Tags from "./Tags";
import Famous from "./Famous"

import { styled } from "styled-components"

const GalleryContainer = styled.div`
    display: flex;
`

const SectionFlow = styled.section`
    flex-grow: 1;
`

const Gallery = () => {
    return (
        <>
            <Tags />
            <GalleryContainer>
                <SectionFlow>
                    <Title> Navegue pela galeria </Title>
                </SectionFlow>
                <Famous />
            </GalleryContainer>
        </>
    )
}

export default Gallery;