import Header from "../components/Header";
import type { NextPage } from "next";
import { RequireAuth } from "../hooks/authUser";
import NoteApp from "../components/NoteApp";

const Home: NextPage = () => {
  RequireAuth();

  return (
    <>
      <Header />
      <div className="h-[calc(100vh_-_4rem)]">
        <NoteApp></NoteApp>
      </div>
    </>
  );
};

export default Home;
