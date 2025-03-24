import {
  Box,
  Typography,
  Card,
  Button,
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

export default function AdvancedFeatures() {
  const data = [
    { id: 1, title: "Revenue Report Q1", date: "01-01-2023", type: "Revenue", status: "Completed" },
    { id: 2, title: "Expense Analysis March", date: "15-03-2023", type: "Expense", status: "Pending" },
    { id: 3, title: "Insurance Claim Report", date: "05-05-2023", type: "Insurance", status: "Completed" },
  ];

  return (
    <Box sx={{ minHeight: "100vh", p: 4 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 4, color: "#1A202C" }}>
        Advanced Features
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              p: 3,
              borderRadius: "16px",
              backgroundColor: "#EDF2F7",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ color: "#1A202C" }}>
              Revenue Reports
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "#718096" }}>
              Analyze revenue data to drive growth with detailed insights and performance trends.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#3182CE",
                color: "#FFFFFF",
                textTransform: "none",
                borderRadius: "50px",
                "&:hover": { backgroundColor: "#225EAE" },
              }}
            >
              View Revenue
            </Button>
          </Card>
        </Grid>

        {/* Expense Tracking Card */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              p: 3,
              borderRadius: "16px",
              backgroundColor: "#EDF2F7",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ color: "#1A202C" }}>
              Expense Tracking
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "#718096" }}>
              Monitor and manage internal expenses with real-time updates and advanced filtering.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#3182CE",
                color: "#FFFFFF",
                textTransform: "none",
                borderRadius: "50px",
                "&:hover": { backgroundColor: "#225EAE" },
              }}
            >
              View Expenses
            </Button>
          </Card>
        </Grid>

        {/* Insurance Billing Card */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              p: 3,
              borderRadius: "16px",
              backgroundColor: "#EDF2F7",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ color: "#1A202C" }}>
              Insurance Billing
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "#718096" }}>
              Simplify and streamline insurance claim management with automated workflows.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#3182CE",
                color: "#FFFFFF",
                textTransform: "none",
                borderRadius: "50px",
                "&:hover": { backgroundColor: "#225EAE" },
              }}
            >
              View Insurance
            </Button>
          </Card>
        </Grid>
      </Grid>

      {/* Table for Advanced Features Data */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: "#1A202C" }}>
          Reports & Analytics
        </Typography>
        <TableContainer component={Paper} sx={{ borderRadius: "16px", overflow: "hidden" }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#F7FAFC" }}>
                {["ID", "Title", "Date", "Type", "Status"].map((header) => (
                  <TableCell key={header} sx={{ fontWeight: "bold", color: "#1A202C" }}>
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id} sx={{ "&:hover": { backgroundColor: "#EDF2F7" } }}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell sx={{ color: row.status === "Completed" ? "#48BB78" : "#E53E3E" }}>
                    {row.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
