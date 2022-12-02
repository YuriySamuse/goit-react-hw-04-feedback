import styled from '@emotion/styled';

export const Button = styled.button`
  cursor: pointer;
  font-weight: 500;
  /* font-size: 12px; */
  line-height: calc(16 / 12);
  width: 152px;
  height: 44px;
  color: black;
  background-color: white;
  border: 4px solid gray;
  border-radius: 20px;
  &:hover,
  &:focus {
    /* background-color: tomato; */
    border-color: green;
  }
  &:active {
    background-color: gainsboro;
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 15px;
  padding: 0;
`;
