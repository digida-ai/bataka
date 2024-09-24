import { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Container } from '@mui/material';
import axios from 'axios';

const Clan = () => {
  const [clans, setClans] = useState([]);
  const [selectedClan, setSelectedClan] = useState(null);

  useEffect(() => {
    const fetchClans = async () => {
      try {
        const response = await axios.get('/api/clans');
        setClans(response.data);
      } catch (error) {
        console.error('Error fetching clan data:', error);
      }
    };

    fetchClans();
  }, []);

  const handleClanSelect = (clan) => {
    setSelectedClan(clan);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
        {clans.map((clan) => (
          <Card 
            key={clan.id} 
            onClick={() => handleClanSelect(clan)}
            sx={{ 
              width: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(33.333% - 10.667px)' },
              cursor: 'pointer'
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={`/assets/clan/${clan.name}.webp`}
              alt={`${clan.name} totem`}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {clan.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      {selectedClan && (
        <Box className="clan-details">
          <Typography variant="h4" gutterBottom>{selectedClan.name}</Typography>
          {/* Display detailed clan information in faucets */}
        </Box>
      )}
    </Container>
  );
};

export default Clan;
