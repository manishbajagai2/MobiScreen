import styled from "styled-components"
import background from "../assets/login.jpeg"

function BackgroundImage() {
    return (
        <Container>
            <img src={background} alt="background image" />
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    img {
        height: 100vh;
        width: 100vw;
        mask-image: linear-gradient(
            to top,
            rgba(20, 20, 20, 0) 0,
            rgba(20, 20, 20, 0.15) 15%,
            rgba(20, 20, 20, 0.35) 29%,
            rgba(20, 20, 20, 0.58) 44%,
            #141414 68%,
            #141414 100%
        );
        -webkit-mask-image: linear-gradient(
            to top,
            rgba(20, 20, 20, 0) 0,
            rgba(20, 20, 20, 0.15) 15%,
            rgba(20, 20, 20, 0.35) 29%,
            rgba(20, 20, 20, 0.58) 44%,
            #141414 68%,
            #141414 100%
        );
    }
`
export default BackgroundImage
