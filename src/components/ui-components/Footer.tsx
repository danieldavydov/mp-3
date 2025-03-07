import styled from "styled-components";
import { Link } from "react-router-dom";

const MainFooter = styled.footer`
  background-color: #7895b5;
  padding: 1vh 1vw;
  display: flex;
  justify-content: space-evenly;
  border-top: 1px dashed black;
`;

const StyledLink = styled(Link)`
  &:hover {
    color: black;
  }
`;

export default function Footer() {
  return (
    <MainFooter>
      <p>
        All Rights Reserved by Daniel Davydov{" "}
        <StyledLink to={"/credits"}>Credits</StyledLink> &copy;
      </p>
    </MainFooter>
  );
}
