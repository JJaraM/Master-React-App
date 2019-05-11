import { css } from 'styled-components';

const buttonStyles = css`
  background: transparent;
  border: none;
  color: var(--card-hyperlink);
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  padding-left: 0.2rem;
  outline: none;
  box-shadow: none !important;

  &:focus {
    border: none;
    outline: none;
    box-shadow: none !important;
  }
  &:active {
    outline: none;
    box-shadow: none !important;
    border: none;
  }
`;

export default buttonStyles;
