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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  IconButton,
} from '@mui/material';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Treatment } from '../types';

const mockTreatments: Treatment[] = [
  {
    id: '1',
    name: 'Root Canal',
    description: 'Endodontic treatment for infected tooth pulp',
    duration: 90,
    cost: 800,
    category: 'Endodontics'
  },
  {
    id: '2',
    name: 'Teeth Whitening',
    description: 'Professional teeth whitening treatment',
    duration: 60,
    cost: 350,
    category: 'Cosmetic'
  }
];

const Treatments = () => {
  const [treatments, setTreatments] = useLocalStorage<Treatment[]>('treatments', mockTreatments);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | undefined>();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4">Treatments</Typography>
        <Button
          variant="contained"
          startIcon={<Plus size={20} />}
          onClick={() => {
            setSelectedTreatment(undefined);
            setModalOpen(true);
          }}
        >
          Add Treatment
        </Button>
      </Box>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Cost</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {treatments
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((treatment) => (
                <TableRow key={treatment.id}>
                  <TableCell>{treatment.name}</TableCell>
                  <TableCell>{treatment.category}</TableCell>
                  <TableCell>{treatment.duration} min</TableCell>
                  <TableCell>${treatment.cost}</TableCell>
                  <TableCell>{treatment.description}</TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      onClick={() => {
                        setSelectedTreatment(treatment);
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
                        setTreatments(treatments.filter(t => t.id !== treatment.id));
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
          count={treatments.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          {selectedTreatment ? 'Edit Treatment' : 'New Treatment'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Treatment Name"
                defaultValue={selectedTreatment?.name}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Category"
                defaultValue={selectedTreatment?.category}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Duration (minutes)"
                type="number"
                defaultValue={selectedTreatment?.duration}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Cost ($)"
                type="number"
                defaultValue={selectedTreatment?.cost}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                multiline
                rows={3}
                defaultValue={selectedTreatment?.description}
                required
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setModalOpen(false)}>Cancel</Button>
          <Button
            variant="contained"
            onClick={() => {
              if (selectedTreatment) {
                setTreatments(treatments.map(t =>
                  t.id === selectedTreatment.id
                    ? { ...selectedTreatment }
                    : t
                ));
              } else {
                setTreatments([...treatments, {
                  id: String(treatments.length + 1),
                  name: 'New Treatment',
                  description: '',
                  duration: 60,
                  cost: 0,
                  category: 'General'
                }]);
              }
              setModalOpen(false);
            }}
          >
            {selectedTreatment ? 'Save Changes' : 'Add Treatment'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Treatments;