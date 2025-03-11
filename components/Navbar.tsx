'use client'

import { useState, MouseEvent } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Link from '@mui/material/Link'
import Image from 'next/image'
import ModeSwitch from './ModeSwitch'
import { green } from '@mui/material/colors'

const pages = [
	{
		id: 1,
		name: 'Hotels',
		url: '/hotels',
	},
]

export default function Navbar() {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

	const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{ display: { xs: 'block', md: 'none' } }}>
							{pages.map((page) => (
								<MenuItem component={Link} href={page.url} key={page.id} onClick={handleCloseNavMenu}>
									<Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Link
						href="/"
						underline="none"
						sx={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							gap: 1,
							textDecoration: 'none',
							color: '#fff',
							marginRight: 3,
						}}>
						<Image width="70" height="70" src="/images/logo.webp" alt="Hyperspace Lodge logo" />
						<Typography variant="h6">Hyperspace Lodge</Typography>
					</Link>
					<Box sx={{ height: '70px', alignItems: 'center', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<Button href={page.url} size="medium" key={page.name} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'flex', '&:hover': { bgcolor: green[600] } }}>
								{page.name}
							</Button>
						))}
					</Box>
					<ModeSwitch />
				</Toolbar>
			</Container>
		</AppBar>
	)
}
