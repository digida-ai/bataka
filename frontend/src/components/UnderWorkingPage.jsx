import { Box, Typography, Container } from '@mui/material';
import constructionImage from '../assets/forest.webp';

const UnderWorkingPage = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
        }}
      >
        <img src={constructionImage} alt="Under Construction" style={{ maxWidth: '100%', height: 'auto', marginBottom: '2rem' }} />
        <Typography variant="h4" gutterBottom>
          We&apos;re working on something awesome!
        </Typography>
        <Typography variant="body1">
          We&apos;re putting the finishing touches on this page. Check back soon!
        </Typography>
      </Box>
    </Container>
  );
};

export default UnderWorkingPage;
