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
`;
const Heading = styled.h1`
  color: ${(props) => props.theme.palette.primary.main};
`;

const Frame = styled.iframe`
  width: 50%;
`;
const Block = styled.div``;
const BlockHeader = styled.div`
  display: flex;
  justify-content: space-between;
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
};
