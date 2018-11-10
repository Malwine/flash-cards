import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<NavLink to='/' style={{color: 'inherit', textDecoration: 'none'}}>
						<Typography variant="title" color="inherit">
							Flash Cards App
						</Typography>
					</NavLink>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default NavBar;