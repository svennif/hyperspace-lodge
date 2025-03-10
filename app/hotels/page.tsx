'use client'

import { useEffect, useState } from 'react';
import { supabase } from '@/utilities/initSupabase';
import { Tables } from '@/utilities/supabase.types';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

type Hotels = Tables<'hotels'>

export default function Hotels() {
	const [hotels, setHotels] = useState<Hotels[]>([])

	useEffect(() => {
		const fetchHotels = async () => {
			const { data: hotels, error } = await supabase.from('hotels').select('*');

			if (error) {
				console.error('Error fetching hotels:', error);
			} else {
				setHotels(hotels || []);
			}
		}
		fetchHotels();
	}, [hotels]);

  if (!hotels) {
    // To add a spinner at some point, maybe
    return <div>Loading...</div>
  }

	return (
		<Container>
			<Box>
				{hotels.map((hotel) => (
					<Link key={hotel.id} href={`/hotels/${hotel.id}`} passHref>
							{hotel.name} {hotel.id}
					</Link>
				))}
			</Box>
		</Container>
	)
}
