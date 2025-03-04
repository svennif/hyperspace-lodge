'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/utilities/initSupabase'
import { Tables } from '@/utilities/supabase.types'
import Link from 'next/link'
import { Box, Container } from '@mui/material'

type Hotels = Tables<'hotels'>

export default function Hotels() {
	const [hotels, setHotels] = useState<Hotels[]>([])

	useEffect(() => {
		const fetchHotels = async () => {
			const { data: hotels, error } = await supabase.from('hotels').select('*')

			if (error) {
				console.error('Error fetching hotels:', error)
			} else {
				setHotels(hotels || [])
			}
		}
		fetchHotels()
	}, [])

	useEffect(() => {}, [hotels])

	return (
		<Container>
			<Box>
				{hotels.map((hotel) => (
					<Link key={hotel.id} href={`/hotels/${hotel.id}`}>
						{hotel.name}
					</Link>
				))}
			</Box>
		</Container>
	)
}
