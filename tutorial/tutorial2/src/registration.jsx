import Form from "./components/Form";
import Navbar from "./components/navbar";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";


function Register() {
    return <>
        <div style={{ backgroundColor: '#d9d9d9', minHeight: '100vh' }}>
            <Navbar />
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="calc(100vh - 64px)"
            >
                <Box sx={{ gap: '20px', textAlign: 'center' }}>
                    <Form isLogin={false} />
                    <Typography variant="body2" component="p" sx={{ marginTop: '20px', alignItems: 'center', justifyContent: 'center' }}>
                        Already Signed up? Sign in <a href="/">here</a>!
                    </Typography>
                </Box>
            </Box>
        </div>

    </>
}

export default Register;

/** */