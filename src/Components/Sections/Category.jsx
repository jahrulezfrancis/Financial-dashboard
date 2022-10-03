import { Box, Typography, Grid } from "@mui/material";
import Category1 from "../Images/spend.png"
import Category2 from "../Images/caschback.png"
import Category3 from "../Images/spend-trend.png"
import { Stack } from "@mui/system";

export function Categories() {
    return (
        <Stack justifyContent='center' align='start' spacing={-2}>
            <Box p='2em'>
                <Typography pl='.8em' color='white' variant='h5'>Top categories</Typography>
            </Box>
            <Grid container gap={-3}>
                    <img src={Category1} alt='spend trend' />
                    <img src={Category2} alt='spend trend' />
                <Box>
                    <img src={Category3} alt='spend trend' />
                </Box>
            </Grid>
        </Stack>
    )
}