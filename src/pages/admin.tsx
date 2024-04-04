import React from "react";
import { Typography } from "@mui/material";
import { getAdminLayout } from "@/components/Layouts/AdminLayout";

const Admin = () => {
  return (
    <>
      <Typography variant="h1" component="h2" textAlign={"center"}>
        Admin
      </Typography>
    </>
  );
};
Admin.getLayout = getAdminLayout;

export default Admin;
