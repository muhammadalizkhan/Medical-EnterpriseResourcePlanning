import React from "react";
import {
  Box,
  Typography,
  Card,
  Grid,
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
} from "@mui/material";
import { Search, Package, CheckCircle, XCircle } from "lucide-react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

export default function Inventory() {
  const inventoryItems = [
    {
      name: "Surgical Masks",
      category: "PPE",
      stock: 200,
      status: "In Stock",
      expiration: "2024-03-15",
    },
    {
      name: "Gloves",
      category: "PPE",
      stock: 50,
      status: "Low Stock",
      expiration: "2024-06-01",
    },
    {
      name: "Hand Sanitizers",
      category: "Hygiene",
      stock: 0,
      status: "Out of Stock",
      expiration: "2023-12-10",
    },
  ];

  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Items Used",
        data: [50, 70, 60, 90, 100, 120],
        borderColor: "#4C6EF5",
        backgroundColor: "rgba(76, 110, 245, 0.2)",
        tension: 0.4,
        pointRadius: 3,
        pointBackgroundColor: "#4C6EF5",
      },
      {
        label: "Items Restocked",
        data: [40, 60, 80, 70, 110, 130],
        borderColor: "#48BB78",
        backgroundColor: "rgba(72, 187, 120, 0.2)",
        tension: 0.4,
        pointRadius: 3,
        pointBackgroundColor: "#48BB78",
      },
    ],
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#F5F5F5", p: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h5" fontWeight="bold" sx={{ color: "#181B1B" }}>
          Inventory Dashboard
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search Inventory"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search size={18} />
              </InputAdornment>
            ),
          }}
          sx={{ backgroundColor: "#FFFFFF", borderRadius: "8px", width: "250px" }}
        />
      </Box>

      <Grid container spacing={2}>
        {[
          { title: "Total Items", value: "500", color: "#006BFF", icon: <Package size={20} /> },
          { title: "In Stock", value: "300", color: "#48BB78", icon: <CheckCircle size={20} /> },
          { title: "Out of Stock", value: "50", color: "#E53E3E", icon: <XCircle size={20} /> },
          { title: "Low Stock", value: "20", color: "#ECC94B", icon: <Package size={20} /> },
        ].map((metric, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  backgroundColor: metric.color,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#FFFFFF",
                  mr: 2,
                }}
              >
                {metric.icon}
              </Box>
              <Box>
                <Typography variant="body1" fontWeight="bold" sx={{ color: "#181B1B" }}>
                  {metric.title}
                </Typography>
                <Typography variant="h6" fontWeight="bold" sx={{ color: metric.color }}>
                  {metric.value}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2} mt={3}>
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              p: 3,
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h6" fontWeight="bold" sx={{ color: "#181B1B" }}>
                Inventory Trends
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
                Last 6 Months
              </Button>
            </Box>
            <Box height="250px">
              <Line data={chartData} />
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              p: 3,
              backgroundColor: "#4C6EF5",
              color: "#FFFFFF",
              borderRadius: "12px",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Good Evening, John
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              You have done 70% sales today. Check your new badge in your profile.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#FFFFFF",
                color: "#4C6EF5",
                textTransform: "none",
                "&:hover": { backgroundColor: "#EDEDED" },
              }}
            >
              Check Now
            </Button>
          </Card>
        </Grid>
      </Grid>

      <Box mt={3}>
        <Typography variant="h6" fontWeight="bold" sx={{ color: "#181B1B", mb: 2 }}>
          Top Inventory Items
        </Typography>
        <TableContainer
          component={Paper}
          sx={{
            borderRadius: "12px",
            boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                {["Name", "Category", "Stock", "Status", "Expiration Date"].map((header) => (
                  <TableCell key={header}>
                    <Typography fontWeight="bold" sx={{ color: "#181B1B", fontSize: "14px" }}>
                      {header}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {inventoryItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Typography sx={{ color: "#181B1B" }}>{item.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ color: "#6C6C6C" }}>{item.category}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ color: "#181B1B" }}>{item.stock}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{
                        color:
                          item.status === "In Stock"
                            ? "#48BB78"
                            : item.status === "Low Stock"
                            ? "#ECC94B"
                            : "#E53E3E",
                      }}
                    >
                      {item.status}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ color: "#6C6C6C" }}>{item.expiration}</Typography>
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
