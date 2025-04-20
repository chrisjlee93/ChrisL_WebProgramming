import Error from "./Error.jsx"
import theme from "./ui/Theme.js";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Landing = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh', // optional: centers content nicely
                textAlign: 'center',
            }}
        >
            <Typography variant="h3" color="primary">
                Welcome to the Movie Database!
            </Typography>
            <Typography color="primary">
                Browse the current movies by clicking the now playing tab. Once there you can also search for your favorite movies in the search bar at the top of the page
            </Typography>

        </Box>
    );
};
export default Landing