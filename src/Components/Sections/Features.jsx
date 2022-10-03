import { Box, Button, Grid, IconButton, Typography } from "@mui/material"
import { MdAdd } from "react-icons/md"
import { BsDot } from "react-icons/bs"


function ButtonTemp(props) {
    return (
        <Grid>
            <IconButton sx={{ bgcolor: '#1E1E24', borderRadius: '2em', margin: '.4em' }}>
                <BsDot fontSize='1.5em' color={props.color} />
                <Typography pr='.5em' color='white'>{props.title}</Typography>
                <Typography color='white' fontWeight='bold' pr='.5em'>{props.price}</Typography>
            </IconButton>
        </Grid>
    )
}


export function Features() {
    return (
        <Box>
            <Grid container alignItems='center' >
                <Box>
                    <Typography color='white' variant="p">Fast payment</Typography>
                </Box>
                <Button sx={{ bgcolor: '#1E1E24', borderRadius: '4em', color: "white", height: '4em', margin: '1em' }}>{<MdAdd />}</Button>
                <ButtonTemp color='blue' title='Training' price='$650' />
                <ButtonTemp color='#FFF736' title='Internet' price='$45' />
                <ButtonTemp color='#62F783' title='Gaz Station' price='$135' />
                <ButtonTemp color='#FF8743' title='Cinema' price='$15' />
                <ButtonTemp color='#62F783' title='Clothes' price='$700' />
                <ButtonTemp color='#A162F7' title='Coffee' price='$50' />
            </Grid>
        </Box>
    )
}