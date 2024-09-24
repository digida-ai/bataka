import PropTypes from 'prop-types';
import { Card as MuiCard, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Card = ({ img, imgDescription, heading, description, link }) => {
  return (
    <MuiCard sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt={imgDescription}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Button component={Link} to={link} size="small" color="primary">
        Learn More
      </Button>
    </MuiCard>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  imgDescription: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
