import React from 'react';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Plus } from 'lucide-react';
import type { Staff } from '../types';

const mockStaff: Staff[] = [
  {
    id: '1',
    name: 'Emily Davis',
    role: 'Dental Assistant',
    email: 'emily.davis@dental.com',
    phone: '+1 (555) 777-8899',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Receptionist',
    email: 'michael.chen@dental.com',
    phone: '+1 (555) 666-7788',
  },
];

const Staff = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4">Staff Members</Typography>
        <Button
          variant="contained"
          startIcon={<Plus size={20} />}
          onClick={() => {}}
        >
          Add Staff Member
        </Button>
      </Box>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockStaff.map((member) => (
              <TableRow key={member.id}>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.role}</TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>{member.phone}</TableCell>
                <TableCell>
                  <Button size="small" onClick={() => {}}>
                    Edit
                  </Button>
                  <Button size="small" color="error" onClick={() => {}}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Staff;