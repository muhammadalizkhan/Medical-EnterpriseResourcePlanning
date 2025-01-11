import React, { useState } from 'react';
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
  TablePagination,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  MenuItem,
  IconButton,
} from '@mui/material';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Appointment } from '../types';

const mockAppointments: Appointment[] = [
  {
    id: '1',
    patientId: '1',
    patientName: 'Alice Brown',
    doctorId: '1',
    doctorName: 'Dr. John Smith',
    date: '2024-03-15',
    time: '09:00',
    status: 'scheduled',
    type: 'Check-up',
    notes: 'Regular dental check-up',
    duration: 30
  },
  {
    id: '2',
    patientId: '2',
    patientName: 'Bob Wilson',
    doctorId: '2',
    doctorName: 'Dr. Sarah Johnson',
    date: '2024-03-15',
    time: '10:00',
    status: 'completed',
    type: 'Cleaning',
    notes: 'Regular cleaning session',
    duration: 45
  }
];

const Appointments = () => {
  const [appointments, setAppointments] = useLocalStorage<Appointment[]>('appointments', mockAppointments);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | undefined>();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getStatusColor = (status: Appointment['status']) => {
    switch (status) {
      case 'scheduled':
        return 'primary';
      case 'completed':
        return 'success';
      case 'cancelled':
        return 'error';
      case 'no-show':
        return 'warning';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4">Appointments</Typography>
        <Button
          variant="contained"
          startIcon={<Plus size={20} />}
          onClick={() => setModalOpen(true)}
        >
          New Appointment
        </Button>
      </Box>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Patient</TableCell>
              <TableCell>Doctor</TableCell>
              <TableCell>Date & Time</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>{appointment.patientName}</TableCell>
                  <TableCell>{appointment.doctorName}</TableCell>
                  <TableCell>
                    {new Date(`${appointment.date} ${appointment.time}`).toLocaleString()}
                  </TableCell>
                  <TableCell>{appointment.type}</TableCell>
                  <TableCell>{appointment.duration} min</TableCell>
                  <TableCell>
                    <Chip
                      label={appointment.status}
                      size="small"
                      color={getStatusColor(appointment.status)}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      onClick={() => {
                        setSelectedAppointment(appointment);
                        setModalOpen(true);
                      }}
                      sx={{ mr: 1 }}
                    >
                      <Edit2 size={16} />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => {
                        setAppointments(appointments.filter(a => a.id !== appointment.id));
                      }}
                    >
                      <Trash2 size={16} />
                    </IconButton>
                  </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={appointments.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          {selectedAppointment ? 'Edit Appointment' : 'New Appointment'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Patient Name"
                defaultValue={selectedAppointment?.patientName}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Doctor Name"
                defaultValue={selectedAppointment?.doctorName}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date"
                type="date"
                defaultValue={selectedAppointment?.date}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Time"
                type="time"
                defaultValue={selectedAppointment?.time}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Type"
                defaultValue={selectedAppointment?.type}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Duration (minutes)"
                type="number"
                defaultValue={selectedAppointment?.duration}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                select
                label="Status"
                defaultValue={selectedAppointment?.status || 'scheduled'}
                required
              >
                <MenuItem value="scheduled">Scheduled</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
                <MenuItem value="cancelled">Cancelled</MenuItem>
                <MenuItem value="no-show">No Show</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Notes"
                multiline
                rows={3}
                defaultValue={selectedAppointment?.notes}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setModalOpen(false)}>Cancel</Button>
          <Button
            variant="contained"
            onClick={() => {
              if (selectedAppointment) {
                setAppointments(appointments.map(a =>
                  a.id === selectedAppointment.id
                    ? { ...selectedAppointment, status: 'completed' }
                    : a
                ));
              } else {
                setAppointments([...appointments, {
                  id: String(appointments.length + 1),
                  patientId: String(appointments.length + 1),
                  patientName: 'New Patient',
                  doctorId: '1',
                  doctorName: 'Dr. John Smith',
                  date: new Date().toISOString().split('T')[0],
                  time: '09:00',
                  status: 'scheduled',
                  type: 'Check-up',
                  notes: '',
                  duration: 30
                }]);
              }
              setModalOpen(false);
            }}
          >
            {selectedAppointment ? 'Save Changes' : 'Add Appointment'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Appointments;