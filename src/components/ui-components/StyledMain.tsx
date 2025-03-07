import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: #dae3eb;
  min-height: 100vh;

  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #dae3eb;
  }
`;

export default StyledMain;
