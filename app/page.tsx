import Navbar from "@/components/Navbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Navbar />
        <Typography variant="h1">Home</Typography>
      </Container>
    </Box>
  );
};

export default Home;