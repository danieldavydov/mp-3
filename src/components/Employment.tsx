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

const Employer = styled.h4`
  font-size: calc(2px + 2.5vw);
  font-family: "Delius", serif;
  color: black;
  text-align: center;
`;

const Position = styled.h5`
  font-size: calc(2px + 2vw);
  font-family: "Delius", serif;
  color: black;
  text-align: center;
`;

const Timeline = styled.h6`
  font-size: calc(2px + 1.5vw);
  font-family: "Delius", serif;
  color: black;
  text-align: center;
`;

export default function Employment() {
  useEffect(() => {
    document.title = "Employment | Resume";
  }, []);
  return (
    <>
      <Header />
      <ContentWrapper>
        <Nav />
        <StyledMain>
          <PageTitle>Employment</PageTitle>

          <PictureWrapper>
            <Picture src="/bu.png" alt="Boston University Logo" />
          </PictureWrapper>
          <Employer>Boston University</Employer>
          <Position>Grader for CS330</Position>
          <Timeline>Sep 2024 - Dec 2024</Timeline>
          <ContentDiv>
            <StyledText>
              Graded assignments for CS330 - Analysis of Algorithms, a 200+
              student course covering advanced algorithm techniques and
              theoretical computer science concepts
            </StyledText>
          </ContentDiv>

          <PictureWrapper>
            <Picture src="/wave.png" alt="Wave Learning Festival Logo" />
          </PictureWrapper>
          <Employer>Wave Learning Festival</Employer>
          <Position>Software Engineer Intern</Position>
          <Timeline>June 2024 - Present</Timeline>
          <ContentDiv>
            <StyledText>
              Built front-end React.js app with e2e testing used by over 10,000
              students worldwide in more than 60 countries. Debugged production
              code and wrote unit/integration tests to ensure a reliable, and
              maintainable code-base, identifying and resolving 2 critical bugs.
              Lead the development of Wave's flagship seminar service by
              analyzing and handling course data, allowing hundreds of students
              to take courses over summer.
            </StyledText>
          </ContentDiv>

          <PictureWrapper>
            <Picture src="/outlier.png" alt="Outlier AI Logo" />
          </PictureWrapper>
          <Employer>Outlier AI</Employer>
          <Position>Software Engineer Intern</Position>
          <Timeline>June 2024 - August 2024</Timeline>
          <ContentDiv>
            <StyledText>
              Integrated RLHF methodologies into Outlier AI models,
              significantly enhancing their performance and accuracy in complex
              decision-making scenarios. Delivered detailed feedback to enhance
              model performance, while developing robust test cases to ensure
              efficiency and effectiveness of AI outputs. Conducted thorough
              code reviews of SQL queries to ensure accuracy and compliance with
              customer requirements, identifying and resolving 4 critical issues
              and improving overall code quality.
            </StyledText>
          </ContentDiv>

          <PictureWrapper>
            <Picture src="/alliconnect.png" alt="Alli Connect Logo" />
          </PictureWrapper>
          <Employer>Alli Connect</Employer>
          <Position>Software Engineer Intern</Position>
          <Timeline>June 2023 - August 2023</Timeline>
          <ContentDiv>
            <StyledText>
              Contracted by a B2B mental-healthcare SaaS startup that matches
              clients to uniquely selected healthcare professional using machine
              learning. Implemented React Native, Typescript, and Expo to build
              a cutting-edge mobile application; achieved a 30% reduction in
              development time while delivering a seamless user experience.
              Collaborated with other interns to create UI/UX wireframes using
              Figma for future iterations of the application. Worked closely
              with a cross-functional engineering team of 7 to troubleshoot and
              optimize code, accelerating our product development cycle by 2
              weeks.
            </StyledText>
          </ContentDiv>
        </StyledMain>
      </ContentWrapper>
      <Footer />
    </>
  );
}
