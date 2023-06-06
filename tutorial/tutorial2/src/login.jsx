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
                <Form isLogin={true} />
            </Box>
        </div>
    </>
}

export default Login;