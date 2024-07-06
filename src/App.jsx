import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import banner from "./assets/banner.png"

const FondoGradiente = styled.div`
background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
`
const AppContainer=styled.div`
  width:1440px;
  max-width: 100%;
  margin: 0 auto;

`
const MainContainer= styled.main`
  display: flex;
  gap: 30px;
`

function App() {
  
  return (
    <>
    <FondoGradiente>
      <GlobalStyles/>
      <Cabecera/>
      <AppContainer>
        <MainContainer>
            <BarraLateral/>
            <Banner texto="La Galería más completa de fotos del espacio" backgroundImage={banner}/>
        </MainContainer>
        
      </AppContainer>
      
    </FondoGradiente>
    </>
  )
}

export default App
      