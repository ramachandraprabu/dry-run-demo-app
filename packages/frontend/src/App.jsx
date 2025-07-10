import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  CircularProgress,
  Box,
  Paper,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

function App() {
  const [open, setOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState('#1976d2'); // default primary blue

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpenDialog = (endpoint) => async () => {
    // const port = serviceName === 'A' ? 3001 : 3002;
    // const url = `http://localhost:${port}`;

    const servive = {
      '/api/service-a': 'A',
      '/api/service-b': 'B'
    }[endpoint]

    setDialogTitle(`Response from Dialog ${servive}`);
    setOpen(true);
    setLoading(true);
    setResponse('');

    // Set color based on which button was clicked
    if (servive === 'A') setColor('#1976d2'); // primary blue
    else setColor('#9c27b0'); // secondary purple

    try {
      const res = await fetch(endpoint);
      const text = await res.text();
      setResponse(text);
    } catch (err) {
      setResponse('❌ Error contacting microservice');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: isMobile ? 3 : 5,
          borderRadius: 4,
          width: isMobile ? '90%' : '600px',
          height: isMobile ? 'auto' : '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Box mb={1}>
          <Typography variant="h3" component="div" fontWeight={600}>
            <span style={{ color: '#1976d2' }}>dry-run</span>
            <span style={{ color: '#512da8' }}>-demo-portal</span>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Cloud & Infra Orchestration Testing UI
          </Typography>
        </Box>

        <Box
          display="flex"
          flexDirection={isMobile ? 'column' : 'row'}
          justifyContent="center"
          alignItems="center"
          gap={2}
          mt={3}
        >
          <Button
            fullWidth={isMobile}
            variant="contained"
            color="primary"
            onClick={handleOpenDialog('/api/service-a')}
          >
            OPEN DIALOG A
          </Button>
          <Button
            fullWidth={isMobile}
            variant="contained"
            color="secondary"
            onClick={handleOpenDialog('/api/service-b')}
          >
            OPEN DIALOG B
          </Button>
        </Box>
      </Paper>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: 4,
            backgroundColor: '#fdfdfd',
            boxShadow: '0px 10px 40px rgba(0,0,0,0.1)',
            padding: 2,
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#333',
            pb: 1,
            position: 'relative',
          }}
        >
          {dialogTitle}
          <button
            onClick={() => setOpen(false)}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              color: '#444',
              position: 'absolute',
              top: 12,
              right: 12,
            }}
            aria-label="Close dialog"
          >
            ×
          </button>
        </DialogTitle>

        <DialogContent
          dividers
          sx={{
            minHeight: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fafafa',
            borderRadius: 2,
          }}
        >
          {loading ? (
            <CircularProgress color="primary" />
          ) : (
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                color: color,       // <-- dynamic color here
                fontSize: '1.1rem',
              }}
            >
              {response}
            </Typography>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default App;
