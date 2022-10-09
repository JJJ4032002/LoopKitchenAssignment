import React from "react";
import styled from "styled-components/macro";
import { Button } from "@mui/material";
interface addedRestaurantsDataType {
  Id: string;
  Name: string;
  Bookmarked: boolean;
}
const Frame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5em;
`;
const BlockHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
function Map({
  element,
  handleBookmark,
  handleDelete,
}: {
  element: addedRestaurantsDataType;
  handleBookmark: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <Block key={element.Id}>
      <Frame
        src={`https://datastudio.google.com/embed/u/0/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params=%7B%22ds2.name2%22:%22${element.Name}%22%7D`}
      ></Frame>
      <BlockHeader>
        <h2>{element.Name}</h2>
        <ButtonWrapper>
          <Button
            variant="contained"
            data-unique={`${element.Id}`}
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Button
            onClick={handleBookmark}
            data-unique={`${element.Id}`}
            variant="contained"
          >
            {element.Bookmarked ? "UnBookmark" : "Bookmark"}
          </Button>
        </ButtonWrapper>
      </BlockHeader>
    </Block>
  );
}

export default Map;
