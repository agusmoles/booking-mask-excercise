import styled from "styled-components";

const FlightTab = () => {
  return (
    <Banner>
      <TabContainer></TabContainer>
    </Banner>
  );
};

const TabContainer = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100%;
  max-width: 1260px;
  max-height: 160px;
  border: 1px solid ${({ theme }) => theme.colors.placeholder}55;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 5px;
  grid-template-areas:
    "destination flight-time passengers"
    "links links search";
`;

const Banner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  height: 350px;
  width: 100%;
  margin-top: 10vh;
`;

export { FlightTab };
