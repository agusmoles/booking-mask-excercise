import styled from "styled-components";

export const Button = styled.button`
  padding: 12px 40px;
  outline: 0;
  font-size: 20px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.8s ease;
  text-align: center;
  border: 0;

  &:hover {
    background: #ad0000;
  }
`;
