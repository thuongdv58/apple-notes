import Header from "../components/Header";
import type { NextPage } from "next";
import { RequireAuth } from "../hooks/authUser";
import NoteApp from "../components/NoteApp";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";

const Home: NextPage = () => {
  //RequireAuth();
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
export const getServerSideProps = withPageAuth({ redirectTo: '/auth' })
