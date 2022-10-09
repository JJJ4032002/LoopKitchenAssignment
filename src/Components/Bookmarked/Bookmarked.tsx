import React, { useContext } from "react";
import styled from "styled-components/macro";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useWindowSize from "../../hooks/useWindowSize";
import { devices } from "../../Media Queries/Queries";
import RestaurantsView from "../Elements/RestaurantsView";
import RestaurantPlaceholder from "../../assets/Images/RestaurantPlaceholder.svg";
import { RestaurantsDataContext } from "../../Contexts/RestaurantsData";
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  gap: 3em;
  max-height: 100vh;
  @media ${devices.tablet} {
    gap: 1.5em;
  }
`;
const Heading = styled.h1`
  color: ${(props) => props.theme.palette.primary.main};
`;
function Bookmarked({ handleOpen }: { handleOpen: (state: boolean) => void }) {
  let { AddedRestaurants, handleBookmark } = useContext(RestaurantsDataContext);

  let disableDrawer = useWindowSize();
  return (
    <>
      <Wrapper>
        <Header>
          <Heading>Bookmarked</Heading>
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
        <RestaurantsView
          AddedRestaurants={AddedRestaurants}
          RestaurantPlaceholder={RestaurantPlaceholder}
          handleBookmark={handleBookmark}
          showBookmarked={true}
        ></RestaurantsView>
      </Wrapper>
    </>
  );
}

export default Bookmarked;
