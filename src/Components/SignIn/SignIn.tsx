import React, { useState, useEffect, useContext } from "react";
import Burger from "../../assets/Images/Burger.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { GetUserData, UserRecordsType } from "../../helpers/GetUserData";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ThemeContext } from "../../Contexts/Theme";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Snackbar,
} from "@mui/material";
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

function SignIn() {
  let navigate = useNavigate();
  let { mode, toggleColorMode } = useContext(ThemeContext);
  let [userData, setUserData] = useState({ name: "", password: "" });
  let [userRecords, setUserRecords] = useState<UserRecordsType[] | null>(null);
  const [showPassword, setShowPassword] = useState(false);
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
    } else {
      navigate("/home");
    }
  }
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
        <IconButton onClick={toggleColorMode}>
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
              <FormControl sx={{ width: "100%" }} variant="outlined">
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                  value={userData.password}
                  type={showPassword ? "text" : "password"}
                  onChange={handleOnChangeInput}
                  name="password"
                  id="password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                ></OutlinedInput>
              </FormControl>
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
