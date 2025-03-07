import styled from "styled-components";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import Education from "./components/Education";

// PageWrapper mocks #page-wrapper
const PageWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  min-height: 100vh;
`;

function Root() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </>
  );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return (
    <PageWrapper>
      <RouterProvider router={router} />
    </PageWrapper>
  );
}
