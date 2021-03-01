import styled, { keyframes } from 'styled-components'

const theme = {
	color: '#000000a0',
	size: 24,
	thickness: 3
}

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
	display: block;
	margin: 20px auto;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: ${theme.thickness}px solid transparent;
  border-right: ${theme.thickness}px solid ${theme.color};
  border-bottom: ${theme.thickness}px solid ${theme.color};
  border-left: ${theme.thickness}px solid ${theme.color};
  background: transparent;
  width: ${theme.size}px;
  height: ${theme.size}px;
  border-radius: 50%;
`;

export default Loading;