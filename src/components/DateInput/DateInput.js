import styled from "styled-components";
import { CommonInput } from "..";

const DateInput = ({ id, value, setValue, label, disabled }) => {
  const onChange = ({ target: { value } }) => setValue(value);

  return (
    <DateInputWrapper>
      <CommonInput
        id={id}
        value={value}
        label={label}
        onChange={onChange}
        disabled={disabled}
        type="date"
        isPopulated
      />
    </DateInputWrapper>
  );
};

const DateInputWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.placeholder};

  input[type="date"] {
    padding-right: 25px;
  }
`;

export { DateInput };
