import styled from "styled-components";
import { DateInput, FlightSwitch } from "..";

const DatesSelector = ({
  outboundDate,
  setOutboundDate,
  returnDate,
  setReturnDate,
  isOneWay,
  setIsOneWay,
}) => {
  return (
    <DatesSelectorContainer>
      <DateInput
        id="outbound-date"
        value={outboundDate}
        label={isOneWay ? "One-way" : "Outbound flight"}
        setValue={setOutboundDate}
      />

      <FlightSwitch isOneWay={isOneWay} setIsOneWay={setIsOneWay} />

      <DateInput
        id="return-date"
        value={returnDate}
        label="Return flight"
        setValue={setReturnDate}
        disabled={isOneWay}
      />
    </DatesSelectorContainer>
  );
};

const DatesSelectorContainer = styled.div`
  position: relative;
  display: flex;
  grid-area: flight-time;

  & > div {
    &:first-child {
      border-right-style: dotted;
    }
    &:last-child {
      border-left-style: dotted;
      margin-left: -1px;
    }
  }
`;

export { DatesSelector };
