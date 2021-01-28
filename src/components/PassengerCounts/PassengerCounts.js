import styled from "styled-components";

const PassengerCounts = ({ title, description, counter, setCounter }) => {
  const onChange = ({ target: { value } }) => {
    if (isNaN(value)) return;

    setCounter(value);
  };

  const decrementCounter = () => counter - 1 >= 0 && setCounter(counter - 1);

  const incrementCounter = () => setCounter(counter + 1);

  return (
    <PassengerSeats>
      <PassengerDescription>
        {title}
        <span>{description}</span>
      </PassengerDescription>

      <Counter>
        <CounterButton onClick={decrementCounter}>-</CounterButton>
        <input
          aria-label={`${title} passengers`}
          type="text"
          inputMode="decimal"
          value={counter}
          onChange={onChange}
        />
        <CounterButton onClick={incrementCounter}>+</CounterButton>
      </Counter>
    </PassengerSeats>
  );
};

const PassengerSeats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  padding-left: 25px;
  border: 1px solid ${({ theme }) => theme.colors.placeholder};
  margin-top: -1px;
`;

const PassengerDescription = styled.div`
  font-size: 1.25rem;
  line-height: 1.2;

  span {
    font-size: 0.875rem;
    display: block;
    opacity: 0.6;
  }
`;

const Counter = styled.div`
  display: flex;
  height: 36px;

  input {
    width: 28px;
    margin: 0 -1px;
    border: 1px solid ${({ theme }) => theme.colors.placeholder};
    text-align: center;
    font-size: 20px;
    font-weight: 200;
  }
`;

const CounterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 200;
  height: 100%;
  width: 30px;
  background-color: #f2f2f2;
  border: 1px solid ${({ theme }) => theme.colors.placeholder};
  padding: 0;
  cursor: pointer;
  outline: 0;
`;

export { PassengerCounts };
