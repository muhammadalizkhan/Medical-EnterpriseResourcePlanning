import {
  Box,
  Typography,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  Paper,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { Edit, Trash } from "lucide-react";
import { To, useNavigate } from "react-router-dom";

export default function Billing() {
  const [invoices, setInvoices] = useState([
    { id: 1, patientName: "Sophia Martin", amount: "$120", status: "Paid", date: "12-06-2023" },
    { id: 2, patientName: "John Smith", amount: "$80", status: "Unpaid", date: "15-06-2023" },
    { id: 3, patientName: "Alice Brown", amount: "$200", status: "Paid", date: "20-06-2023" },
  ]);

  const navigate = useNavigate();

  const handleDelete = (id: number) => {
    setInvoices(invoices.filter((invoice) => invoice.id !== id));
  };

  const handleEdit = (id: number) => {
    console.log("Edit invoice", id);
  };

  const handleNavigate = (path: To) => {
    navigate(path);
  };

  return (
    <Box sx={{ minHeight: "100vh", p: 4 }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 4, color: "#1A202C" }}>
        Billing Section
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, borderRadius: "16px", backgroundColor: "#FFFFFF", boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: "#1A202C" }}>
              Total Revenue
            </Typography>
            <Typography variant="h4" fontWeight="bold" sx={{ color: "#48BB78" }}>
              $400
            </Typography>
            <Typography variant="body2" color="#718096">
              Based on recent transactions
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, borderRadius: "16px", backgroundColor: "#FFFFFF", boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: "#1A202C" }}>
              Pending Payments
            </Typography>
            <Typography variant="h4" fontWeight="bold" sx={{ color: "#E53E3E" }}>
              $80
            </Typography>
            <Typography variant="body2" color="#718096">
              Unpaid invoices
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, borderRadius: "16px", backgroundColor: "#FFFFFF", boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: "#1A202C" }}>
              Total Invoices
            </Typography>
            <Typography variant="h4" fontWeight="bold" sx={{ color: "#3182CE" }}>
              3
            </Typography>
            <Typography variant="body2" color="#718096">
              Processed invoices
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: "#1A202C" }}>
          Invoice Details
        </Typography>
        <TableContainer component={Paper} sx={{ borderRadius: "16px" }}>
          <Table>
            <TableHead>
              <TableRow>
                {[
                  "Invoice ID",
                  "Patient Name",
                  "Amount",
                  "Status",
                  "Date",
                  "Actions",
                ].map((header, index) => (
                  <TableCell key={index}>
                    <Typography fontWeight="bold" sx={{ color: "#1A202C" }}>
                      {header}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>{invoice.id}</TableCell>
                  <TableCell>{invoice.patientName}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>
                    <Typography
                      sx={{ color: invoice.status === "Paid" ? "#48BB78" : "#E53E3E" }}
                    >
                      {invoice.status}
                    </Typography>
                  </TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEdit(invoice.id)}>
                      <Edit color="#3182CE" size={20} />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(invoice.id)}>
                      <Trash color="#E53E3E" size={20} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: "#1A202C" }}>
          Add New Invoice
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Patient Name"
              fullWidth
              variant="outlined"
              sx={{ borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Amount"
              fullWidth
              variant="outlined"
              sx={{ borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                height: "100%",
                backgroundColor: "#3182CE",
                color: "#FFFFFF",
                textTransform: "none",
                borderRadius: "8px",
                "&:hover": { backgroundColor: "#225EAE" },
              }}
            >
              Add Invoice
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: "#1A202C" }}>
          Advanced Features
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" }, borderRadius: "16px", backgroundColor: "#EDF2F7", boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}>
              <Typography variant="h6" fontWeight="bold" sx={{ color: "#1A202C" }}>
                Revenue Reports
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: "#718096" }}>
                View detailed revenue insights
              </Typography>
              <Button
                variant="outlined"
                onClick={() => handleNavigate("/advanced-features")}
                sx={{
                  mt: 2,
                  borderColor: "#3182CE",
                  color: "#3182CE",
                  textTransform: "none",
                  borderRadius: "50px",
                }}
              >
                View Reports
              </Button>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" }, borderRadius: "16px", backgroundColor: "#EDF2F7", boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}>
              <Typography variant="h6" fontWeight="bold" sx={{ color: "#1A202C" }}>
                Expense Tracking
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: "#718096" }}>
                Manage internal expenses efficiently
              </Typography>
              <Button
                variant="outlined"
                onClick={() => handleNavigate("/advanced-features")}
                sx={{
                  mt: 2,
                  borderColor: "#3182CE",
                  color: "#3182CE",
                  textTransform: "none",
                  borderRadius: "50px",
                }}
              >
                Manage Expenses
              </Button>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" }, borderRadius: "16px", backgroundColor: "#EDF2F7", boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}>
              <Typography variant="h6" fontWeight="bold" sx={{ color: "#1A202C" }}>
                Insurance Billing
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: "#718096" }}>
                Handle insurance claims seamlessly
              </Typography>
              <Button
                variant="outlined"
                onClick={() => handleNavigate("/advanced-features")}
                sx={{
                  mt: 2,
                  borderColor: "#3182CE",
                  color: "#3182CE",
                  textTransform: "none",
                  borderRadius: "50px",
                }}
              >
                Manage Insurance
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
