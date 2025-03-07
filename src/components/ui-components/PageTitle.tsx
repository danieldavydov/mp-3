import styled from "styled-components";

const PageTitle = styled.h3`
  font-style: italic;
  font-family: "Delius", serif;
  margin: 2vw 0;
  text-align: center;
  font-size: calc(2px + 2vw);
  color: black;

  &:hover {
    text-decoration: underline;
    transition: 0.5s ease;
  }

  @media screen and (max-width: 750px) {
    font-style: italic;
    text-align: center;
    color: black;

    &:hover {
      text-decoration: underline;
      transition: 0.5s ease;
    }
  }
`;

export default PageTitle;
