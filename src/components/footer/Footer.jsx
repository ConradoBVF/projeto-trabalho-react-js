import { Container, Grid, Box, Link } from "@mui/material";


const Footer = () => {
    return (
        <footer>
            <Box 
            px={{xs: 3, sm: 6}} 
            py={{xs: 3, sm: 6}} 
            bgcolor="text.secondary"
            color="#fff"
            >
                <Container maxWidth='lg'>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Help</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Contact
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Support
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Privacy
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Conta</Box>
                            <Box>
                                <Link href="/cadastro" color="inherit">
                                    Cadastro
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/login" color="inherit">
                                    Login
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Messages</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Backup
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    History
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Roll
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" pt={{xs: 5, sm: 10}} pb={{xs: 5, sm: 10}}>
                        Dunder Mifflin &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer