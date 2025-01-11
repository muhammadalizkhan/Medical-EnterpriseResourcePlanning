import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  InputAdornment,
  Divider,
  LinearProgress,
  Stack,
  Modal,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Search, Filter } from "lucide-react";

const Notification = () => {
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [filters, setFilters] = useState({ status: "", date: "" });

  const notifications = [
    {
      id: "#N01",
      created: "July 14, 2022",
      description: "Inventory level is low for item X.",
      status: "Pending",
      progress: 0,
    },
    {
      id: "#N02",
      created: "August 2, 2022",
      description: "New appointment scheduled.",
      status: "Resolved",
      progress: 100,
    },
    {
      id: "#N03",
      created: "September 15, 2022",
      description: "Billing issue with invoice #12345.",
      status: "Partially Resolved",
      progress: 50,
    },
  ];

  // Handle filter changes
  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Box p={3}>
      {/* Header Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
        bgcolor="#f5f5f5"
        p={2}
        borderRadius="8px"
      >
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Total Asset Value
          </Typography>
          <Typography variant="h5" color="primary">
            $10,200,323
          </Typography>
        </Box>
        <Stack direction="row" spacing={2} alignItems="center">
          <Box display="flex" alignItems="center">
            <Typography variant="subtitle1" color="success.main">
              In Stock: 20
            </Typography>
            <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
            <Typography variant="subtitle1" color="warning.main">
              Low Stock: 4
            </Typography>
            <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
            <Typography variant="subtitle1" color="error.main">
              Out of Stock: 8
            </Typography>
          </Box>
          <Button variant="contained" color="primary" onClick={() => setOrderModalOpen(true)}>
            + Order Stock
          </Button>
        </Stack>
      </Box>

      {/* Search and Filters */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <TextField
          variant="outlined"
          placeholder="Search notifications"
          size="small"
          sx={{ flexGrow: 1, mr: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search size={18} />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="outlined"
          startIcon={<Filter size={18} />}
          sx={{ textTransform: "none" }}
          onClick={() => setFilterModalOpen(true)}
        >
          Filters
        </Button>
      </Box>

      {/* Table Section */}
      <TableContainer component={Paper} elevation={3} sx={{ borderRadius: "8px" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#f5f5f5" }}>
              <TableCell>
                <Typography variant="subtitle2" fontWeight="bold">
                  Order
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight="bold">
                  Created
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight="bold">
                  Description
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight="bold">
                  Status
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight="bold">
                  Progress
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle2" fontWeight="bold">
                  Actions
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notifications.map((notification) => (
              <TableRow key={notification.id}>
                <TableCell>
                  <Typography variant="body2">{notification.id}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{notification.created}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{notification.description}</Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body2"
                    color={
                      notification.status === "Pending"
                        ? "error"
                        : notification.status === "Resolved"
                        ? "success"
                        : "warning"
                    }
                  >
                    {notification.status}
                  </Typography>
                </TableCell>
                <TableCell>
                  <LinearProgress
                    variant="determinate"
                    value={notification.progress}
                    sx={{ borderRadius: "8px", height: "8px" }}
                  />
                </TableCell>
                <TableCell align="right">
                  <Button variant="text" color="primary" size="small">
                    View
                  </Button>
                  <Button variant="text" color="error" size="small">
                    Resolve
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Filter Modal */}
      <Modal open={filterModalOpen} onClose={() => setFilterModalOpen(false)}>
        <Box
          p={4}
          bgcolor="white"
          borderRadius="8px"
          boxShadow={3}
          width={400}
          mx="auto"
          mt="15%"
        >
          <Typography variant="h6" mb={2}>
            Apply Filters
          </Typography>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={filters.status}
              onChange={(e) => handleFilterChange("status", e.target.value)}
            >
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Resolved">Resolved</MenuItem>
              <MenuItem value="Partially Resolved">Partially Resolved</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <TextField
              label="Date"
              type="date"
              value={filters.date}
              onChange={(e) => handleFilterChange("date", e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
          </FormControl>
          <Stack direction="row" justifyContent="flex-end" spacing={2}>
            <Button variant="outlined" onClick={() => setFilterModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="contained" onClick={() => setFilterModalOpen(false)}>
              Apply
            </Button>
          </Stack>
        </Box>
      </Modal>

      {/* Order Stock Modal */}
      <Modal open={orderModalOpen} onClose={() => setOrderModalOpen(false)}>
        <Box
          p={4}
          bgcolor="white"
          borderRadius="8px"
          boxShadow={3}
          width={400}
          mx="auto"
          mt="15%"
        >
          <Typography variant="h6" mb={2}>
            Add New Order
          </Typography>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <TextField label="Order ID" placeholder="#O1234" />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <TextField label="Quantity" type="number" />
          </FormControl>
          <Stack direction="row" justifyContent="flex-end" spacing={2}>
            <Button variant="outlined" onClick={() => setOrderModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="contained" onClick={() => setOrderModalOpen(false)}>
              Save
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default Notification;
