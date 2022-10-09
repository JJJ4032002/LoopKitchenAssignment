import React from "react";
import styled from "styled-components/macro";
import { devices } from "../../Media Queries/Queries";
import Map from "./Map";
interface addedRestaurantsDataType {
  Id: string;
  Name: string;
  Bookmarked: boolean;
}
const RestaurantWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));
  grid-auto-rows: 18rem;
  width: 100%;
  grid-gap: 3em 3em;
`;
const Image = styled.img`
  width: 100%;
  @media ${devices.tablet} {
    width: 50%;
  }
`;
const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Heading = styled.h1`
  color: ${(props) => props.theme.palette.primary.main};
`;

function RestaurantsView({
  AddedRestaurants,
  RestaurantPlaceholder,
  handleBookmark,
  showBookmarked,
}: {
  AddedRestaurants: addedRestaurantsDataType[] | null;
  RestaurantPlaceholder: string;
  handleBookmark: (event: React.MouseEvent<HTMLButtonElement>) => void;
  showBookmarked: boolean;
}) {
  let BookmarkedArray = AddedRestaurants?.filter((element) => {
    return element.Bookmarked === true;
  });
  return (
    <RestaurantWrapper>
      {AddedRestaurants === null ? (
        <Placeholder>
          <Image src={RestaurantPlaceholder} alt="" />
          <Heading>No Restaurants added yet!</Heading>
        </Placeholder>
      ) : (
        <Grid>
          {!showBookmarked ? (
            AddedRestaurants.map((element) => {
              return (
                <Map
                  key={element.Id}
                  element={element}
                  handleBookmark={handleBookmark}
                ></Map>
              );
            })
          ) : BookmarkedArray !== undefined ? (
            BookmarkedArray.length > 0 ? (
              BookmarkedArray.map((element) => {
                return (
                  <Map
                    key={element.Id}
                    element={element}
                    handleBookmark={handleBookmark}
                  ></Map>
                );
              })
            ) : (
              <Placeholder>
                <Image src={RestaurantPlaceholder} alt="" />
                <Heading>No Restaurants added yet!</Heading>
              </Placeholder>
            )
          ) : (
            <Placeholder>
              <Image src={RestaurantPlaceholder} alt="" />
              <Heading>No Restaurants added yet!</Heading>
            </Placeholder>
          )}
        </Grid>
      )}
    </RestaurantWrapper>
  );
}

export default RestaurantsView;
