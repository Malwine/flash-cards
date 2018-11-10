import React from 'react';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'


const Set = (props) => {

	return (
		<div>
			{props.set ? (
				<Card>
					<CardContent>
						<Typography gutterBottom variant="headline" component="h2">
							{props.set.title}
						</Typography>
					</CardContent>
					<CardActions>
						<Button variant="contained"
							color="primary">
							Learn now!
            </Button>
					</CardActions>
				</Card>
			) : null}
		</div>
	)
}

export default Set