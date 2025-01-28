import React, { useState } from 'react';
import axios from 'axios';
import { Button, Typography } from '@mui/material';

const ConnectToJDE = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleConnectToJDE = async () => {
    const name = "Ashid"; // Example name to send in body

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // Sending the data in the body, not as query parameters
      const response = await axios.post('http://127.0.0.1:8000/jde/call-jde-orchestrator/', {
        name: name,
      });

      setResult(response.data);
    } catch (err) {
      setError("Failed to connect to JDE Orchestrator.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Connect to JDE 
      </Typography>
      <Button variant="contained" color="primary" onClick={handleConnectToJDE}>
        Call Orchestrator
      </Button>

      {loading && <Typography>Loading...</Typography>}
      {result && <Typography>{JSON.stringify(result)}</Typography>}
      {error && <Typography color="error">{error}</Typography>}
    </div>
  );
};

export default ConnectToJDE;
