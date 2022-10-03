import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import Category1 from "../Images/spend.png"
import Category2 from "../Images/caschback.png"
import Category3 from "../Images/spend-trend.png"
import { Stack } from "@mui/system";

export function Categories() {
    const onMobile = useMediaQuery('(max-width: 1000px)')
    return (
        <Stack justifyContent='space-around' width='100%'spacing={1}>
            <Box p='2em 1em'>
                <Typography textAlign={onMobile ? 'center' : 'start'} color='white' variant='h5'>Top categories</Typography>
            </Box>
            <Grid container spacing={3} justifyContent='center'>
                    <img src={Category1} alt='spend trend' />
                    <img src={Category2} alt='spend trend' />
                    <img src={Category3} alt='spend trend' />
            </Grid>
        </Stack>
    )
}