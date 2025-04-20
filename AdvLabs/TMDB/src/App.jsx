import { useState } from 'react'
import SearchAppBar from "./components/NavBar.jsx";
// Landing/Home page for the website
import Landing from "./components/Landing.jsx";
// Now playing/Search movie page
import Results from "./components/Results.jsx";
// All the route handlers to navigate to different componenets and modules
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import {Button} from "@mui/material";
import theme from "./components/ui/Theme.js";
import {CssBaseline, ThemeProvider} from "@mui/material";


function App() {
    const [query, setQuery] = useState("");

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Router>
                <SearchAppBar
                query={query}
                onQueryChange={setQuery}
                />
                <div className="App">

                        {/*/!*    normally we would use an anchor tag*!/*/}
                        {/*    <Link to="/landing">Home</Link>*/}
                    <Routes>
                        <Route path={"/landing"} element={<Landing/>}>
                        </Route>
                        <Route path={"/results"} element={<Results query={query}/>}>
                        </Route>
                    </Routes>
                </div>
            </Router>

        </ThemeProvider>
    )
}

export default App
