import { Box } from "@mui/system";
import HeaderIntro from "../Header/HeaderSection";
import Navigation, { MobileMenu } from "../Header/Navigation";
import Footer from "../Sections/Footer";

export function Homepage() {
    return (
        <Box sx={{bgcolor: 'black'}}>
            <Navigation />
            <MobileMenu />
            <HeaderIntro />
            <Footer />
        </Box>
    )
}