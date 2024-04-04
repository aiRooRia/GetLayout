import { Header } from "./Header";
import { ReactElement, ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};
export const getAdminLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
