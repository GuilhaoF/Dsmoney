import styled from "styled-components";
import {darken, transparentize} from 'polished';

export const Container = styled.form`

h2{
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
}
input{
    width: 100%;
    padding: 0 1.5rem;
    height: 5rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder{
        color: var(--text-body);
    }
    &+input{
        margin-top: 1rem;
    } 
}
button[type="submit"]{
    width: 100%;
    padding:0 1.5rem;
    height:4rem;
    background:var(--green-light);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight:600;
    transition: filter 0.3s;

    &:hover{
        filter: brightness(0.9);
    }
}
`
export const TransactionTypeContainer = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    margin: 1rem 0;
`
//passar uma props do botao 

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';//recebe uma string
}
//cores para os botoes ,quando ativos
const colors = {
    green: "#33cc95",
    red: "#e52e4d"
}


export const RadioBox = styled.button<RadioBoxProps> `

    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    //transparentize serve para deixar um pouco opaco(opacidade nas cores de fundo)
    background: ${(props) => props.isActive ? transparentize(0.9,colors[props.activeColor]): 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{//hover do botao
        border-color:#aaa;
    }

    img{
        width:20px;
        height: 20px;
    }
    span{
        display: inline-block;
        margin-left: 1rem;
        color: var(--text-title);
        font-size: 1rem;

    }


`