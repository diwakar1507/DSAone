import styled, { keyframes } from "styled-components";

export const ArrayHolder = styled.div`
  display: flex;
  height: 175px;
  align-items: center;
  padding: 15px;
  overflow: auto;
  column-gap: 0.25rem;
`;

export const ArrayItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eeeeee;
  width: 50px;
  height: 50px;
  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  flex-shrink: 0;
`;