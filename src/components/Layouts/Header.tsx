import { Stack } from "@mui/material";

export const Header = () => {
  return (
    <>
      <Stack
        width={"100vw"}
        height={"100px"}
        bgcolor={"green"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"white"}
        sx={{ padding: "10px", fontSize: "80px" }}
      >
        This is header
      </Stack>
    </>
  );
};
