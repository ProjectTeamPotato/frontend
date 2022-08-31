import styled from 'styled-components';

export const PosterWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const Wrap = styled.div`
    width: 130px;
    height: 210px;
    border: 1px solid gray;
    margin: 0 10px;
    background-color: pink;
    padding: 3px;
    font-size: 11px;
`;

export const Img = styled.div`
    width: 100%;
    height: 150px;
    background-color: black;
    &:hover {
        background-color: red;
    }
`;

export const ContentWrap = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;
    margin-top: 7px;
    div {
        :not(:first-child) {
            color: gray;
        }
    }
`;

export const Title = styled.div`
    color: white;
`;