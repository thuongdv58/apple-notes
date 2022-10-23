import Header from "../components/Header";
import type { NextPage } from "next";
import { RequireAuth } from "../hooks/authUser";
import NoteApp from "../components/NoteApp";

const Home: NextPage = () => {
  RequireAuth();

  return (
    <>
      <Header />
      <NoteApp></NoteApp>
    </>
  );
};

export default Home;
