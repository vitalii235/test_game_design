import styled from "styled-components";

export const Footer = styled.footer`
  height: 100%;
  min-height: 115px;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  padding: 0 16px;
  position: relative;
  
  .app-logo {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
  }
`
