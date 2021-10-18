import { Card, Text, HomeCardContainer, RowContainer, Subtext, HomeCardWrapper } from './styles';

import backgroundImage from '../../background.jpg'

import { Marginer } from '../marginer';

const _ = require("lodash");


function HomeCard(props) {
    const strokeFeature = props.stroke || "nostroke";
    const backImg = props.src || backgroundImage;
    const text = props.text || "";
    const subtext = props.subtext || "";
    const flex = props.flex || "";
    return (
        <Card src={backImg} flex={flex}>
            <Text>{text}</Text>
            <Subtext>{subtext}</Subtext>
        </Card>
    )
}

export function HomeCardRow(props) {
    const sources = props.sources;
    const texts = props.texts;
    const subtexts = props.subtexts;
    const flexes = props.flexes;
    const indices = _.range(sources.length);
    let indicesPairs = [];
    let pair = [];
    for (let i = 0; i < sources.length; i++) {
        pair.push(i)
        if (pair.length === 2 || (i === sources.length - 1)) {
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
                                <HomeCard key={index} src={sources[index]} text={texts[index]} subtext={subtexts[index]} flex={flexes[index]} />
                            ))
                        }
                    </RowContainer>

                ))}
            </HomeCardContainer>
        </HomeCardWrapper>
    )
}