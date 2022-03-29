import styled from "styled-components";

export const Container = styled.header`
background:var(--blue)

`
export const Content = styled.div`
 max-width: 1128px;
 margin: 0 auto;
 padding: 2rem 1rem 12rem;
 display: flex;
 align-items: center;
 justify-content:space-between;//espaco entre a logo e o botao

 button{
     font-size:1rem;
     color:#fff;
     background:var(--green-light);
     border:0;
     padding:0 2rem;
     border-radius:0.25rem;
     height:3rem;
     transition: filter 0.2s;
    
     &:hover{//pesquisar sobre a funcao filter css
         filter: brightness(0.9);
     }

 }


`