import { motion } from 'framer-motion';

import styled from 'styled-components';

export const CardWrapper = styled.div`
    width: 100%;
    perspective: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CardContainer = styled(motion.div)`
    width: 285px;
    height: 500px;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
    background-color: #1d1f21;
    color: #fff;
    position: relative;
    cursor: grab;
`;

export const CircleWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    overflow: hidden;
    border-top-right-radius: 25px;
`;

export const Circle = styled.div`
    position: absolute;
    width: 350px;
    height: 350px;
    top: -8.2em;
    right: -10em;
    z-index: 5;
    background-color: #555555;
    border-radius: 50%;
`;

export const TopContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1.2;
    position: relative;
    align-items: center;
    justify-content: flex-end;
    padding: 1em 15px;
`;

export const BottomContainer = styled.div`
    display: flex;
    flex: 0.8;
    padding: 0 1em;
`;

export const Text = styled.h1`
    color: #fff;
    text-transform: uppercase;
    margin: 0;
    z-index: 10;
    font-size: 35px;
    font-weight: 900;
`;

export const LogoWrapper = styled.div`
    width: 100%;
    height: 180%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled(motion.div)`
    width: auto;
    height: 190px;
    z-index: 99;
    user-select: none;
    margin-right: 0em;
    margin-top: 15em;

    img {
        width: auto;
        height: 100%;
        user-select: none;
    }
`;
