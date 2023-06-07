import { Typography } from "@mui/material";
import Form from "./components/Form";
import Navbar from "./components/navbar";
import Box from '@mui/material/Box';

function Login() {
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
                    <Form isLogin={true} />
                    <Typography variant="body2" component="p" sx={{ marginTop: '20px', alignItems: 'center', justifyContent: 'center' }}>
                        New to the site? Sign up <a href="/registration">here</a>!
                    </Typography>
                </Box>

            </Box>
        </div>
    </>
}

export default Login;