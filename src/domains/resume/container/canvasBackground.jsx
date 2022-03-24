import React, { useReducer, useRef } from 'react';
import { Stage, Sprite, useTick } from '@inlet/react-pixi'

// Custom Components
import { StyledDiv } from 'src/components/styled-component/tag';

// Image
import RocketIcon from 'src/assets/images/canvas/rocket.png'

const WIDTH = 1900;
const HEIGHT = 900;

const CanvasBackground = () => {

    const reducer = (_, { data }) => data
    const Rocket = () => {
        const [motion, update] = useReducer(reducer)

        // 이동 간격 변수
        const xIter = useRef(0)
        const yIter = useRef(0)

        // 1 이면 ++좌표, 0이면 --좌표
        const xSwitch = useRef(1)
        const ySwitch = useRef(1)

        // 로켓 회전 값 변수
        const rotIter = useRef(0)

        // const iter = useRef(0)
        useTick(delta => {

            const x = xSwitch.current === 1 ? xIter.current += delta : xIter.current -= delta;
            // x 좌표가 최대 크기로 설정한 값(WIDTH) 보다 크거나 xSwitch값이 1일때
            if (xIter.current > WIDTH && xSwitch.current === 1) { xSwitch.current = 0; }
            // x 좌표가 최대 크기로 설정한 값(WIDTH) 보다 작거나 xSwitch값이 0일때
            else if (xIter.current < 0 && xSwitch.current === 0) { xSwitch.current = 1; }

            const y = ySwitch.current === 1 ? yIter.current += delta : yIter.current -= delta;
            // x 좌표가 최대 크기로 설정한 값(HEIGHT) 보다 크거나 ySwitch값이 1일때
            if (yIter.current > HEIGHT && ySwitch.current === 1) { ySwitch.current = 0; }
            // x 좌표가 최대 크기로 설정한 값(HEIGHT) 보다 작거나 ySwitch값이 0일때
            else if (yIter.current < 0 && ySwitch.current === 0) { ySwitch.current = 1; }

            const rotation = xSwitch.current === 1 ? rotIter.current += 0.005 * delta : rotIter.current -= 0.005 * delta;

            update({
                type: 'update',
                data: {
                    x: x,
                    y: y,
                    rotation: rotation,
                },
            })

        })
        return (
            <Sprite
                image={RocketIcon}
                {...motion}
            />
        )
    }

    return (
        <StyledDiv
            position={"fixed"}
            width={"100%"}
            height={"100%"}
            background={"linear-gradient(to bottom, #020024, #0e4b83);"}
        >
            <Stage width={WIDTH} height={HEIGHT} options={{ backgroundAlpha: 0 }}>
                <Rocket />
            </Stage>

        </StyledDiv>
    )
}

export default CanvasBackground;