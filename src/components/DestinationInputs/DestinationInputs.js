import styled from "styled-components";
import { Plane } from "../Icons";
import { PlaceInput } from "../";

const DestinationContainer = styled.div`
  position: relative;
  grid-area: destination;
  display: flex;

  div {
    &:first-child {
      border-right-style: dotted;
    }
    &:last-child {
      border-left-style: dotted;
      margin-left: -1px;
    }
  }
`;

const PlaneThumbnail = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 23px;
  height: 23px;
  fill: ${({ theme }) => theme.colors.placeholder};
  background: ${({ theme }) => theme.colors.white};
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 15px;
    height: 15px;
  }
`;

const DestinationInputs = ({ from, to, setFrom, setTo }) => {
  return (
    <DestinationContainer>
      <PlaceInput id="from" label="From" value={from} setValue={setFrom} />

      <PlaneThumbnail>
        <Plane />
      </PlaneThumbnail>

      <PlaceInput id="to" label="To" value={to} setValue={setTo} />
    </DestinationContainer>
  );
};

export { DestinationInputs };
