import styled from "styled-components/macro";
import { devices } from "../../Media Queries/Queries";

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
const SearchBarWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1em;
  align-items: center;
`;

const Heading = styled.h1`
  color: ${(props) => props.theme.palette.primary.main};
`;

export { Heading, Header, SearchBarWrapper, Wrapper };
