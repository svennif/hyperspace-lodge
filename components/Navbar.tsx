import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
	return (
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: '1fr 1fr',
				gridTemplateAreas: '"nav-logo nav-menu"',
				alignItems: 'center',
			}}>
			<Box
				sx={{
					display: 'flex',
					gridArea: 'nav-logo',
				}}>
				<Image width={80} height={80} src="/images/logo2.webp" alt="HyperSpace Lodge Logo" />
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'flex-end',
					gridArea: 'nav-menu',
				}}>
				<Button sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 2,
          color: '#ffffff'
        }}>
          <Typography>Menu</Typography>
          <MenuIcon />
        </Button>
			</Box>
		</Box>
	)
}
