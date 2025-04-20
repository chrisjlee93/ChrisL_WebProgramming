import {createTheme } from '@mui/material/styles'
import movieImage from "../../assets/MovieBackground.avif"

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',        // blue
        },
        secondary: {
            main: '#170733',        // pink
        },
        background: {
            default: '#fafafa',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    /* these rules get injected into the global stylesheet */
                    backgroundImage: `url(${movieImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: 'fixed',
                    // backgroundColor: "hotpink",
                    // margin: 0,
                    // padding: 0,
                    minHeight: '100vh,'
                    // position: "sticky",
                },
            },
        },
    },
});

export default theme