import { Button, IconButton, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import RestaurantPlaceholder from "../../assets/Images/RestaurantPlaceholder.svg";
import MenuIcon from "@mui/icons-material/Menu";
import useWindowSize from "../../hooks/useWindowSize";
import Autocomplete from "@mui/material/Autocomplete";
import { RestaurantsDataContext } from "../../Contexts/RestaurantsData";
import { v4 as uuidv4 } from "uuid";
import {
  Heading,
  Header,
  RestaurantWrapper,
  SearchBarWrapper,
  Wrapper,
  Placeholder,
  Image,
  Frame,
  Block,
  BlockHeader,
} from "./RestaurantsCss";
import { NewRestaurantsDataType } from "../../helpers/GetRestaurantsData";
function Restaurants({ handleOpen }: { handleOpen: (state: boolean) => void }) {
  let { Restaurants, AddedRestaurants, AddToRestaurants } = useContext(
    RestaurantsDataContext
  );
  let [InputValue, setInputValue] = useState("");
  let [value, setValue] = useState<NewRestaurantsDataType | null>(null);
  let disableDrawer = useWindowSize();
  function handleChangeInput(event: any, newValue: string) {
    setInputValue(newValue);
  }
  function handleValueChange(
    event: any,
    NewValue: NewRestaurantsDataType | null
  ) {
    setValue(NewValue);
  }
  function handleSubmit() {
    let id = uuidv4();
    if (value !== null) {
      let newRestaurant = {
        Id: id,
        Name: value.label,
        Bookmarked: false,
      };
      AddToRestaurants(newRestaurant);
      setValue(null);
      setInputValue("");
    }
  }
  let disableButton = value !== null ? (value.label ? false : true) : true;
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
            value={value}
            onChange={handleValueChange}
            inputValue={InputValue}
            onInputChange={handleChangeInput}
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

        <Button
          onClick={handleSubmit}
          disabled={disableButton}
          variant="contained"
        >
          Add
        </Button>
      </SearchBarWrapper>
      <RestaurantWrapper>
        {AddedRestaurants === null ? (
          <Placeholder>
            <Image src={RestaurantPlaceholder} alt="" />
            <Heading>No Restaurants added yet!</Heading>
          </Placeholder>
        ) : (
          <>
            {AddedRestaurants.map((element) => {
              return (
                <Block key={element.Id}>
                  <BlockHeader>
                    <h2>{element.Name}</h2>
                  </BlockHeader>
                </Block>
              );
            })}
          </>
        )}
      </RestaurantWrapper>
    </Wrapper>
  );
}

export default Restaurants;
