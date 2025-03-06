import styled from "styled-components";

// Styles for header tag
const MainHeader = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #7895b5;
  padding: 1vh 2vw;
  border-bottom: 1px dashed black;
`;

const HeaderTitle = styled.h1`
  font-family: "WindSong", serif;
`;

const HeaderContent = styled.p`
  font-style: italic;
`;

export default function Header() {
  return (
    <div>
      <h1>something</h1>
      <p>something</p>
    </div>
  );
}
