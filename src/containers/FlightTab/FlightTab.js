import { useState } from "react";
import styled from "styled-components";
import {
  Button,
  DestinationInputs,
  PassengersSelector,
  DatesSelector,
} from "../../components";
import { Links } from "./Links";

const FlightTab = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [outboundDate, setOutboundDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const onSearch = () => {
    console.table({ from, to, outboundDate, returnDate, passengers });
  };

  return (
    <Banner>
      <TabContainer>
        <DestinationInputs
          from={from}
          to={to}
          setFrom={setFrom}
          setTo={setTo}
        />

        <DatesSelector
          outboundDate={outboundDate}
          returnDate={returnDate}
          setOutboundDate={setOutboundDate}
          setReturnDate={setReturnDate}
        />

        <PassengersSelector
          passengers={passengers}
          setPassengers={setPassengers}
        />

        <Links />

        <SearchButton onClick={onSearch}>Search</SearchButton>
      </TabContainer>
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
  grid-row-gap: 17px;
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

const SearchButton = styled(Button)`
  grid-area: search;
`;

export { FlightTab };
