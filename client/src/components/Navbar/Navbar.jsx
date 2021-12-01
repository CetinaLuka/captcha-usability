import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Container } from '@mui/material';

export default function Navbar() {
  return (
    <Container maxWidth="md">
      <div style={{
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
        background: 'rgba(0, 0, 0, 0) linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%) repeat scroll 0% 0%',
        marginTop: '20px',
        borderRadius: '6px'
      }}>
        <div style={{ padding: '23px' }}>
            <p
              style={{
                fontSize: '35px',
                color: 'white',
                fontFamily: "'Josefin Sans', sans-serif",
                marginTop: 'auto',
                marginBottom: 'auto',
                marginLeft: '5px',
                textDecoration: 'none'
              }}
            >
              Uporabnost sistemov captcha
            </p>
        </div>
      </div>


    </Container>
  );
}