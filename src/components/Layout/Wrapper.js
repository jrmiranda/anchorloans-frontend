import styled from 'styled-components'

const Wrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;

  & > * {
    flex-shrink: 0;
  }

  & > main {
    flex-grow: 1;
  }
`

export default Wrapper