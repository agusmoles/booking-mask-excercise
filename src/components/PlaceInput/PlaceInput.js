import styled, { css } from "styled-components";

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
  const onChange = ({ target: { value } }) => setValue(value);

  return (
    <InputWrapper isPopulated={value !== ""}>
      <label htmlFor={id}>{label}</label>
      <input
        list="places"
        name={id}
        id={id}
        value={value}
        onChange={onChange}
      />

      <datalist id="places">
        {PLACES.map(({ place, code }) => (
          <option value={`${place} (${code})`} />
        ))}
      </datalist>
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
    color: #666;
    transition: all 0.1s ease;

    ${({ isPopulated }) =>
      isPopulated &&
      css`
        top: 8px;
        font-size: 12px;
        opacity: 0.9;
      `}
  }

  datalist {
    option {
      padding: 20px 0;
      background: ${({ theme }) => theme.colors.primary};
      &:hover {
        background: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
