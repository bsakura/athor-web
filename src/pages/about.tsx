import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    position: relative;
    height: calc(100vh - 170px);

    video {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;

const HeroContentContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 70vw;
    padding: 24px 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;

`

const HeroHeader = styled.h1`
    color: white;
    font-weight: 500;
    font-size: 5vw;
    margin: 10px 0;
    text-shadow: -3px 10px 30px black;
`

const HeroSubheader = styled.h2`
    text-align: left;
    color: white;
    font-family: Spline Sans;
    font-size: 3vw;
    font-weight: 300;
    margin: 10px 0;
    text-shadow: -3px 10px 30px black;

`

export function About() {
    return (
        <div>
            <Container data-aos="fade-up">
                <video autoPlay muted loop id="video">
                    <source src="/abot/vid.mp4" type="video/mp4" />
                </video>
                <HeroContentContainer>
                    <HeroHeader>
                        About Athor Group
                    </HeroHeader>
                    <HeroSubheader>
                        Our group comprises a portfolio of operational<br />
                        trading businesses and strategic investments<br />
                        in our key market
                    </HeroSubheader>
                </HeroContentContainer>
            </Container>
        </div>
    );
}