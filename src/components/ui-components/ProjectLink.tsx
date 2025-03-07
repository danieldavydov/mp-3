import { Link } from "react-router-dom";
import styled from "styled-components";

const ProjectLink = styled(Link)`
  font-size: calc(2px + 2vw);
  font-family: "Delius", serif;
  color: black;
  text-align: center;
  border: 1px solid black;
  width: 40%;
  margin: 1vh auto;
  padding: 1vh 0;
  text-decoration: none;

  &:hover {
    background-color: #88a2be;
    text-decoration: underline;
  }
`;

export default ProjectLink;
