import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled nav tag
const Navigation = styled.nav`
  width: 30%;
  border-right: 1px dashed black;
`;

// Styled ul tag for nav
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #88a2be;
  text-align: center;
  list-style: none;
  padding-left: 0;
`;

// Styled li tag for nav
const NavItem = styled.li`
  font-size: calc(3px + 2vw);
  width: 60%;
  background-color: #b9c9d9;
  border-radius: 15%;
  padding: 1vh 0;
  margin: 4vh auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 5px 8px;

  &:hover {
    background-color: #7895b5;
    transition: 0.2s ease;
  }
`;

const StyledLink = styled(Link)`
  font-family: "Delius", serif;
  text-decoration: none;

  &:hover {
    font-style: italic;
  }
`;

export default function Nav() {
  return (
    <Navigation>
      <NavList>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>

        <NavItem>
          <StyledLink to="/education">Education</StyledLink>
        </NavItem>

        <NavItem>
          <StyledLink to="/employment">Employment</StyledLink>
        </NavItem>

        <NavItem>
          <StyledLink to="/projects">Projects</StyledLink>
        </NavItem>

        <NavItem>
          <StyledLink to="/skills">Skills</StyledLink>
        </NavItem>

        <NavItem>
          <StyledLink to="/hobbies">Hobbies</StyledLink>
        </NavItem>
      </NavList>
    </Navigation>
  );
}
