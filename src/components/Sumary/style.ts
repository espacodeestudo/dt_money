import styled from "styled-components";

export const Container = styled.div`
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    gap: 2rem;
    margin-top:-10rem;

    div{
        background:var(--shape);
        padding: 1.25rem 2rem;
        border-radius: 0.25rem;
        color:var(--text-title);

        header{
            display:flex;
            align-items: center;
            justify-content: space-between;
        }

        strong{
            display: block;
            margin-top:1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height:3rem;
        }

        &.light-background{
            background:var(--green);
            color:#ffff;
        }
    }
`