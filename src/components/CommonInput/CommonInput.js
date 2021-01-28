import styled, { css } from "styled-components";

const CommonInput = ({
  id,
  label,
  value,
  onChange,
  onFocus,
  onKeyDown,
  type,
  role,
  disabled,
  isPopulated,
}) => {
  return (
    <>
      <Label htmlFor={id} isPopulated={isPopulated}>
        {label}
      </Label>
      <Input
        type={type}
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        disabled={disabled}
        role={role}
        autoComplete="off"
        isPopulated={isPopulated}
      />
    </>
  );
};

const Label = styled.label`
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
`;

const Input = styled.input`
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

  ${({ isPopulated }) =>
    isPopulated &&
    css`
      padding: 23px 12px 6px 25px;
    `}
`;

export { CommonInput };
