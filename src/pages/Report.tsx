import React from "react";
import {
  Box,
  Typography,
  Card,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  CircularProgress,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Bell, AlertCircle, TrendingUp, FileText, Calendar } from "lucide-react";

export default function Report() {
  const patients = [
    { name: "Sophia Martin", condition: "Flu", cost: "$120", status: "Completed", date: "12-06-2023" },
    { name: "John Smith", condition: "Allergy", cost: "$80", status: "Pending", date: "15-06-2023" },
    { name: "Alice Brown", condition: "Dental Checkup", cost: "$200", status: "Completed", date: "20-06-2023" },
  ];

  const recentActivities = [
    "New appointment scheduled for John Smith",
    "Lab results approved for Alice Brown",
    "Inventory updated: 50 masks added",
  ];

  return (
    <Box sx={{ minHeight: "100vh", p: 4, backgroundColor: "#F5F5F5" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" fontWeight="bold" sx={{ color: "#181B1B" }}>
          Medical Management Reports
        </Typography>
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#006BFF",
            borderColor: "#006BFF",
            "&:hover": { backgroundColor: "#006BFF", color: "#FFFFFF" },
          }}
        >
          Back
        </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card sx={{ p: 3, borderRadius: "16px", boxShadow: "0px 4px 12px rgba(0,0,0,0.1)", backgroundColor: "#FFFFFF" }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: "#181B1B" }}>
              Overview
            </Typography>
            <Box textAlign="center" sx={{ mb: 2 }}>
              <CircularProgress
                variant="determinate"
                value={75}
                size={100}
                thickness={4}
                sx={{ color: "#006BFF" }}
              />
              <Typography variant="h4" fontWeight="bold" sx={{ mt: 1, color: "#006BFF" }}>
                75%
              </Typography>
              <Typography variant="body2" color="#6C6C6C">
                Patients Attended
              </Typography>
            </Box>
            <Divider sx={{ my: 2, borderColor: "#CCCEDA" }} />
            <Typography variant="body2" sx={{ mb: 1, color: "#181B1B" }}>
              <strong>200</strong> total reports generated
            </Typography>
            <Typography variant="body2" color="#6C6C6C">
              - Completed Reports: 150
            </Typography>
            <Typography variant="body2" color="#6C6C6C">
              - Pending Reports: 50
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, borderRadius: "16px", boxShadow: "0px 4px 12px rgba(0,0,0,0.1)", backgroundColor: "#FFFFFF" }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: "#181B1B" }}>
              Patient Reports
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    {["Patient Name", "Condition", "Cost", "Status", "Appointment Date"].map((header, index) => (
                      <TableCell key={index}>
                        <Typography fontWeight="bold" sx={{ color: "#181B1B" }}>
                          {header}
                        </Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {patients.map((patient, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Typography sx={{ color: "#181B1B" }}>{patient.name}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ color: "#181B1B" }}>{patient.condition}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ color: "#181B1B" }}>{patient.cost}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ color: patient.status === "Completed" ? "#48BB78" : "#E53E3E" }}>
                          {patient.status}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ color: "#181B1B" }}>{patient.date}</Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card
            sx={{
              p: 3,
              mb: 3,
              borderRadius: "16px",
              backgroundColor: "#5a67d8",
              color: "white",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <Typography variant="h6" fontWeight="bold">Employer Workbook</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Get started with our employer resources.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "white",
                color: "#5a67d8",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              View Workbook
            </Button>
          </Card>

          <Card
            sx={{
              p: 3,
              borderRadius: "16px",
              backgroundColor: "#e2e8f0",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <Box display="flex" alignItems="center" gap={2}>
              <Bell size={24} color="#5a67d8" />
              <Typography variant="h6" fontWeight="bold">
                Create Announcement
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mt: 1 }} color="text.secondary">
              Notify employees of new updates and news.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                mt: 2,
                borderColor: "#5a67d8",
                color: "#5a67d8",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              Create Now
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
