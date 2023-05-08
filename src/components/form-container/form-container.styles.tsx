import styled from "styled-components";

export const FormContainer = styled.div `
  display: flex;
  background-color: #202020;
  padding: 67px 88px;
  flex-direction: column;
  align-items: center;
  position: relative;

  .top-right {
    &:before,
    &:after {
      z-index: -1;
      content: "";
      position: absolute;
      border: 8px solid #D0F83E;
      width: 80px;
      height: 80px;
    }

    &:before {
      top: -8px;
      left: -8px;
    }

    &:after {
      bottom: -8px;
      right: -8px;
    }
  }

  .top-left {
    &:before,
    &:after {
      z-index: -1;
      content: "";
      position: absolute;
      border: 8px solid #D0F83E;
      width: 80px;
      height: 80px;
    }

    &:before {
      bottom: -8px;
      left: -8px;
    }

    &:after {
      top: -8px;
      right: -8px;
    }
  }
  
`
