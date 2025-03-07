import styled from "styled-components";
import Nav from "./ui-components/Nav";
import Header from "./ui-components/Header";
import Footer from "./ui-components/Footer";
import ContentWrapper from "./ui-components/ContentWrapper";
import StyledMain from "./ui-components/StyledMain";
import StyledText from "./ui-components/StyledText";
import PageTitle from "./ui-components/PageTitle";

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

const StyledSpan = styled.span`
  font-family: "WindSong", serif;
  color: black;
`;

const CatGif = styled.img`
  width: 35%;
  margin: 0 auto;
`;

export default function Home() {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Nav />
        <StyledMain>
          <PageTitle>Welcome</PageTitle>
          <PictureWrapper>
            <Picture src="/me.jpeg" alt="Daniel Davydov" />
          </PictureWrapper>

          <ContentDiv>
            <StyledText>
              Hi, my name is <StyledSpan>Daniel Davydov</StyledSpan>, but you
              can call me <StyledSpan>Dan</StyledSpan>. Welcome to my online
              resume! Let's get to know each other a bit! I'm currently a Senior
              studying Computer Science at Boston University. As my
              undergraduate career comes to its end, I will leverage the skills
              I learned to begin my new career as a software engineer. As of
              right now, I am planning on continuing my education after
              acquiring some real-world software engineering experience.
            </StyledText>

            <StyledText>
              As you explore the rest of my website, you will learn more Hobbies
              as a software engineer, and as a person! I hope you enjoy!
            </StyledText>
          </ContentDiv>

          <CatGif src="/cat-walking.gif" alt="gif of a cat walking" />
        </StyledMain>
      </ContentWrapper>
      <Footer />
    </>
  );
}
