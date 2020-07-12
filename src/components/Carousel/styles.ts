import styled from 'styled-components';
export const Container = styled.div`
    width: 100vw;
    height: 60vh;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    scroll-snap-type: x mandatory;
    counter-reset: my-count;
`;

export const Wrapper = styled.div`
    flex: none;
    width: 100%;
    height: 100%;
    scroll-snap-align: center;
    scroll-behavior:smooth;
    background:pink;
    position: relative;
        counter-increment: my-count;

    &::before {
        content: counter(my-count);
        position: absolute;
        top: 0;
        left: 0;
        width: 150px;
        height: 150px;
        background: rgba(0, 0, 0, 0.5);
        display:grid;
        place-items:center;
        font-size:3em;
        color:#fff;
    }
`;
