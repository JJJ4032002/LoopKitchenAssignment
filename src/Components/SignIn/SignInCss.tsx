import styled from "styled-components/macro";
import { devices } from "../../Media Queries/Queries";
let Image = styled.img`
  width: 100%;
  display: block;
  transition: filter 200ms ease-in;
  &:hover {
    cursor: pointer;
    -webkit-filter: drop-shadow(
      4px 4px 7px ${(props) => props.theme.palette.primary.main}
    );
    filter: drop-shadow(
      4px 4px 7px ${(props) => props.theme.palette.primary.main}
    );
  }
`;
let Wrapper = styled.div`
  display: flex;
  gap: 2em;
  width: 90%;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  @media ${devices.laptop} {
    gap: 0em;
  }
`;
const Nav = styled.div`
  padding: 0.5em 0em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${devices.laptop} {
    padding: 1.5em 0em;
  }
`;
let FlexContainer = styled.div`
  display: flex;
  flex-flow: column-reverse;
  align-items: center;
  justify-content: start;
  gap: 2em;
  flex: 0 1 0;
  @media ${devices.laptop} {
    flex: 1 1 0;
    gap: 4em;
    flex-flow: row;
  }
`;
let FlexItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 0;
  gap: 0.5em;
  &.Content {
    text-align: start;
    padding: 0em 0em;
  }
  @media ${devices.laptop} {
    justify-content: center;
    gap: 1em;
    width: 50%;
    &.Content {
      flex: 1 1 0;
      text-align: start;
      padding: 2em 0em;
    }
  }
`;
let Heading = styled.h1`
  justify-self: flex-start;
  &.Primary {
    color: ${(props) => props.theme.palette.primary.main};
    font-size: 2rem;
  }
  @media ${devices.laptop} {
    &.Primary {
      font-size: 2.5rem;
    }
  }
`;
let Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

let Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2em;
`;

export {
  FlexContainer,
  FlexItems,
  Wrapper,
  Form,
  Content,
  Heading,
  Nav,
  Image,
};
