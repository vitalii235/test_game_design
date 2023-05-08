import styled from "styled-components";

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .name-block {
    display: flex;
    flex-direction: row;
    & > *:first-child {
      margin-right: 16px;
    }
  }
  > div > div:not(.name-block) > *:first-child {
    margin-top: 16px; 
  }
  
  .submit-button {
    margin-top: 40px;
  }
`
