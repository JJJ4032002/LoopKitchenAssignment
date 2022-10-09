import styled from "styled-components/macro";
import { devices } from "../../Media Queries/Queries";

const Image = styled.img`
  width: 100%;
  @media ${devices.tablet} {
    width: 50%;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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
const SearchBarWrapper = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  gap: 1em;
  align-items: center;
`;
const RestaurantWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
`;
const Heading = styled.h1`
  color: ${(props) => props.theme.palette.primary.main};
`;

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
const BlockHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));
  grid-auto-rows: 18rem;
  width: 100%;
  grid-gap: 3em 3em;
`;
export {
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
  Grid,
};
