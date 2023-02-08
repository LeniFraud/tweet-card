import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;

  &:nth-child(even) {
    background-color: #fff;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 20px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  height: 40px;
  margin-left: 40px;
  background-color: #ffcab8;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    background-color: #ff9c7a;
    transform: scale(1.05);
  }
`;
