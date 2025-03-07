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

const School = styled.h4`
  font-size: calc(2px + 2.5vw);
  font-family: "Delius", serif;
  color: black;
  text-align: center;
`;

const Timeline = styled.h5`
  font-size: calc(2px + 2vw);
  font-family: "Delius", serif;
  color: black;
  text-align: center;
`;

const Grade = styled.h6`
  font-size: calc(2px + 1.35vw);
  font-family: "Delius", serif;
  color: black;
  text-align: center;
`;

export default function Education() {
  useEffect(() => {
    document.title = "Education | Resume";
  }, []);
  return (
    <>
      <Header />
      <ContentWrapper>
        <Nav />
        <StyledMain>
          <PageTitle>Education</PageTitle>

          <PictureWrapper>
            <Picture src="/bu.png" alt="Boston University Logo" />
          </PictureWrapper>
          <School>Boston University</School>
          <Timeline>2021 - Present</Timeline>
          <Grade>GPA: 3.7</Grade>

          <ContentDiv>
            <StyledText>
              I became a terrier in 2021! Initially, I majored in Biology with a
              specialization in Neuro-biology, but quickly realized that
              medicine was not my calling. After that, I switched my major to
              Computer Science and never looked back. I learned a lot during my
              tenure at BU, academically and personally. I've met the love of my
              life, and I also made life-long friends.
            </StyledText>
          </ContentDiv>

          <PictureWrapper>
            <Picture
              src="/portrichmond.png"
              alt="Port Richmond High School Logo"
            />
          </PictureWrapper>
          <School>Port Richmond High School</School>
          <Timeline>2017 - 2021</Timeline>
          <Grade>GPA: 108</Grade>

          <ContentDiv>
            <StyledText>
              Port Richmond High School was where I developed my love for all
              things stem, especially computer science. I became friends with
              some of my teachers, and I still keep in touch to this day.
            </StyledText>
          </ContentDiv>
        </StyledMain>
      </ContentWrapper>
      <Footer />
    </>
  );
}
