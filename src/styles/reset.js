import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`

*{
    box-sizing: 0;
    padding: 0;
    margin: 0;
    outline: 0;
    list-style: none;
    text-decoration: none;
    
}

fieldset {
    border: 0;
}

button{
    cursor: pointer;
    background: transparent;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
span,
li,
button,
label,
input,body {
  font-family: "Inter", sans-serif;
}

`;
