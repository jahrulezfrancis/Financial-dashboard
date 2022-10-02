import { Box, Button, Stack, Typography, IconButton, useMediaQuery, Grid, Icon } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { ArrowDropDown, } from "@mui/icons-material";
import { RiFilterLine } from "react-icons/ri"
import BTCCard from "../Images/btc-red-yellow.png"
import EURCard from "../Images/eur.png"
import USDCard from "../Images/red-usd-card.png"
import { MdArrowDropUp } from "react-icons/md"




export function StatisticsTemplate(props) {
    return (
        <Box>
            <Grid  columnSpacing={10}>
                <Stack direction='row' gap={3}>
                    <Box spacing={3}>
                        <Typography variant='h5' color='white'>{props.type}</Typography>
                        <Typography variant='h5' color='white'>{props.amount}</Typography>
                    </Box>
                    <Box pt='.5em'>
                        <Icon color="white" component={MdArrowDropUp} />
                        <Typography variant='h6' color='white'>
                            {props.increaseNumber}
                        </Typography>
                    </Box>
                </Stack>
                <Typography variant='p' color='white'>
                    {props.bottomMessage}
                </Typography>
            </Grid>
        </Box>
    )
}


export function Statistics() {
    return (
        <Box>
            <Grid container gap='3em'>
                <StatisticsTemplate type='Income'
                    amount='$33,134' increaseNumber='2.5%'
                    bottomMessage='Compared to $21,340 last month'
                />
                <StatisticsTemplate type='Expense'
                    amount='$4,541' increaseNumber='2.5%'
                    bottomMessage='Compared to $21,340 last month'
                />
                <StatisticsTemplate type='Cashback'
                    amount='$1.324' increaseNumber='4.5%'
                    bottomMessage='Compared to $21,340 last month'
                />
                <StatisticsTemplate type='Monthly Turnover'
                    amount='$87,324' increaseNumber='31%'
                    bottomMessage='Compared to $21,340 last month'
                />
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
