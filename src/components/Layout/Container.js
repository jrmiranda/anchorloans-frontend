import styled from 'styled-components'

const sizes = {
	default: 940,
	compact: 720
}

const Container = styled.div`
	width: 100%;
	max-width: ${props => props.size ? sizes[props.size] : sizes.default}px;
	margin: 0 auto;
	padding: 10px;
	border: 0px solid blue;
`

export default Container