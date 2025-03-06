import styled from "styled-components";

// Styled header tag
const MainHeader = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #7895b5;
  padding: 1vh 2vw;
  border-bottom: 1px dashed black;
`;

// Styled h1 tag for header
const HeaderTitle = styled.h1`
  font-family: "WindSong", serif;
`;

// Styled p tag for header
const HeaderContent = styled.p`
  font-style: italic;
`;

export default function Header() {
  return (
    <MainHeader>
      <HeaderTitle>Daniel Davydov</HeaderTitle>
      <HeaderContent>Online Resume</HeaderContent>
    </MainHeader>
  );
}
