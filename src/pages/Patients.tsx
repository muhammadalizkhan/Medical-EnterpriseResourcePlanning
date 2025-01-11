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
import type { Patient } from '../types';

const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'Alice Brown',
    email: 'alice.brown@email.com',
    phone: '+1 (555) 111-2233',
    dateOfBirth: '1990-05-15',
  },
  {
    id: '2',
    name: 'Bob Wilson',
    email: 'bob.wilson@email.com',
    phone: '+1 (555) 444-5566',
    dateOfBirth: '1985-09-22',
  },
];

const Patients = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4">Patients</Typography>
        <Button
          variant="contained"
          startIcon={<Plus size={20} />}
          onClick={() => {}}
        >
          Add Patient
        </Button>
      </Box>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockPatients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.email}</TableCell>
                <TableCell>{patient.phone}</TableCell>
                <TableCell>{patient.dateOfBirth}</TableCell>
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

export default Patients;