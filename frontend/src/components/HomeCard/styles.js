import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Card = styled(motion.div).attrs(
    {
        whileHover: { scale: 1.03, delay: true },
        transition: { type: "spring" }
    }
)`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    position: relative;
    cursor: pointer;
    background-image: url(${props => (props.src)});
    flex: ${props => (props.flex)};
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    margin: 10px;
    box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.5);
`;

export const HomeCardContainer = styled.div`
    width: 1000px;
    height: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
`;

export const HomeCardWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
`;

export const RowContainer = styled.div`
    width: 100%;
    height: 300px;
    perspective: 2000;
    display: flex;
    margin: 0px;  
`;

export const Text = styled.h1`
    font-size: 2em;
    font-family: sans-serif, helvetica, arial;
    text-shadow: 0px 0px 4px ${props => (props.textShadow)};
    color: ${props => (props.textColor)};
    padding: 20px;
`;

export const Subtext = styled.p`
    font-weight: 400;
    font-size: 1.3em;
    font-family: sans-serif, helvetica, arial;
    text-shadow: 0px 0px 4px ${props => (props.subtextShadow)};
    color: ${props => (props.subtextColor)};
    padding: 20px;

    // display: inline-block;
    // white-space: nowrap;
    // overflow: hidden;
    // text-overflow: ellipsis;
`;
