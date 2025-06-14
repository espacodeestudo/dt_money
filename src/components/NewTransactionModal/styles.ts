import styled from "styled-components"
import {darken, transparentize} from "polished"


interface RadioBoxProps{
    isActive: boolean;
    activeColor:'green' | 'red';
}

const colors={
    green:'#33CC95',
    red:'#E52E4D'
}
export const Container = styled.form`

    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input{
        width:100%;
        padding:0 1.5rem;
        height: 4rem;
        border-radius:0.25rem;
        border: 1px solid #d7d7d7;
        background:#e7e9ee;
        font-size:1rem;
        font-weight:400;

        &::placeholder{
            color:var(--text-body);
        }
        & + input{
            margin-top: 1rem;
        }
    }

    button[type="submit"]{
        width:100%;
        padding:0 1.5rem;
        height:4rem;
        background:var(--green);
        color:#fff;
        font-size:1rem;
        font-weight: 600;
        border-radius:0.25rem;
        border:0;
        margin-top:1.5rem;
        transition:filter 0.2s;

        &:hover{
            filter:brightness(0.9);
        }
    }

`;

export const TransactionTypeContainer = styled.div`
    margin:1rem 0;
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    gap:0.5rem;

`;

export const RadioBox= styled.button<RadioBoxProps>`
     height:4rem;
        border:1px solid #d7d7d7;
        border-radius:0.25rem;
        background:${(props) => props.isActive 
        ? transparentize(0.9, colors[props.activeColor] )
        : 'transparent'};
        display: flex;
        align-items: center;
        justify-content: center;
        transition:border-color 0.2s;
        h4{
            margin-left:1rem;
            font-size:1rem;
            color:var(--text-title);
        }

       &:first-child{
        span{
            color:var(--green);
        }
       }
       &:last-child{
        span{
            color:var(--red);
        }
       }

       &:hover{
        border-color:${darken(0.1, '#d7d7d7d7')};
       }
` 