import styled from "styled-components";
import Nav from "./ui-components/Nav";
import Header from "./ui-components/Header";
import Footer from "./ui-components/Footer";
import ContentWrapper from "./ui-components/ContentWrapper";
import StyledMain from "./ui-components/StyledMain";
import StyledText from "./ui-components/StyledText";
import PageTitle from "./ui-components/PageTitle";
import ProjectLink from "./ui-components/ProjectLink";
import Calculator from "./ui-components/Calculator";
import { useEffect } from "react";

const ContentDiv = styled.div`
  border-bottom: 1px dashed black;

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

const ProjectTitle = styled.h4`
  font-size: calc(2px + 2.5vw);
  font-family: "Delius", serif;
  color: black;
  text-align: center;
`;

const TechStack = styled.h5`
  font-size: calc(2px + 2vw);
  font-family: "Delius", serif;
  color: black;
  text-align: center;
`;

export default function Projects() {
  useEffect(() => {
    document.title = "Projects | Resume";
  }, []);

  return (
    <>
      <Header />
      <ContentWrapper>
        <Nav />
        <StyledMain>
          <PageTitle>Projects</PageTitle>

          <PictureWrapper>
            <Picture src="/catspot.png" alt="CatSpot Project" />
          </PictureWrapper>
          <ProjectTitle>CatSpot</ProjectTitle>
          <TechStack>
            Python (Django), HTML, CSS, Heroku, Git, Image Classification
          </TechStack>
          <ProjectLink
            to="https://protected-savannah-58752-99c8687154d1.herokuapp.com/project/"
            target="_blank"
          >
            Checkout CatSpot
          </ProjectLink>
          <ContentDiv>
            <StyledText>
              Designed and implemented a fully functional gamified social media
              platform that allows users to compete with friends by earning
              points by posting pictures of cats. An image classification model
              identifies the cat breed in the photo being uploaded. The point
              reward algorithm is based on the image classification model's
              prediction.
            </StyledText>
          </ContentDiv>

          <PictureWrapper>
            <Picture src="/newsaid.png" alt="NewsAId Project" />
          </PictureWrapper>
          <ProjectTitle>NewsAId</ProjectTitle>
          <TechStack>
            TypeScript, React, Next.js, Tailwind CSS, Python, SQL
          </TechStack>
          <ContentDiv>
            <StyledText>
              Collaborated with a team of 3 to design and develop a website that
              allows users to create news articles based on brief descriptions.
              Users specify their preferences (desired length, style, and tone),
              and the AI model creates a news article that they can send to
              their friends with a temporary URL.
            </StyledText>
          </ContentDiv>

          <Calculator />
        </StyledMain>
      </ContentWrapper>
      <Footer />
    </>
  );
}
