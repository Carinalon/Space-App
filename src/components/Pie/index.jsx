import { styled } from 'styled-components';

const PieEstilizado = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-top: 100px;
	background-color: #04244F;
	padding: 22px;
	box-sizing: border-box;
`;

const IconoContainer = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	li {
    	display: inline-block;
    	margin-right: 32px;
	}
`;

const PieTexto = styled.p`
	font-size: 16px;
	color: white;
	margin: 0;
`;

function Pie() {
  return (
    <PieEstilizado>
      <IconoContainer>
        <li>
          <a href="https://www.facebook.com/profile.php?id=61560810571966" target='blanck'>
            <img src="img/galeria/redes/facebook.svg" alt="Icono de Facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/tia_carina/" target='blanck'>
            <img src="/public/img/galeria/redes/instagram.svg" alt="Icono de Instagram" />
          </a>
        </li>     
      </IconoContainer>
      <PieTexto>Desarrollado por Carina Alonzo.</PieTexto>
    </PieEstilizado>
  );
}

export default Pie
