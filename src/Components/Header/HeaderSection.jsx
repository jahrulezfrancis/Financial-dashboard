import { Box, Button, Stack, Typography, IconButton, useMediaQuery, Grid, Icon } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { ArrowDropDown, } from "@mui/icons-material";
import { RiFilterLine } from "react-icons/ri"
import BTCCard from "../Images/btc-red-yellow.png"
import EURCard from "../Images/eur.png"
import USDCard from "../Images/red-usd-card.png"
import { MdArrowDropUp } from "react-icons/md"




export function Statistics() {
    return (
        <Box>
            <Grid>
                <Stack direction='row' gap={3}>
                    <Box spacing={3}>
                        <Typography variant='h4' color='white'>Income</Typography>
                        <Typography variant='h4' color='white'>$32,134</Typography>
                    </Box>
                    <Box pt='.9em'>
                        <Icon color="white" component={<MdArrowDropUp />} />
                        <Typography variant='h4' color='white'>
                            2.5
                        </Typography>
                    </Box>
                </Stack>
                <Typography variant='p' color='white'>
                    Compared to $21,340 last month
                </Typography>
            </Grid>
        </Box>
    )
}




export default function HeaderIntro() {
    const onMobile = useMediaQuery('(max-width: 1000px)')
    return (
        <Box gap={5}>
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
            <Grid container sx={{ display: 'flex', flexDirection: onMobile ? 'column' : 'row' }} columnSpacing={4} >
                <Box height='220px' width='500px' boxShadow='none'>
                    <img src={BTCCard} alt='' />
                </Box>
                <Box height='220px' width='368px'>
                    <img src={EURCard} alt='' />
                </Box>
                <Box height='220px' width='368px'>
                    <img src={USDCard} alt='' />
                </Box>
            </Grid>
            <Box p='4em'>
                <Statistics />
            </Box>
        </Box >

    )
}
