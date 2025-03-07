'use client'

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '@/utilities/initSupabase';
import { Tables } from '@/utilities/supabase.types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

type Hotel = Tables<'hotels'>

export default function HotelDetails() {
  const { id } = useParams();
  const [hotel, setHotel] = useState<Hotel | null>(null);

  useEffect(() => {
    if (id) {
      const fetchHotel = async () => {
        const { data: hotel, error } = await supabase.from('hotels').select('*').eq('id', Number(id)).single();

        if (error) {
          console.error('Error fetching hotel:', error);
        } else {
          setHotel(hotel);
        }
      }
      fetchHotel();
    }
  }, [id]);

  if (!hotel) {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <Box>
        <Typography variant="h4">{hotel.name}</Typography>
        <Typography variant="body1">ID: {hotel.id}</Typography>
        <Typography variant="body1">Created At: {hotel.created_at}</Typography>
      </Box>
    </Container>
  )
}