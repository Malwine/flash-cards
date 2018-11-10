import React from 'react';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const SetPreview = (props) => {

	return (
		<div>
			{props.set ? (
				<Card>
					<CardContent>
						<Typography gutterBottom variant="headline" component="h2">
							{props.set.title}
						</Typography>
						<Typography component="p">
							{props.set.description}
						</Typography>
					</CardContent>
					<CardActions>
						<Link to={'/' + props.set.id}>
							<Button variant="contained"
								color="primary">
								Learn now!
							</Button>
						</Link>
					</CardActions>
				</Card>
			) : null}
		</div>
	)
}

export default SetPreview