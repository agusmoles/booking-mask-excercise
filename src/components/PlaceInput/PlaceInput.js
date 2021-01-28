import { useState } from "react";
import styled, { css } from "styled-components";
import { useClickOutside } from "../../hooks";

const PLACES = [
  {
    place: "Buenos Aires",
    code: "BUE",
  },
  {
    place: "New York",
    code: "NYC",
  },
  {
    place: "New Orleans",
    code: "MSY",
  },
  {
    place: "Auckland",
    code: "AKL",
  },
  {
    place: "Cordoba",
    code: "COR",
  },
];

export const PlaceInput = ({ id, label, value, setValue }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [filteredPlaces, setFilteredPlaces] = useState(PLACES);
  const [placesCursor, setPlacesCursor] = useState(1);
  const wrapperRef = useClickOutside(() => setIsFocused(false));

  const onChange = ({ target: { value } }) => {
    if (value === "") setFilteredPlaces(PLACES);
    else
      setFilteredPlaces(PLACES.filter(({ place }) => place.startsWith(value)));

    setValue(value);
  };

  const onFocus = () => setIsFocused(true);

  const onKeyDown = ({ keyCode }) => {
    setIsFocused(true);
    if (keyCode === 40) {
      // arrow down
      if (placesCursor + 1 >= filteredPlaces.length) setPlacesCursor(0);
      else setPlacesCursor((cursor) => cursor + 1);
    } else if (keyCode === 38) {
      // arrow up
      if (placesCursor - 1 < 0) setPlacesCursor(filteredPlaces.length - 1);
      else setPlacesCursor((cursor) => cursor - 1);
    } else if (keyCode === 13) {
      // enter
      const { place, code } = filteredPlaces[placesCursor];

      setValue(`${place} (${code})`);
      setIsFocused(false);
    }
  };

  const onOptionClick = ({ place, code }, index) => {
    setIsFocused(false);
    setValue(`${place} (${code})`);
    setPlacesCursor(index);
  };

  return (
    <InputWrapper ref={wrapperRef} isPopulated={value !== ""}>
      <label htmlFor={id}>{label}</label>
      <input
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        role="listbox"
        autoComplete="off"
      />

      <Datalist isFocused={isFocused}>
        {filteredPlaces.map(({ place, code }, index) => (
          <Option
            key={code}
            selected={placesCursor === index}
            onClick={() => onOptionClick({ place, code }, index)}
          >
            {place} <span>{code}</span>
          </Option>
        ))}
      </Datalist>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.placeholder};

  input {
    width: 100%;
    height: 100%;
    margin: 0;
    border: 0;
    font-size: 18px;
    padding: 0 12px 0 25px;
    transition: all 0.1s ease;

    &:focus {
      border-radius: 0;
      border: 1px solid ${({ theme }) => theme.colors.black};
    }

    &::-webkit-calendar-picker-indicator {
      display: none;
    }

    ${({ isPopulated }) =>
      isPopulated &&
      css`
        padding: 23px 12px 6px 25px;
      `}
  }

  label {
    position: absolute;
    left: 25px;
    top: calc(50% - 0.7em);
    font-size: 18px;
    color: ${({ theme }) => theme.colors.main};
    transition: all 0.1s ease;

    ${({ isPopulated }) =>
      isPopulated &&
      css`
        top: 8px;
        font-size: 12px;
        opacity: 0.9;
      `}
  }
`;

const Datalist = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 10;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 3px 2px ${({ theme }) => theme.colors.placeholder};
  border: 1px solid ${({ theme }) => theme.colors.placeholder};

  ${({ isFocused }) =>
    isFocused
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}

  &:empty {
    display: none;
  }
`;

const Option = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.main};
  background: ${({ theme }) => theme.colors.white};
  padding: 13px 10px;
  margin: 3px 0;
  font-size: 16px;
  cursor: pointer;

  span {
    background: ${({ theme }) => theme.colors.main};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.white};
    padding: 0 6px;
    font-size: 14px;
    font-weight: 500;
    margin-left: 3px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  ${({ selected }) =>
    selected &&
    css`
       {
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
      }
    `}
`;
