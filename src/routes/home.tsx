import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Layout/Container";

interface Props {}

function Home({}: Props): ReactElement {
  return (
    <Container>
      <main className="max-w-6xl mx-auto mt-32 mb-20 sm:px-3">
        <h1>Home</h1>
        <Link to="/about">
          <a>About</a>
        </Link>
      </main>
    </Container>
  );
}

export default Home;
