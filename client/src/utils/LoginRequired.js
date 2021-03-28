import React from 'react';
import styled from 'styled-components';

const LoginRequiredBlock = styled.div`
background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: red;
  height: 15vh;
`;

const LoginRequired = () => {
    return (
        <LoginRequiredBlock>
            
        </LoginRequiredBlock>
    );
};

export default LoginRequired;