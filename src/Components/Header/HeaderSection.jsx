import { Box, Button, Stack, Typography, IconButton } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { ArrowDropDown } from "@mui/icons-material";
import { RiFilterLine } from "react-icons/ri"

export default function HeaderIntro() {
    return (
        <Box>
            <Stack direction='row' flexWrap='wrap' gap={1}>
                <Box>
                    <Typography variant="h5">Overview</Typography>
                    <Button variant="outlined" sx={{ color: "black" }} startIcon={<AddIcon />}>
                        Add Product
                    </Button>
                </Box>
                <Box>
                    <Button endIcon={<ArrowDropDown />}>
                        Popular
                    </Button>
                    <IconButton>
                        <RiFilterLine />
                    </IconButton>
                </Box>
            </Stack>
        </Box>

    )
}