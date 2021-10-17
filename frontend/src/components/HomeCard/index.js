import { CardContainer, Text, CardWrapper } from './styles';

import Hexagon from 'react-hexagon';

import backgroundImage from '../../background.jpg'

import { Marginer } from '../marginer';

const _ = require("lodash");


function HomeCard(props) {
    const strokeFeature = props.stroke || "nostroke";
    const backImg = props.src || backgroundImage;
    const text = props.text || "";
    return (
        <CardWrapper>
            <CardContainer>
                <Hexagon
                    style={{ stroke: strokeFeature, cursor: 'pointer' }}
                    backgroundImage={backImg}
                    backgroundScale={1.05}
                    diagonal={900}
                    href={"#"}
                ><Text>{text}</Text></Hexagon>
            </CardContainer>
        </CardWrapper>
    )
}

export function HomeCardRow(props) {
    const sources = props.sources;
    const strokes = props.strokes;
    const texts = props.texts;
    const indices = _.range(sources.length);
    return (
        <CardWrapper>
            <Marginer direction="horizontal" margin="4000em" />
            {indices.map(index => (
                <HomeCard src={sources[index]} stroke={strokes[index]} text={texts[index]}/>
            ))}
            <Marginer direction="horizontal" margin="4000em" />
        </CardWrapper>
    )
}