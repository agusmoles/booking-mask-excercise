import styled from "styled-components";

const TabContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 15px;
`;

export const FlightTab = () => {
  return <TabContainer></TabContainer>;
};
