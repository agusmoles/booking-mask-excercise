import styled, { css, keyframes } from "styled-components";

const FlightSwitch = ({ isOneWay, setIsOneWay }) => {
  const onClick = () => setIsOneWay(!isOneWay);

  return (
    <Switch role="button" isOneWay={isOneWay} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 493 493">
        <path d="M490.498 239.278l-109.632-99.929c-3.046-2.474-6.376-2.95-9.993-1.427-3.613 1.525-5.427 4.283-5.427 8.282v63.954H9.136c-2.666 0-4.856.855-6.567 2.568C.859 214.438 0 216.628 0 219.292v54.816c0 2.663.855 4.853 2.568 6.563 1.715 1.712 3.905 2.567 6.567 2.567h356.313v63.953c0 3.812 1.817 6.57 5.428 8.278 3.62 1.529 6.95.951 9.996-1.708l109.632-101.077c1.903-1.902 2.852-4.182 2.852-6.849 0-2.468-.955-4.654-2.858-6.557z" />
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
        <path d="M606.521 291.429l-113.23-113.555c-7.495-7.515-19.656-7.515-27.15 0-7.495 7.514-7.189 20.42-7.189 32.828v57.361H153.027v-57.361c0-12.408.306-25.314-7.189-32.828-7.495-7.515-19.656-7.515-27.151 0L5.457 291.429c-3.996 4.015-5.698 9.331-5.43 14.57-.268 5.258 1.434 10.573 5.43 14.589l113.249 113.555c7.495 7.515 19.656 7.515 27.151 0 7.495-7.514 7.189-24.722 7.189-32.236v-57.361H458.97v57.361c0 12.408-.307 24.722 7.188 32.236s19.656 7.515 27.151 0L606.56 320.587c3.996-4.015 5.697-9.331 5.43-14.589.228-5.239-1.472-10.555-5.469-14.569z" />
      </svg>
    </Switch>
  );
};

const OneWay = keyframes`
    0% {
        left: 52%;
        width: 50%;
    }
    50% {
        left: 0;
        width: 100%;
    }
    100% {
        left: 0;
        width: 50%;
    }
`;

const BothWays = keyframes`
    0% {
        left: 0;
        width: 50%;
    }
    50% {
        left: 0;
        width: 100%;
    }
    100% {
        left: 49%;
        width: 51%;
    }
`;

const Switch = styled.div`
  position: absolute;
  z-index: 10;
  width: 42px;
  height: 28px;
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.white};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid ${({ theme }) => theme.colors.placeholder};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  overflow: hidden;

  svg {
    width: 11px;
    z-index: 11;

    ${({ isOneWay }) =>
      isOneWay
        ? css`
            &:first-child {
              fill: #fff;
            }
          `
        : css`
            &:last-child {
              fill: #fff;
            }
          `}
  }

  &:before {
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    left: calc(50% - 1px);
    border-left: 1px dotted ${({ theme }) => theme.colors.placeholder};
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary};
    width: 50%;

    ${({ isOneWay }) =>
      isOneWay
        ? css`
            left: 0;
            animation: ${OneWay} 0.7s ease forwards;
          `
        : css`
            left: 52%;
            animation: ${BothWays} 0.7s ease forwards;
          `}
  }
`;

export { FlightSwitch };
