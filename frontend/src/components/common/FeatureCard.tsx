import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Feature } from '../../types/feature.ts';

interface FeatureCardProps extends Feature {}

function FeatureCard({ title, description, image, alt }: FeatureCardProps) {
  return (
    <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
      <CardMedia
        component="img"
        src={image}
        alt={alt}
        sx={{ height: '60px', objectFit: 'contain', mx: 'auto', mb: 2 }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default FeatureCard;