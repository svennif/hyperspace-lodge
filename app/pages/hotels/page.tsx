'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/initSupabase'
import { Tables } from '@/lib/supabase.types'

type Hotels = Tables<'hotels'>

export default function Hotels() {
	const [hotels, setHotels] = useState<Hotels[]>([])

	useEffect(() => {
		const fetchHotels = async () => {
			console.log('Fetching hotels...')
			const { data: hotels, error } = await supabase.from('hotels').select('*')

			if (error) {
				console.error('Error fetching hotels:', error)
			} else {
				console.log('Fetched hotels:', hotels)
				setHotels(hotels || [])
			}
		}
		fetchHotels()
	}, [])

	useEffect(() => {
		console.log('Hotels state:', hotels)
	}, [hotels])

	return (
		<div>
			<main>
				<ul>
					{hotels.map((hotel) => (
						<li key={hotel.id}>{hotel.name}</li>
					))}
				</ul>
			</main>
		</div>
	)
}
