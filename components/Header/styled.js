import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: end;
    background-color: #f4f6f9;
    padding: 0 100px;
    font-size: 12px;
`;

export const StyledLink = styled.a`
    padding: 6px;
    color: #666;
    &:hover {
        text-decoration: underline;
    }
`;