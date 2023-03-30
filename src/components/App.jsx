import React from "react";
import { Container } from "react-bootstrap";
import SignUp from "./SignUp";
import { AuthProvider } from "../Context/AuthContext";

function App() {
  return (
    <div>
      {/* <AuthProvider> */}
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "300px" }}>
            <SignUp />
          </div>
        </Container>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
