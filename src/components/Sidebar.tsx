import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Users,
  UserRound,
  Stethoscope,
  LayoutDashboard,
  Calendar,
  Settings,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Receipt,
  MessageSquare,
  FileText,
  Bell,
} from 'lucide-react';

const expandedWidth = 280;
const collapsedWidth = 80;

const menuItems = [
  { text: 'Dashboard', icon: <LayoutDashboard />, path: '/' },
  { text: 'Doctors', icon: <Stethoscope />, path: '/doctors' },
  { text: 'Patients', icon: <UserRound />, path: '/patients' },
  { text: 'Staff', icon: <Users />, path: '/staff' },
  { text: 'Appointments', icon: <Calendar />, path: '/appointments' },
  { text: 'Treatments', icon: <ClipboardList />, path: '/treatments' },
  { text: 'Billing', icon: <Receipt />, path: '/billing' },
  { text: 'Messages', icon: <MessageSquare />, path: '/Message' },
  { text: 'Reports', icon: <FileText />, path: '/Report' },
  { text: 'Notifications', icon: <Bell />, path: '/Notification' },
  { text: 'Settings', icon: <Settings />, path: '/Settings' },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isExpanded ? expandedWidth : collapsedWidth,
        transition: 'width 0.2s ease-in-out',
        '& .MuiDrawer-paper': {
          width: isExpanded ? expandedWidth : collapsedWidth,
          boxSizing: 'border-box',
          backgroundColor: '#1a237e',
          color: 'white',
          transition: 'width 0.2s ease-in-out',
          overflowX: 'hidden',
        },
      }}
    >
      <Box sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {isExpanded && (
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            DentalERP
          </Typography>
        )}
        <IconButton
          onClick={() => setIsExpanded(!isExpanded)}
          sx={{ color: 'white', ml: isExpanded ? 0 : 'auto', mr: isExpanded ? 0 : 'auto' }}
        >
          {isExpanded ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => navigate(item.path)}
              selected={location.pathname === item.path}
              sx={{
                minHeight: 48,
                justifyContent: isExpanded ? 'initial' : 'center',
                px: 2.5,
                '&.Mui-selected': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  },
                },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                },
              }}
            >
              <ListItemIcon 
                sx={{ 
                  color: 'white',
                  minWidth: 0,
                  mr: isExpanded ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              {isExpanded && <ListItemText primary={item.text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;