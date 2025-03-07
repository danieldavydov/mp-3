import styled from "styled-components";

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: #88a2be;

  @media screen and (max-width: 750px) {
    width: 100%;
    flex-direction: column;
  }
`;

export default ContentWrapper;
