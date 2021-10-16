import { CardContainer, Circle, CircleWrapper, TopContainer, BottomContainer, Text, LogoWrapper, Logo, CardWrapper, TriangleContainer } from './styles';

import JavascriptLogo from '../../assets/images/javascript_logo.png';

import Hexagon from 'react-hexagon';

import backgroundImage from '../../background.jpg'

import { Marginer } from '../marginer';


function HomeCard(props) {
    const strokeFeature = props.stroke || "nostroke";
    const backImg = props.src || backgroundImage;
    return (
        <CardWrapper>
            <CardContainer>
                <Hexagon
                    style={{ stroke: strokeFeature, cursor: 'pointer' }}
                    backgroundImage={backImg}
                    backgroundScale={1.05}
                    diagonal={900}
                    href={"https://google.com"}
                ><text x="20%" y="70%" fontSize="100" color="#ddd" fill="#ddd" style={{"text-shadow":"1px 1px 20px #fff"}}>Click handler!</text></Hexagon>
            </CardContainer>
        </CardWrapper>
    )
}

export function HomeCardRow(props) {
    const sources = props.sources
    const strokes = props.strokes
    const sourcesLength = sources.length
    return (
        <CardWrapper>
            <Marginer direction="horizontal" margin="4000em" />
            <HomeCard src={sources[0]} stroke={strokes[0]} /><HomeCard src={sources[1]} stroke={strokes[1]} /><HomeCard src={sources[2]} stroke={strokes[0]} /><HomeCard src={sources[3]} stroke={strokes[3]} />
            <Marginer direction="horizontal" margin="4000em" />
        </CardWrapper>
    )
}