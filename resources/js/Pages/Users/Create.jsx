import { Box, Grid, TextField, Typography } from "@mui/material";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";




export default function Create() {
    return(
        <div>
            <AuthenticatedLayout>
                <Typography variant='body1'>This is create page</Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="filled-basic" label="Filled" variant="filled" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="standard-basic" label="Standard" variant="standard" />
                        </Grid>
                        <Grid item xs={6}>
                        {/* <Item>xs=8</Item> */}
                        </Grid>
                    </Grid>

            </AuthenticatedLayout>



        </div>
    );
};
