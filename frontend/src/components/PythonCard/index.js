import { CardContainer, Circle, CircleWrapper, TopContainer, BottomContainer, Text, LogoWrapper, Logo, CardWrapper } from './styles';
import { Details } from './details';

import PythonLogo from '../../assets/images/python_logo.png';
import { useMotionValue, useTransform } from 'framer-motion';


export function PythonCard(props) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);



    return (
        <CardWrapper>
            <CardContainer
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
            >
                <TopContainer>
                    <CircleWrapper>
                        <Circle />
                    </CircleWrapper>
                    <LogoWrapper>
                        <Logo
                            style={{ x, y, rotateX, rotateY, rotate: "-15deg", z: 1000 }}
                            drag
                            dragElastic={0.12}
                            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                            whileTap={{ cursor: "grabbing" }}>
                            <img src={PythonLogo} alt="" />
                        </Logo>
                    </LogoWrapper>
                    <Text>python</Text>
                </TopContainer>
                <BottomContainer><Details /></BottomContainer>
            </CardContainer>
        </CardWrapper>

    )
}