import { Box, Typography } from "@mui/material"
import {useMediaQuery} from "@mui/material"

export default function Footer() {
    const onMobile = useMediaQuery('(max-width: 1000px)')
    return (
        <Box ml={onMobile ? '0em' : '5em'} >
            <Typography color='#5B5B65'> © 2022 7thWeb Tech</Typography>
        </ Box>
    )
}