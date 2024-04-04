import { Footer } from "./Footer";
import { Header } from "./Header";
import { ReactElement, ReactNode } from "react";

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};
export const getUserLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
