import styled from 'styled-components';

export const CardWrapper = styled.div`
    width: 100%;
    perspective: 2000;
    display: flex;
    align-items: center;
    margin: 10px;
`;

export const CardContainer = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const Text = styled.text.attrs({
    x: "20%", y: "57%"
})`
    font-size: 10em;
    font-family: sans-serif, helvetica, arial;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 1);
    fill: #FFBF8B;
`;
