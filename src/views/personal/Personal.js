import React, { useState } from "react";
import {
  Grid,
  Box,
  Container,
  Avatar,
  Link,
  TextField,
  Button,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Information from "./personal-components/Information";

import tht from "../../assets/images/users/tht_full.jpg";

const avatar_radius = "300px";

const Personal = () => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "Ta Hai Tung",
    email: "tungth@soict.hust.edu.vn",
    dob: "01/01/1999",
    phone: "0987654321",
    workplace: "HUST",
    position: "Principal of SoICT",
  });

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  return (
    <Box maxWidth="sm">
      <Typography variant="h3">Personal Information</Typography>
      <Container
        maxWidth="sm"
        sx={{
          m: 4,
          mt: 8,
          ml: 2,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          "@media (max-width: 600px)": {
            flexDirection: "column",
            alignItems: "center",
            m: 0,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mb: 4,
          }}
        >
          <img
            src={tht}
            alt="Avatar"
            style={{
              width: avatar_radius,
              margin: "10px",
              marginBottom: "20px",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            ml: 8,
          }}
        >
          {editMode ? (
            <>
              <TextField
                label="Name"
                value={formData.name}
                onChange={handleChange("name")}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Email"
                value={formData.email}
                onChange={handleChange("email")}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Date of Birth"
                value={formData.dob}
                onChange={handleChange("dob")}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Phone"
                value={formData.phone}
                onChange={handleChange("phone")}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Place of Work"
                value={formData.workplace}
                onChange={handleChange("workplace")}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Position"
                value={formData.position}
                onChange={handleChange("position")}
                sx={{ mb: 2 }}
              />
            </>
          ) : (
            <>
              <Information title="Name" data={formData.name} />
              <Information title="Email" data={formData.email} />
              <Information title="Date of birth" data={formData.dob} />
              <Information title="Phone" data={formData.phone} />
              <Information title="Place of work" data={formData.workplace} />
              <Information title="Position" data={formData.position} />
            </>
          )}
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={() => setEditMode(!editMode)}
          >
            {editMode ? "Save" : "Edit"}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Personal;
