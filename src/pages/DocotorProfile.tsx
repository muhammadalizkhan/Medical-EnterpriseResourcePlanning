import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Grid,
  Avatar,
  Tabs,
  Tab,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Chip,
} from "@mui/material";

export default function DoctorProfile() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ minHeight: "100vh", p: 4 }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Avatar
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150"
            sx={{ width: 100, height: 100 }}
          />
          <Box>
            <Typography variant="h5" fontWeight="bold">
              Dr. John Smith
            </Typography>
            <Typography variant="body1" color="#718096">
              Orthodontist
            </Typography>
            <Typography variant="body2" color="#A0AEC0">
              john.smith@dental.com | +1 (555) 123-4567
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="body2" color="#A0AEC0">
            Member since: 01-Jan-2020
          </Typography>
        </Box>
      </Box>

      {/* Tabs */}
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        centered
        indicatorColor="primary"
        textColor="primary"
        sx={{ mb: 4 }}
      >
        <Tab label="Overview" />
        <Tab label="Patient Details" />
        <Tab label="Treatment History" />
        <Tab label="Medical Records" />
        <Tab label="Appointments" />
        <Tab label="Earnings & Payments" />
      </Tabs>

      {/* Tab Content */}
      <Box sx={{ mt: 4 }}>
        {/* Overview Tab */}
        {tabIndex === 0 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3, boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}>
                <Typography variant="h6" fontWeight="bold">
                  Total Appointments
                </Typography>
                <Typography variant="h4" color="#3182CE" fontWeight="bold" sx={{ mt: 1 }}>
                  120
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3, boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}>
                <Typography variant="h6" fontWeight="bold">
                  Total Patients
                </Typography>
                <Typography variant="h4" color="#48BB78" fontWeight="bold" sx={{ mt: 1 }}>
                  950
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3, boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}>
                <Typography variant="h6" fontWeight="bold">
                  Earnings This Month
                </Typography>
                <Typography variant="h4" color="#2B6CB0" fontWeight="bold" sx={{ mt: 1 }}>
                  $8,500
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ p: 3, boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                  Performance Overview
                </Typography>
                <Typography>
                  Dr. John Smith has consistently maintained high patient satisfaction ratings,
                  completed over 120 appointments this year, and has seen a significant increase in
                  earnings compared to last quarter.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        )}

        {/* Patient Details Tab */}
        {tabIndex === 1 && (
          <TableContainer component={Paper} sx={{ borderRadius: "8px", boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}>
            <Table>
              <TableHead>
                <TableRow>
                  {["Patient Name", "Age", "Contact", "Last Visit", "Status"].map((header) => (
                    <TableCell key={header}>
                      <Typography fontWeight="bold" color="#1A202C">
                        {header}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {[...Array(5)].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>John Doe</TableCell>
                    <TableCell>35</TableCell>
                    <TableCell>+1 (555) 123-4567</TableCell>
                    <TableCell>01-10-2023</TableCell>
                    <TableCell>
                      <Chip label="Active" size="small" color="success" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {/* Treatment History Tab */}
        {tabIndex === 2 && (
          <Box>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Treatment History
            </Typography>
            {[...Array(3)].map((_, index) => (
              <Card
                key={index}
                sx={{
                  p: 3,
                  mb: 2,
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                }}
              >
                <Typography fontWeight="bold">Treatment #{index + 1}</Typography>
                <Typography>Details about the treatment go here.</Typography>
              </Card>
            ))}
          </Box>
        )}

        {/* Medical Records Tab */}
        {tabIndex === 3 && (
          <Box>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Medical Records
            </Typography>
            <Typography>No medical records uploaded.</Typography>
          </Box>
        )}

        {/* Appointments Tab */}
        {tabIndex === 4 && (
          <Box>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Upcoming Appointments
            </Typography>
            {[...Array(3)].map((_, index) => (
              <Card
                key={index}
                sx={{
                  p: 3,
                  mb: 2,
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                }}
              >
                <Typography fontWeight="bold">Appointment #{index + 1}</Typography>
                <Typography>Details about the appointment go here.</Typography>
              </Card>
            ))}
          </Box>
        )}

        {/* Earnings & Payments Tab */}
        {tabIndex === 5 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3, boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}>
                <Typography variant="h6" fontWeight="bold">
                  Total Earnings
                </Typography>
                <Typography variant="h4" color="#48BB78" fontWeight="bold" sx={{ mt: 1 }}>
                  $12,300
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3, boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}>
                <Typography variant="h6" fontWeight="bold">
                  Pending Payments
                </Typography>
                <Typography variant="h4" color="#E53E3E" fontWeight="bold" sx={{ mt: 1 }}>
                  $2,500
                </Typography>
              </Card>
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
}
