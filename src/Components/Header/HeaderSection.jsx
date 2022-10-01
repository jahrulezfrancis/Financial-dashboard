import { Box, Button, Stack, Typography, IconButton, useMediaQuery } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { ArrowDropDown, } from "@mui/icons-material";
import { RiFilterLine } from "react-icons/ri"
import BTCCard from "../Images/btc-red-yellow.png"
import EURCard from "../Images/eur.png"
import USDCard from "../Images/red-usd-card.png"

export default function HeaderIntro() {
    const onMobile = useMediaQuery('(max-width: 1000px)')
    return (
        <Box>
            <Stack direction='row' flexWrap='wrap' gap={1} justifyContent='space-around' p={2}>
                <Stack flexDirection='row' gap={2}>
                    <Typography variant="h5" sx={{ color: 'white' }}>Overview</Typography>
                    <Button variant="outlined" sx={{ color: "white" }} startIcon={<AddIcon />}>
                        Add Product
                    </Button>
                </Stack>
                <Box>
                    <Button endIcon={<ArrowDropDown />} sx={{ color: 'white' }}>
                        Popular
                    </Button>
                    <IconButton>
                        <RiFilterLine color="white" />
                    </IconButton>
                </Box>
            </Stack>
            <Box sx={{ display: 'flex', flexDirection : onMobile ? 'column' : 'row'  }} spacing={4} width='100%'>
                <Box height='220px' width='500px'>
                    <img src={BTCCard} alt='' />
                </Box>
                <Box height='220px' width='368px'>
                    <img src={EURCard} alt='' />
                </Box>
                <Box height='220px' width='368px'>
                    <img src={USDCard} alt='' />
                </Box>
            </Box>
        </Box >

    )
}