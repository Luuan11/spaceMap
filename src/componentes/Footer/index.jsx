import styled from 'styled-components';

// Estilização do footer
const FooterEstilizado = styled.footer`
    background-color: #232324;
    width: 100%;
    display: flex;
    padding: 24px 0;
    margin: 20px 0 0;
    align-items: center;
    justify-content: center;

    font-size: 18px;
    color: white;

    a{
        color: white;
    }
`;


// Componente Footer
const Footer = () => {
    return (
        <FooterEstilizado>
            <div>
                Feito com 💜 by <a href="https://www.linkedin.com/in/luan-fernando/">Luan Fernando</a>
            </div>
        </FooterEstilizado>
    );
}

export default Footer;