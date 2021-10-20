import { Card, Text, HomeCardContainer, RowContainer, Subtext, HomeCardWrapper } from './styles';

import backgroundImage from './images/background.jpg'

import { Marginer } from '../marginer';

const _ = require("lodash");


function HomeCard(props) {
    const backImg = props.cardFeatures.source || backgroundImage;
    const text = props.cardFeatures.text || "";
    const textColor = props.cardFeatures.textColor || "#FFBF8B";
    const textShadow = props.cardFeatures.textShadow || "rgba(0, 0, 0, 1)";
    const subtext = props.cardFeatures.subtext || "";
    const subtextColor = props.cardFeatures.subtextColor || "black";
    const subtextShadow = props.cardFeatures.subtextShadow || "rgba(255, 255, 255, 0.5)";
    const flex = props.cardFeatures.flex || "";
    return (
        <Card src={backImg} flex={flex}>
            <Text textColor={textColor} textShadow={textShadow}>{text}</Text>
            <Subtext subtextColor={subtextColor} subtextShadow={subtextShadow}>{subtext}</Subtext>
        </Card>
    )
}

export function HomeCardRow(props) {
    const cardsFeatures = props.cardsFeatures;
    let indicesPairs = [];
    let pair = [];
    for (let i = 0; i < cardsFeatures.length; i++) {
        pair.push(i)
        if (pair.length === 2 || (i === cardsFeatures.length - 1)) {
            indicesPairs.push(pair)
            pair = []
        }
    }
    return (
        <HomeCardWrapper>
            <HomeCardContainer>
                {indicesPairs.map(pair => (
                    <RowContainer key={pair[0]}>
                        {
                            pair.map(index => (
                                <HomeCard key={index} cardFeatures={cardsFeatures[index]} />
                            ))
                        }
                    </RowContainer>

                ))}
            </HomeCardContainer>
        </HomeCardWrapper>
    )
}