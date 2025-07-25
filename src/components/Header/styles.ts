import styled from "styled-components";

export const Container  = styled.header`

    background: var(--blue );
`

export const Content = styled.div`
    margin:0 auto;
    max-width: 1120px;
    padding:2rem 1rem 12rem;
    display:flex;
    align-items: center;
    justify-content:space-between;

    h3{
        color:#ffff;
    }
    button{
        font-size: 1rem;
        background: var(--blue-light);
        color:#ffff;
        border:0;
        padding: 0 2rem;
        border-radius:0.25rem;
        height:3rem;
        transition: filter 0.2s;
        &:hover{
            filter:brightness(0.9);
        }
    }
`