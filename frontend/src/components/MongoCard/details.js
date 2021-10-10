import styled from "styled-components";
import StarRatings from 'react-star-ratings';

import { Marginer } from "../marginer";

import MongoLogo from '../../assets/images/mongodb_logo.png';

const DetailsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2.5em 6px 0 6px;
    line-height: 1.4;
`;

const MediumText = styled.span`
    font-size: 18px;
    color: #fff;
    font-weight: 800;
    text-transform: uppercase;
`;

const SmallText = styled.span`
    font-size: 11px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
`;

const SpacedHorizontalContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.button`
    padding: 10px 16px;
    background-color: #fbbe01;
    color: #000;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 700;
    border: 1px solid transparent;
    outline: none;
    cursor: pointer;
    transition: all 290ms ease-in-out;
    border-radius: 7px;

    &:hover {
        background-color: transparent;
        color: #fff;
        border: 1px solid #fbbe01;
    }
`;

const Identifier = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: auto;
        height: 13px;
    }
`;

export function Details(props) {
    return (
        <DetailsContainer>
            <SmallText>details</SmallText>
            <SpacedHorizontalContainer>
                <MediumText>knowledge</MediumText>
            </SpacedHorizontalContainer>
            <SpacedHorizontalContainer>
                <StarRatings
                    rating={3}
                    starDimension="25px"
                    starSpacing="5px"
                    numberOfStars={4}
                    starRatedColor="#37a544"
                />
                3/4
            </SpacedHorizontalContainer>
            {/* <Marginer direction="vertical" margin="1.2em" />
            <SpacedHorizontalContainer>
                <MediumText>whatever</MediumText>
                <Button>buy</Button>
            </SpacedHorizontalContainer> */}
            <Marginer direction="vertical" margin="3.6em" />
            <Identifier>
                <img src={MongoLogo} alt="" />
            </Identifier>
        </DetailsContainer>
    )
}