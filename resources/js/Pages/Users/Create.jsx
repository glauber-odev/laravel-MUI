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
import { useState } from "react";

const items = [
    { text: "Voters ID", value: 1 },
    { text: "National ID", value: 2 },
    { text: "Drivers License", value: 3 },
    { text: "National Healty Insurance", value: 4 },
    // { text:'Voters ID', value:'VID' },
    // { text:'National ID', value:'NID' },
    // { text:'Drivers License', value:'DLS' },
    // { text:'National Healty Insurance', value:'NHI' }
];

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        dt_birthday: "",
        national_id: "",
    });

    const [message, setMessage] = useState("");

    function handleForm() {
        post(route("poststudents"), {
            onSuccess: () => {
                setMessage("Succesfully posted!");
            },
        });
    }

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
                <Typography align="center" mb={2} variant="h5">
                    {message}
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            name="first_name"
                            value={data.first_name}
                            type="text"
                            id="First-Name"
                            label="First name"
                            variant="outlined"
                            fullWidth
                            onChange={(e) =>
                                setData("first_name", e.target.value)
                            }
                            error={!!errors.first_name}
                            helperText={errors.first_name}
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
                            onChange={(e) =>
                                setData("last_name", e.target.value)
                            }
                            error={!!errors.last_name}
                            helperText={errors.last_name}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="email"
                            value={data.email}
                            type="email"
                            id="Email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            onChange={(e) => setData("email", e.target.value)}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="phone_number"
                            value={data.phone_number}
                            type="text"
                            id="Phone-Number"
                            label="Phone Number"
                            variant="outlined"
                            fullWidth
                            onChange={(e) =>
                                setData("phone_number", e.target.value)
                            }
                            error={!!errors.phone_number}
                            helperText={errors.phone_number}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="dt_birthday"
                            value={data.dt_birthday}
                            type="date"
                            id="dt_birthday"
                            label="Date of Birthday"
                            variant="outlined"
                            fullWidth
                            onChange={(e) =>
                                setData("dt_birthday", e.target.value)
                            }
                            error={!!errors.dt_birthday}
                            helperText={errors.dt_birthday}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="national_id"
                            value={data?.national_id ?? ""}
                            id="NationId"
                            label="National ID"
                            variant="outlined"
                            fullWidth
                            select
                            onChange={(e) =>
                                setData("national_id", e.target.value)
                            }
                            error={!!errors.national_id}
                            helperText={errors.national_id}
                        >
                            {items?.map((item, i) => {
                                return (
                                    <MenuItem key={i} value={item.value}>
                                        {item?.text}
                                    </MenuItem>
                                );
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
                            onClick={handleForm}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </AuthenticatedLayout>
    );
}
