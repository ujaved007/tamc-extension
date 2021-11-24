import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
html,
body {
	height: 500px;
	width: 400px;
    margin: 0 auto;
	background-color: #023047;
	color: #FEFAE0;
	font-family: "Roboto", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

`;

export default GlobalStyles;
