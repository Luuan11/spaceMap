import { styled } from "styled-components"
import GlobalStyles from "./components/Globalstyles"
import Header from "./components/Header"

const GradientBackround = styled.div`
  background: linear-gradient(174.61deg, #240433 4.16%, #27044f 48%, #4c1580 96.76%);
  width: 100%;
  min-height: 100vh;
`

function App() {
  
  return (
    <GradientBackround>
      <GlobalStyles />
      <Header />
    </GradientBackround>
  )
}

export default App
