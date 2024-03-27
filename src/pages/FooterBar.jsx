import {AppBar, Container, Box, TextField, Button} from '@mui/material';

export default function FooterBar() {

    return (
        <AppBar position="static">
            <Container maxWidth="xl" style={{ background: '#141414', height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                        color: 'success',
                    }}
                >
                    <TextField fullWidth label="Email" id="standard-basic" variant='standard' />
                </Box>
                <Button variant="contained" color="success" style={{ marginLeft:'25px' }}>
                    Subscribe
                </Button>
            </Container>
            <Container maxWidth="xl" style={{ background: '#121212', height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>
                &copy; 2024 Copyright :  Fake Store API
            </Container>
        </AppBar>
    );
}
