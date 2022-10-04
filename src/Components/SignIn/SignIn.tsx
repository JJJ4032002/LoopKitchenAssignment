import React, { useState, useEffect } from "react";
import Burger from "../../assets/Images/Burger.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { GetUserData, UserRecordsType } from "../../helpers/GetUserData";
import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
import {
  FlexContainer,
  FlexItems,
  Wrapper,
  Form,
  Content,
  Heading,
  Nav,
  Image,
} from "./SignInCss";

function SignIn({
  mode,
  ToggleFunction,
}: {
  mode: string;
  ToggleFunction: () => void;
}) {
  let [userData, setUserData] = useState({ name: "", password: "" });
  let [userRecords, setUserRecords] = useState<UserRecordsType[] | null>(null);
  let [open, setOpen] = useState(false);
  function handleOpen(state: boolean) {
    setOpen(state);
  }

  function handleOnChangeInput(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setUserData((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }
  function handleOnsubmit() {
    let ifFound = userRecords?.find((element: UserRecordsType) => {
      return (
        element.fields.username === userData.name &&
        element.fields.password === userData.password
      );
    });
    if (ifFound === undefined) {
      handleOpen(true);
    }
  }

  useEffect(() => {
    let ignore = false;
    GetUserData().then((result) => {
      if (!ignore) {
        setUserRecords(result);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  let disabled =
    userData.name !== "" && userData.password !== "" ? false : true;

  return (
    <Wrapper>
      <Nav>
        <Heading className="Primary">Loop Kitchen</Heading>
        <IconButton onClick={ToggleFunction}>
          {mode === "light" ? (
            <Brightness4Icon></Brightness4Icon>
          ) : (
            <Brightness7Icon></Brightness7Icon>
          )}
        </IconButton>
      </Nav>
      <FlexContainer>
        <FlexItems>
          <Image alt="Burger Image" src={Burger}></Image>
        </FlexItems>
        <FlexItems className="Content">
          <Heading>Welcome Back!</Heading>
          <Content>
            <p>Sign In to your account</p>
            <Form action="">
              <TextField
                value={userData.name}
                onChange={handleOnChangeInput}
                name="name"
                id="name"
                label="User Name"
                variant="outlined"
              ></TextField>
              <TextField
                value={userData.password}
                onChange={handleOnChangeInput}
                name="password"
                label="Password"
                id="password"
                variant="outlined"
              ></TextField>
              <Button
                disabled={disabled}
                onClick={handleOnsubmit}
                size="large"
                variant="contained"
              >
                Sign In
              </Button>
            </Form>
          </Content>
        </FlexItems>
        <Snackbar
          open={open}
          autoHideDuration={5000}
          onClose={() => {
            handleOpen(false);
          }}
        >
          <Alert
            onClose={() => {
              handleOpen(false);
            }}
            severity="error"
          >
            UserName or Password is incorrect
          </Alert>
        </Snackbar>
      </FlexContainer>
    </Wrapper>
  );
}

export default SignIn;
