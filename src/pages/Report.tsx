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
} from "@mui/material";
import { Bell } from "lucide-react";

export default function Report() {
  const patients = [
    { name: "Sophia Martin", condition: "Flu", cost: "$120", status: "Completed", date: "12-06-2023" },
    { name: "John Smith", condition: "Allergy", cost: "$80", status: "Pending", date: "15-06-2023" },
    { name: "Alice Brown", condition: "Dental Checkup", cost: "$200", status: "Completed", date: "20-06-2023" },
  ];

  return (
    <Box sx={{ minHeight: "100vh", p: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" fontWeight="bold" sx={{ color: "#1A202C" }}>
          Medical Management Reports
        </Typography>
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#3182CE",
            borderColor: "#3182CE",
            borderRadius: "50px",
            padding: "6px 24px",
            "&:hover": { backgroundColor: "#3182CE", color: "#FFFFFF" },
          }}
        >
          Back
        </Button>
      </Box>

      <Grid container spacing={3}>
        {/* Overview Section */}
        <Grid item xs={12} md={3}>
          <Card
            sx={{
              p: 3,
              borderRadius: "16px",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: "#1A202C" }}>
              Overview
            </Typography>
            <Box textAlign="center" sx={{ mb: 2 }}>
              <CircularProgress
                variant="determinate"
                value={75}
                size={100}
                thickness={4}
                sx={{ color: "#3182CE" }}
              />
              <Typography variant="h4" fontWeight="bold" sx={{ mt: 1, color: "#3182CE" }}>
                75%
              </Typography>
              <Typography variant="body2" color="#718096">
                Patients Attended
              </Typography>
            </Box>
            <Divider sx={{ my: 2, borderColor: "#E2E8F0" }} />
            <Typography variant="body2" sx={{ mb: 1, color: "#1A202C" }}>
              <strong>200</strong> total reports generated
            </Typography>
            <Typography variant="body2" color="#718096">
              - Completed Reports: 150
            </Typography>
            <Typography variant="body2" color="#718096">
              - Pending Reports: 50
            </Typography>
          </Card>
        </Grid>

        {/* Patient Reports Section */}
        <Grid item xs={12} md={9}>
          <Card
            sx={{
              p: 3,
              borderRadius: "16px",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: "#1A202C" }}>
              Patient Reports
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    {["Patient Name", "Condition", "Cost", "Status", "Appointment Date"].map(
                      (header, index) => (
                        <TableCell key={index}>
                          <Typography fontWeight="bold" sx={{ color: "#1A202C" }}>
                            {header}
                          </Typography>
                        </TableCell>
                      )
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {patients.map((patient, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Typography sx={{ color: "#1A202C" }}>{patient.name}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ color: "#1A202C" }}>{patient.condition}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ color: "#1A202C" }}>{patient.cost}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          sx={{ color: patient.status === "Completed" ? "#48BB78" : "#E53E3E" }}
                        >
                          {patient.status}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ color: "#1A202C" }}>{patient.date}</Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>

        {/* Resources Section */}
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  backgroundColor: "#5A67D8",
                  color: "white",
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                  height: "200px"
                }}
              >
                <Typography variant="h6" fontWeight="bold">Patient Workbook</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Get started with our Patient resources.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "white",
                    color: "#5A67D8",
                    borderRadius: "50px",
                    textTransform: "none",
                    fontWeight: "bold",
                  }}
                >
                  View Workbook
                </Button>
              </Card>
            </Grid>

            <Grid item xs={12} md={3}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  backgroundColor: "#5A67D8",
                  color: "white",
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                  height: "200px"
                }}
              >
                <Typography variant="h6" fontWeight="bold">Doctor Workbook</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Get started with our Doctor resources.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "white",
                    color: "#5A67D8",
                    borderRadius: "50px",
                    textTransform: "none",
                    fontWeight: "bold",
                  }}
                >
                  View Workbook
                </Button>
              </Card>
            </Grid>

            <Grid item xs={12} md={3}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  backgroundColor: "#E2E8F0",
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                  height: "200px"
                }}
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <Bell size={24} color="#5A67D8" />
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
                    borderRadius: "50px",
                    borderColor: "#5A67D8",
                    color: "#5A67D8",
                    textTransform: "none",
                    fontWeight: "bold",
                  }}
                >
                  Create Now
                </Button>
              </Card>
            </Grid>

            <Grid item xs={12} md={3}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  backgroundColor: "#EDF2F7",
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                  height: "200px"
                }}
              >
                <Typography variant="h6" fontWeight="bold">Analytics Dashboard</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Access real-time analytics and reports.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#2D3748",
                    color: "white",
                    borderRadius: "50px",
                    textTransform: "none",
                    fontWeight: "bold",
                  }}
                >
                  View Analytics
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
