import styled from "styled-components";
import Nav from "./ui-components/Nav";
import Header from "./ui-components/Header";
import Footer from "./ui-components/Footer";
import ContentWrapper from "./ui-components/ContentWrapper";
import StyledMain from "./ui-components/StyledMain";
import StyledText from "./ui-components/StyledText";
import PageTitle from "./ui-components/PageTitle";
import { useEffect } from "react";

const ContentDiv = styled.div`
  @media screen and (max-width: 750px) {
    align-self: center;
    width: 100%;
    margin: 1vh 1vw;
  }
`;

const PictureWrapper = styled.div`
  width: 45%;
  margin: 0 auto;
  padding: 1vh 1vw;

  @media screen and (max-width: 750px) {
    width: 35%;
    margin: 0 auto;
    padding: 1vh 1vw;
  }
`;

const Picture = styled.img`
  max-width: 100%;
  border-radius: 15%;
`;

const Title = styled.h4`
  font-size: calc(2px + 2.5vw);
  font-family: "Delius", serif;
  color: black;
  text-align: center;
`;

export default function Hobbies() {
  useEffect(() => {
    document.title = "Hobbies | Resume";
  }, []);

  return (
    <>
      <Header />
      <ContentWrapper>
        <Nav />
        <StyledMain>
          <PageTitle>Hobbies</PageTitle>

          <PictureWrapper>
            <Picture src="/bgc.jpeg" alt="BU Board Games Club" />
          </PictureWrapper>
          <Title>BU Board Games Club</Title>

          <ContentDiv>
            <StyledText>
              I first joined BU Board Games club in my Sophomore year at BU, and
              I haven't left since. I made most of my friends there, and seeing
              them every Thursday is the highlight of my week.
            </StyledText>
          </ContentDiv>

          <PictureWrapper>
            <Picture src="/video-games.png" alt="Video Game Icon" />
          </PictureWrapper>
          <Title>Video Games</Title>

          <ContentDiv>
            <StyledText>
              I only recently started playing video games, but it's been
              extremely fun! I like playing strategy games with friends.
              Although I don't have too much time to spend playing video games,
              its still one of my favorite things to do when I have free time.
            </StyledText>
          </ContentDiv>
        </StyledMain>
      </ContentWrapper>
      <Footer />
    </>
  );
}
