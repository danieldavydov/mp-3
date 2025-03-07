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

export default function Skills() {
  useEffect(() => {
    document.title = "Skills | Resume";
  }, []);

  return (
    <>
      <Header />
      <ContentWrapper>
        <Nav />
        <StyledMain>
          <PageTitle>Skills</PageTitle>

          <PictureWrapper>
            <Picture src="/google-cloud.png" alt="Google Cloud Certification" />
          </PictureWrapper>
          <Title>Google Cloud Certification</Title>

          <ContentDiv>
            <StyledText>
              I recieved my Google Cloud Certification in my junior year here at
              Boston University. So far, it has not been super helpful in my CS
              journey at Boston University, but I am sure I'll be able to
              leverage it later in my software engineering career.
            </StyledText>
          </ContentDiv>

          <PictureWrapper>
            <Picture src="/python.png" alt="Python Programming Language Logo" />
          </PictureWrapper>
          <Title>Python</Title>

          <ContentDiv>
            <StyledText>
              Python was the first programming language I learned, and it was
              the first language that I fell in love with. In my opinion, it is
              by far the best programming language for beginners, because of its
              easy to learn, and extremely versitile.
            </StyledText>
          </ContentDiv>

          <PictureWrapper>
            <Picture src="/java.png" alt="Java Programming Language Logo" />
          </PictureWrapper>
          <Title>Java</Title>

          <ContentDiv>
            <StyledText>
              Java is one of my favorite programming languages to date. It's
              extremely durable, and widely used. Throughout my tenure at BU,
              I've used Java countless times, and created many projects outside
              of class.
            </StyledText>
          </ContentDiv>
        </StyledMain>
      </ContentWrapper>
      <Footer />
    </>
  );
}
