import styled from "styled-components";
import Nav from "./components/Nav";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// PageWrapper mocks #page-wrapper
const PageWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  min-height: 100vh;
`;

export default function App() {
  return (
    <PageWrapper>
      <p>Something here</p>
    </PageWrapper>
  );
}
