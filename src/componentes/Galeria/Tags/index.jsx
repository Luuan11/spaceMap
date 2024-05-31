import { styled } from 'styled-components';
import tags from './tags.json'

const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
`

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`;

const ButtonTag = styled.button`
    font-size: 20px;
    color: #fafafa;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: all .5s;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #fafafa;
      background: #C98CF1;
    }
`

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`

const Tags = () => {
    return <TagsContainer>
    <TagTitulo>Procure pelas tags:</TagTitulo>
        <Div>
            {tags.map(tag => <ButtonTag key={tag.id}>{tag.title}</ButtonTag>)}
        </Div>
    </TagsContainer>
}

export default Tags

