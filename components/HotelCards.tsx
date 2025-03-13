import { CardActionArea, CardMedia, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

interface HotelCardsProps {
	id: number
	name: string
	image: string
}

export default function HotelCards({ id, name, image }: HotelCardsProps) {
	return (
		<Card sx={{ maxWidth: 345 }} key={id}>
			<CardActionArea href={`hotels/${id}`}>
				<CardMedia sx={{ height: 140 }} image={image} title={name} />
				<CardContent>
					<Typography gutterBottom component="div" sx={{ 
            flexGrow: 1, 
            display: 'flex',
          }}>
						{name}
					</Typography>
          
				</CardContent>
			</CardActionArea>
		</Card>
	)
}
