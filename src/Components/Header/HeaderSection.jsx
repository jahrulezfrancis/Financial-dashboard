import { Box, Button, Stack, Typography, IconButton, Grid } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { ArrowDropDown, } from "@mui/icons-material";
import { RiFilterLine } from "react-icons/ri"
import BTCCard from "../Images/btc-red-yellow.png"
import EURCard from "../Images/eur.png"
import USDCard from "../Images/red-usd-card.png"

export default function HeaderIntro() {
    return (
        <Box>
            <Stack direction='row' flexWrap='wrap' gap={1} justifyContent='space-around' p={2}>
                <Stack flexDirection='row' gap={2}>
                    <Typography variant="h5">Overview</Typography>
                    <Button variant="outlined" sx={{ color: "black" }} startIcon={<AddIcon />}>
                        Add Product
                    </Button>
                </Stack>
                <Box>
                    <Button endIcon={<ArrowDropDown />}>
                        Popular
                    </Button>
                    <IconButton>
                        <RiFilterLine />
                    </IconButton>
                </Box>
            </Stack>
            <Grid container >
                <img src={BTCCard} alt='' />
                <img src={EURCard} alt='' />
                <img src={USDCard} alt='' />
            </Grid>
        </Box>

    )
}