import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { Users, UserRound, Stethoscope, Calendar } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon }) => (
  <Paper
    elevation={2}
    sx={{
      p: 3,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 2,
    }}
  >
    <Box>
      <Typography color="textSecondary" variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h4">{value}</Typography>
    </Box>
    <Box
      sx={{
        backgroundColor: 'primary.main',
        borderRadius: '50%',
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon size={24} color="white" />
    </Box>
  </Paper>
);

const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Total Doctors" value="12" icon={Stethoscope} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Total Patients" value="248" icon={UserRound} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Staff Members" value="18" icon={Users} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Appointments Today"
            value="32"
            icon={Calendar}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;