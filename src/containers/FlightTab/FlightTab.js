import { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {
  Button,
  DestinationInputs,
  PassengersSelector,
  DatesSelector,
} from "../../components";
import { Links } from "./Links";
import { findPlaceByCode } from "../../utils";

const getInitialState = ({
  adults,
  children,
  departureDate,
  flightType,
  infants,
  originAndDestination,
}) => {
  const [origin, destination] = originAndDestination
    ? originAndDestination.split("-")
    : [];

  return {
    from: origin ? findPlaceByCode(origin) : "",
    to: destination ? findPlaceByCode(destination) : "",
    outboundDate: departureDate ? departureDate.split("from-")[1] : "",
    adults: adults ? adults.split("adults-")[1] : 1,
    children: children ? children.split("children-")[1] : 0,
    infants: infants ? infants.split("infants-")[1] : 0,
    isOneWay: flightType === "Outbound",
  };
};

const FlightTab = () => {
  const params = useParams();
  const initialState = getInitialState(params);

  const [from, setFrom] = useState(initialState.from);
  const [to, setTo] = useState(initialState.to);
  const [outboundDate, setOutboundDate] = useState(initialState.outboundDate);
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState({
    adults: initialState.adults,
    children: initialState.children,
    infants: initialState.infants,
  });
  const [isOneWay, setIsOneWay] = useState(initialState.isOneWay);

  const onSearch = () => {
    console.table({
      from,
      to,
      outboundDate,
      returnDate: isOneWay ? null : returnDate,
      passengers,
    });
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
          isOneWay={isOneWay}
          setOutboundDate={setOutboundDate}
          setReturnDate={setReturnDate}
          setIsOneWay={setIsOneWay}
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
  max-width: 1260px;
  border: 1px solid ${({ theme }) => theme.colors.placeholder}55;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 5px;
  grid-row-gap: 17px;
  grid-template-areas:
    "destination flight-time passengers"
    "links links search";

  @media (max-width: ${({ theme }) => theme.mediaQueries.desktopSm}) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "destination flight-time"
      "passengers search"
      "links links";
    grid-row-gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.mediaQueries.tablet}) {
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: 100%;
    grid-template-areas:
      "destination"
      "flight-time"
      "passengers"
      "search"
      "links";
    grid-row-gap: 12px;
  }
`;

const Banner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  height: 540px;
  width: 100%;
  margin-top: 10vh;
`;

const SearchButton = styled(Button)`
  grid-area: search;
`;

export { FlightTab };
