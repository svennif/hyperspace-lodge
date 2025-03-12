'use client'

/* import { useEffect, useState } from 'react';
import { supabase } from '@/utilities/initSupabase'; */
import { Tables } from '@/utilities/supabase.types';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

type Hotels = Tables<'hotels'>

const testHotels = [
  {
    id: 1,
    name: 'hotel1',
  },
  {
    id: 2,
    name: 'hotel2',
  },
  {
    id: 3,
    name: 'hotel3',
  },
]

export default function Hotels() {
/* 	const [hotels, setHotels] = useState<Hotels[]>([])

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
  } */

	return (
		<Container>
			<Box>
        {testHotels.map((hotel) => (
          <Link key={hotel.id} href={`/${hotel.name}`}>{hotel.name}</Link>
        ))}
			</Box>
		</Container>
	)
}
