import React from "react";
import logo from "./image/logo.png";
import BoxToday from "./components/boxToday";
import BoxNew from "./components/boxNew";
import BoxTheNext16Days from "./components/boxTheNext16Days";

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function App() {

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    return (
        <Box>
            <Box sx={{ p: 0.5, bgcolor: '#ffc107', display: 'flex' }}>
                <Box sx={{ display: 'flex' }}>
                    <img src={logo} height="50px" width="50px" />
                    <Box sx={{ mt: 1.8, ml: 0.5 }}>آب و هوای امروز</Box>
                </Box>
                {/* <Box sx={{ color: "#fff", fontSize: "19px", ml: 63, mt: 1.5 }}>
                    <Typography>{year}.{month}.{day}</Typography>
                </Box> */}
            </Box>
            <Container fixed>
                <BoxNew />
                <br/>
                <BoxToday />
                <br/>
                <BoxTheNext16Days/>
            </Container>
        </Box >
    );
}

export default App;