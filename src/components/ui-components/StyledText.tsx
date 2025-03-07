import styled from "styled-components";

const StyledText = styled.p`
  margin: 2vh 2vw;
  font-size: calc(2px + 2vw);
  color: black;

  @media screen and (max-width: 750px) {
    margin: 2% 2%;
    font-size: calc(2px + 3vw);
  }
`;

export default StyledText;
