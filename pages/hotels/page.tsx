'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/initSupabase'
import { Tables } from '@/lib/supabase.types'
import Link from 'next/link'

type Hotels = Tables<'hotels'>

export default function Hotels() {
	const [hotels, setHotels] = useState<Hotels[]>([]);

	useEffect(() => {
		const fetchHotels = async () => {
			const { data: hotels, error } = await supabase.from('hotels').select('*')

			if (error) {
				console.error('Error fetching hotels:', error);
			} else {
				setHotels(hotels || [])
			}
		}
		fetchHotels();
	}, []);

	useEffect(() => {
	}, [hotels])

	return (
		<div>
			<main>
        <div className='sven'>
        {hotels.map((hotel) => (
            <Link key={hotel.id} href={`/hotels/${hotel.id}`}>{hotel.name}</Link>
        ))}
        </div>
			</main>
		</div>
	)
}
