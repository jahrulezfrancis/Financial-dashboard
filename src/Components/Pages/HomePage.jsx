import { Box } from "@mui/system";
import HeaderIntro from "../Header/HeaderSection";
import Navigation from "../Header/Navigation";
import Footer from "../Sections/Footer";

export function Homepage() {
    return (
        <Box sx={{bgcolor: 'black'}}>
            <Navigation />
            <HeaderIntro />
            <Footer />
        </Box>
    )
}