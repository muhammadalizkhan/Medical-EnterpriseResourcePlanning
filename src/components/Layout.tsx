import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Box, CssBaseline } from '@mui/material';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          minHeight: '100vh',
          backgroundColor: '#f5f5f5'
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;