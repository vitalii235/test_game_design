import styled from "styled-components";

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  .name-block {
    display: flex;
    flex-direction: row;
    & > *:first-child {
      margin-right: 16px;
    }
  }
  *:first-child {
    margin-top: 16px; 
  }
  
  .submit-button {
    margin-top: 40px;
  }
`
