import { Button, IconButton, TextField } from "@mui/material";
import React, { useContext } from "react";
import RestaurantPlaceholder from "../../assets/Images/RestaurantPlaceholder.svg";
import MenuIcon from "@mui/icons-material/Menu";
import useWindowSize from "../../hooks/useWindowSize";
import Autocomplete from "@mui/material/Autocomplete";
import { RestaurantsDataContext } from "../../Contexts/RestaurantsData";
import {
  Heading,
  Header,
  RestaurantWrapper,
  SearchBarWrapper,
  Wrapper,
  Placeholder,
  Image,
} from "./RestaurantsCss";
function Restaurants({ handleOpen }: { handleOpen: (state: boolean) => void }) {
  let { Restaurants } = useContext(RestaurantsDataContext);
  console.log(Restaurants);
  let disableDrawer = useWindowSize();
  return (
    <Wrapper>
      <Header>
        <Heading>Restaurants</Heading>
        {disableDrawer ? (
          <IconButton
            onClick={() => {
              handleOpen(true);
            }}
          >
            <MenuIcon></MenuIcon>
          </IconButton>
        ) : (
          ""
        )}
      </Header>

      <SearchBarWrapper>
        {Restaurants ? (
          <Autocomplete
            disablePortal
            options={Restaurants}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{ width: "350px", textAlign: "center" }}
                hiddenLabel
                placeholder="Search Restaurants"
                variant="standard"
              ></TextField>
            )}
          ></Autocomplete>
        ) : (
          "Reload Again"
        )}

        <Button variant="contained">Add</Button>
      </SearchBarWrapper>
      <RestaurantWrapper>
        <Placeholder>
          <Image src={RestaurantPlaceholder} alt="" />
          <Heading>No Restaurants added yet!</Heading>
        </Placeholder>
      </RestaurantWrapper>
    </Wrapper>
  );
}

export default Restaurants;
