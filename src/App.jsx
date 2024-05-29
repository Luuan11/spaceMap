import { styled } from "styled-components"
import GlobalStyles from "./components/Globalstyles"
import Header from "./components/Header"
import AsideBar from "./components/AsideBar"
import Banner from "./components/Banner"

import backgroundImage from "./assets/images/banner/banner.png"

const GradientBackround = styled.div`
  background: linear-gradient(174.61deg, #240433 4.16%, #27044f 48%, #4c1580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 35px;
`

const ContGallery = styled.section`
  display: flex;
  flex: column;
  flex-grow: 1;
`


function App() {
  
  return (
    <GradientBackround>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <AsideBar />
          <Banner 
          text="Galeria mais completa de fotos do espaço"
          backgroundImage={backgroundImage}
          />
          </MainContainer>
      </AppContainer>
    </GradientBackround>
  )
}

export default App
