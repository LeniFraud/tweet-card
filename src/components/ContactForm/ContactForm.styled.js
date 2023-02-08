import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  margin-bottom: 20px;
  padding: 12px 20px;
  background-color: #ececec;
  border-radius: 8px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  color: #212121;
  font-size: 20px;
  font-weight: 600;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    color: #457c78;
  }
`;

export const Input = styled.input`
  min-width: 280px;
  margin-left: 20px;
  padding: 8px 12px;
  outline: none;
  border-radius: 4px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    border: 2px solid #009688;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  height: 40px;
  width: 120px;
  background-color: #99ffdd;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    background-color: #42ffc0;
    transform: scale(1.05);
  }
`;
