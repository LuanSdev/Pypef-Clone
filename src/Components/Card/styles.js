import styled, { css } from 'styled-components';

export const Container = styled.li`
  position: relative;
  cursor: grab;

  margin-bottom: 10px;
  padding: 15px;

  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 4px 0 rgb(192, 208, 230, 0.8);
  border-top: 20px solid rgb(160, 198, 255, 50%);

  > header {
    position: absolute;
    top: -7px;
    left: 15px;
  }

  > p {
    font-weight: 500;
    line-height: 20px;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-top: 5px;
  }

  ${(props) =>
    props.isDragging &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.2);
      padding-top: 31px;
      border-radius: 0;
      background: transparent;
      box-shadow: 0 0 6px inset rgb(0, 0, 0, 0.1);

      cursor: grabbing;

      > p,
      span,
      img {
        opacity: 0;
      }
    `}
`;

export const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;

  background: ${(props) => props.color};

  display: inline-block;
`;
