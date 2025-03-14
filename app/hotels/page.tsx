'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/utilities/initSupabase'
import { Tables } from '@/utilities/supabase.types'
import Grid from '@mui/material/Grid2'
import Container from '@mui/material/Container'
import HotelCards from '@/components/HotelCards'

type Hotels = Tables<'hotels'>

export default function Hotels() {
	const [hotels, setHotels] = useState<Hotels[]>([])
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		const fetchHotels = async () => {
			const { data: hotels, error } = await supabase.from('hotels').select('*')

			if (error) {
				console.error('Error fetching hotels:', error)
			} else {
				setHotels(hotels)
			}
			setLoading(false)
		}
		fetchHotels()
	}, [])

	if (loading) {
    // To be updated with: https://mui.com/material-ui/react-skeleton/
		return <div>Loading...</div>
	}

	return (
		<Container>
			<Grid
				container
				spacing={2}
				sx={{
					justifyContent: 'center',
				}}>
				{hotels.map((hotel) => (
					<Grid key={hotel.id} size={3}>
						<HotelCards id={hotel.id} name={hotel.name} image={hotel.image || 'default-image.jpg'} />
					</Grid>
				))}
			</Grid>
		</Container>
	)
}
