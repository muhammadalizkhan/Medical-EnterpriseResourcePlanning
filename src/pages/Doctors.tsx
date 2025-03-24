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
  Avatar,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  Rating,
  IconButton,
} from '@mui/material';
import { Plus, Edit2, Trash2, Star } from 'lucide-react';
import type { Doctor } from '../types';
import { useNavigate } from 'react-router-dom';


const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. John Smith',
    specialization: 'Orthodontist',
    email: 'john.smith@dental.com',
    phone: '+1 (555) 123-4567',
    profilePicture: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150',
    availability: ['Mon', 'Wed', 'Fri'],
    experience: 12,
    education: 'DDS - Harvard School of Dental Medicine',
    consultationFee: 150,
    rating: 4.8,
    totalPatients: 1200,
    languages: ['English', 'Spanish'],
    address: '123 Medical Center Dr, Boston, MA'
  },
  {
    id: '2',
    name: 'Dr. Sarah Johnson',
    specialization: 'Periodontist',
    email: 'sarah.johnson@dental.com',
    phone: '+1 (555) 234-5678',
    profilePicture: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150',
    availability: ['Tue', 'Thu', 'Sat'],
    experience: 8,
    education: 'DMD - University of Pennsylvania',
    consultationFee: 175,
    rating: 4.9,
    totalPatients: 850,
    languages: ['English', 'French'],
    address: '456 Dental Plaza, Philadelphia, PA'
  },
  {
    id: '3',
    name: 'Dr. Sarah Johnson',
    specialization: 'Periodontist',
    email: 'sarah.johnson@dental.com',
    phone: '+1 (555) 234-5678',
    profilePicture: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150',
    availability: ['Tue', 'Thu', 'Sat'],
    experience: 8,
    education: 'DMD - University of Pennsylvania',
    consultationFee: 175,
    rating: 4.9,
    totalPatients: 850,
    languages: ['English', 'French'],
    address: '456 Dental Plaza, Philadelphia, PA'
  },
  {
    id: '4',
    name: 'Dr. Sarah Johnson',
    specialization: 'Periodontist',
    email: 'sarah.johnson@dental.com',
    phone: '+1 (555) 234-5678',
    profilePicture: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150',
    availability: ['Tue', 'Thu', 'Sat'],
    experience: 8,
    education: 'DMD - University of Pennsylvania',
    consultationFee: 175,
    rating: 4.9,
    totalPatients: 850,
    languages: ['English', 'French'],
    address: '456 Dental Plaza, Philadelphia, PA'
  }
];

interface DoctorModalProps {
  open: boolean;
  onClose: () => void;
  doctor?: Doctor;
  mode: 'add' | 'edit';
}

const DoctorModal = ({ open, onClose, doctor, mode }: DoctorModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{mode === 'add' ? 'Add New Doctor' : 'Edit Doctor'}</DialogTitle>
      <DialogContent>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Full Name"
              defaultValue={doctor?.name}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Specialization"
              defaultValue={doctor?.specialization}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              defaultValue={doctor?.email}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              defaultValue={doctor?.phone}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Experience (years)"
              type="number"
              defaultValue={doctor?.experience}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Consultation Fee"
              type="number"
              defaultValue={doctor?.consultationFee}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Education"
              defaultValue={doctor?.education}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Languages"
              defaultValue={doctor?.languages?.join(', ')}
              helperText="Separate languages with commas"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              multiline
              rows={2}
              defaultValue={doctor?.address}
              required
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={onClose}>
          {mode === 'add' ? 'Add Doctor' : 'Save Changes'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const Doctors = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | undefined>();
  const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
  const navigate = useNavigate();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleAddDoctor = () => {
    setModalMode('add');
    setSelectedDoctor(undefined);
    setModalOpen(true);
  };

  const handleNavigateToProfile = (id: string) => {
    navigate(`/doctor-profile?id=${id}`);
  };

  const handleEditDoctor = (doctor: Doctor) => {
    setModalMode('edit');
    setSelectedDoctor(doctor);
    setModalOpen(true);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4">Doctors</Typography>
        <Button
          variant="contained"
          startIcon={<Plus size={20} />}
          onClick={handleAddDoctor}
        >
          Add Doctor
        </Button>
      </Box>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Doctor</TableCell>
              <TableCell>Specialization</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Experience</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockDoctors
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((doctor) => (
                <TableRow key={doctor.id}>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar
                        src={doctor.profilePicture}
                        alt={doctor.name}
                        sx={{ width: 40, height: 40 }}
                        onClick={() => handleNavigateToProfile(doctor.id)}

                      />
                      <Box>
                        <Typography variant="subtitle2">{doctor.name}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          {doctor.email}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>{doctor.specialization}</TableCell>
                  <TableCell>
                    <Typography variant="body2">{doctor.phone}</Typography>
                  </TableCell>
                  <TableCell>{doctor.experience} years</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Rating
                        value={doctor.rating}
                        readOnly
                        size="small"
                        icon={<Star size={16} />}
                      />
                      <Typography variant="body2">
                        ({doctor.rating})
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label="Active"
                      size="small"
                      color="success"
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      onClick={() => handleEditDoctor(doctor)}
                      sx={{ mr: 1 }}
                    >
                      <Edit2 size={16} />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="error"
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
          count={mockDoctors.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      <DoctorModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        doctor={selectedDoctor}
        mode={modalMode}
      />
    </Box>
  );
};

export default Doctors;