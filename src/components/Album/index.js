import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Button from 'components/Button'

const Album = ({ photos, mode, onAprove, onDecline }) => {
	return (
		<Wrapper>
			{photos.map(photo => (
				<Photo mode={mode} key={photo._id}>
					<div>
						<NavLink to={`/photo/${photo._id}`}>
							<Thumb src={photo.url} />
						</NavLink>
						{mode === 'admin' && (
							<Button.Group justify="flex-end">
								<Button size="tiny" color="green" onClick={e => onAprove(photo)}>Aprove</Button>
								<Button size="tiny" color="red" onClick={e => onDecline(photo)}>Decline</Button>
							</Button.Group>
						)}
					</div>
				</Photo>
			))}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: grid;
	grid-gap: 2px;
	grid-template-columns: repeat(3, 1fr);
`

const Photo = styled.div`
	display: block;
	margin: 10px;
	background: ${props => props.mode === 'admin' ? 'white' : 'transparent'};
	border: 0px solid ${props => props.mode === 'admin' ? '#ddd' : 'transparent'};

	&:hover {
		box-shadow: 0 0 15px 5px #00000020;
	}
`

const Thumb = styled.img`
	display: block;
	object-fit: cover;
	width: 100%;
	height: 100%;
`

export default Album