import { useState } from "react";
import styled, { css } from "styled-components";
import { PassengerCounts } from "..";
import { useClickOutside } from "../../hooks";

const PASSENGER_SEATS = [
  {
    title: "Adults",
    description: "12+ years",
    counter: "adults",
  },
  {
    title: "Children",
    description: "2-11 years",
    counter: "children",
  },
  {
    title: "Infants",
    description: "0-1 years",
    counter: "infants",
  },
];

const PassengersSelector = ({ passengers, setPassengers }) => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  const dropdownRef = useClickOutside(() => setIsDropdownOpened(false));

  const toggleDropdown = () => {
    setIsDropdownOpened((opened) => !opened);
  };

  const { adults, children, infants } = passengers;
  const totalPassengers = +adults + +children + +infants;

  return (
    <PassengersSelectorContainer ref={dropdownRef}>
      <DropdownButton role="button" onClick={toggleDropdown}>
        <span>
          {+adults} Adult{adults > 1 && "s"}, {+children} Children, {+infants}{" "}
          Infant{infants > 1 && "s"}{" "}
        </span>
        {totalPassengers} Passenger{totalPassengers > 1 && "s"}
        <DropdownArrow isDropdownOpened={isDropdownOpened} />
      </DropdownButton>

      <Dropdown visible={isDropdownOpened}>
        {PASSENGER_SEATS.map(({ title, description, counter }) => (
          <PassengerCounts
            key={title}
            title={title}
            description={description}
            counter={passengers[counter]}
            setCounter={(value) =>
              setPassengers((passengers) => ({
                ...passengers,
                [counter]: value,
              }))
            }
          />
        ))}

        <CloseButton onClick={() => setIsDropdownOpened(false)}>
          Close
        </CloseButton>
      </Dropdown>
    </PassengersSelectorContainer>
  );
};

const PassengersSelectorContainer = styled.div`
  position: relative;
  grid-area: passengers;
`;

const DropdownButton = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.placeholder};
  font-size: 18px;
  cursor: pointer;
  padding: 23px 12px 6px 25px;

  span {
    position: absolute;
    left: 25px;
    top: 8px;
    color: ${({ theme }) => theme.colors.main};
    font-size: 12px;
    opacity: 0.9;
  }
`;

const DropdownArrow = styled.div`
  position: absolute;
  right: 13px;
  top: 50%;
  content: "";
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  transition: all 0.1s ease;

  ${({ isDropdownOpened }) =>
    isDropdownOpened &&
    css`
      border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
      border-top: none;
    `}
`;

const Dropdown = styled.div`
  position: absolute;
  z-index: 10;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  background: ${({ theme }) => theme.colors.white};

  ${({ visible }) =>
    visible &&
    css`
      max-height: 900px;
      opacity: 1;
      visibility: visible;
    `};
`;

const CloseButton = styled.button`
  width: 100%;
  padding: 10px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.placeholder};
  margin-top: -1px;
  height: 62px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export { PassengersSelector };
