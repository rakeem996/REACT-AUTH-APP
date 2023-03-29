import React from "react";
import { Container } from "react-bootstrap";
import SignUp from "./SignUp";

function App() {
  return (
    <div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{maxWidth:"300px"}}>
        <SignUp />
        </div>

      </Container>
    </div>
  );
}

export default App;
