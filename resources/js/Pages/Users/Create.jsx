import {
    Box,
    Grid,
    Paper,
    TextField,
    Container,
    Button,
    Typography,
    MenuItem,
} from "@mui/material";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { ArrowBack, Save } from "@mui/icons-material";
import { useForm } from "@inertiajs/react";

const items = [
    { text:'Voters ID', value:'VID' },
    { text:'National ID', value:'NID' },
    { text:'Drivers License', value:'DLS' },
    { text:'National Healty Insurance', value:'NHI' }
];


export default function Create() {

    const { data, setData , processing, errors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        dob: '',
        national_id: '',
    });

    return (
        <AuthenticatedLayout>
            <Container
                sx={{
                    width: "700px",
                    maxWidth: "100%",
                    padding: "40px",
                    backgroundColor: "rgba(255,255,255)",
                    borderRadius: 2,
                }}
                component={Paper}
            >
                <Typography align="center" mb={2} variant="h5">
                    Create User
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            name="first_name"
                            value={data.first_name}
                            onChange={setData}
                            type="text"
                            id="First-Name"
                            label="First name"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="last_name"
                            value={data.last_name}
                            type="text"
                            id="Last-Name"
                            label="Last name"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="first_name"
                            value={data.email}
                            type="email"
                            id="Email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="phone"
                            value={data.phone}
                            type="phone"
                            id="Phone-Number"
                            label="Phone Number"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="dob"
                            value={data.dob}
                            type="date"
                            id="dob"
                            label="Date of Birthday"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="national_id"
                            value={data?.national_id ?? ''}
                            id="NationId"
                            label="National ID"
                            variant="outlined"
                            fullWidth
                            select
                            onChange={(e)=>setData('national_id', e.target.value)}
                        >
                            {
                            items?.map( (item, i) => {
                                return <MenuItem key={i} value={item.value}>{item?.text}</MenuItem>
                            })}
                        </TextField>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            startIcon={<ArrowBack />}
                            variant="contained"
                            color="error"
                            fullWidth
                        >
                            Back
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            startIcon={<Save />}
                            variant="contained"
                            color="success"
                            fullWidth
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </AuthenticatedLayout>
    );
}
