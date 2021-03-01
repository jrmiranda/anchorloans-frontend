import styled, { keyframes } from 'styled-components'

const theme = {
	color: '#000000a0',
	size: 14,
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
	display: ${props => props.display ? 'inline-block' : 'none'};
	margin: 5px;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: ${props => props.thickness || theme.thickness}px solid transparent;
  border-right: ${props => props.thickness || theme.thickness}px solid ${props => props.color || theme.color};
  border-bottom: ${props => props.thickness || theme.thickness}px solid ${props => props.color || theme.color};
  border-left: ${props => props.thickness || theme.thickness}px solid ${props => props.color || theme.color};
  background: transparent;
  width: ${props => props.size || theme.size}px;
  height: ${props => props.size || theme.size}px;
  border-radius: 50%;
`;

export default Loading;