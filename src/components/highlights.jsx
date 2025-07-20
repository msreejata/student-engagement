import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const cardColors = ['#F7CFD8', '#F4F8D3', '#FBF3B9', '#D0E8C5', '#A2D2DF', '#B1AFFF'];

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Educator Tools for Adaptive Teaching',
    description:
      'Receive live engagement scores to adjust pace, content, or delivery',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Real-Time Attention Detection',
    description:
      'Monitor student attentiveness through AI-powered facial and eye movement analysis during sessions.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Smart Engagement Dashboard',
    description:
      'Access intuitive visuals on student focus levels, participation trends, and session performance insights.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Personalized Learning Insights',
    description:
      'Generate focus-based feedback for students to help them understand and improve their learning patterns.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Secure and Privacy-Driven',
    description:
      'We prioritize user data security with local processing and consent-first tracking protocols.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Precision in every detail',
    description:
      'Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 2, sm: 4 },
        pb: { xs: 4, sm: 10 },
        color: 'teal.900',
        bgcolor: 'white',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            Features
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.600' }}>
          Discover the powerful features that drive focus, enhance learning, and deliver real results.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: 'black',
                  p: 3,
                  height: '100%',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                  backgroundColor: cardColors[index % cardColors.length], // Use the color here
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.800' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}