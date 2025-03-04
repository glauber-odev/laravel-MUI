import { useState, useEffect } from "react";
import { DataGrid, GridToolbar, GridToolbarContainer } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Box, Chip, Typography, Alert } from "@mui/material";
import EditDialog from './EditDialog';

const columns = [
    {
        field: "#",
        headerName: "ID",
        width: 30,
    },
    {
        field: "first_name",
        headerName: "First name",
        width: 130,
    },
    {
        field: "last_name",
        headerName: "Last name",
        width: 200,
    },
    {
        field: "email",
        headerName: "Email",
        width: 130,
    },
    {
        field: "phone_number",
        headerName: "Phone number",
        width: 130,
        renderCell: (params) => {
            return <Chip label={params.value} color="success"></Chip>;
        },
    },
    {
        field: "dt_birthday",
        headerName: "Date of birthday",
        width: 130,
        valueGetter: (value, row) => {
            return new Date(row.dt_birthday).toLocaleDateString("pt-BR");
        },
    },
    {
        field: "national_id",
        headerName: "National ID",
        width: 130,
        renderCell: params => {
            if(params.value == 1 ){
                return <Chip label='Voters ID' color="error"/>
            }
            if(params.value == 2 ){
                return <Chip label="National ID" color="success"/>
            }
            if(params.value == 3 ){
                return <Chip label='Drivers License' color='warning'/>
            }
            if(params.value == 4 ){
                return <Chip label='National Healty InsuranceI' color='info'/>
            }
        }
    },
    {
        field: "fullName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        valueGetter: (value, row) =>
            `${row.first_name || ""} ${row.last_name || ""}`,
    },
    {
        field: "created_at",
        headerName: "Created At",
        width: 130,
        renderCell: params => {
            return (
                <Chip
                    color="primary"
                    size="large"
                    label={new Date(params.value).toLocaleDateString("pt-BR")}
                />
            );
        },
    },
    {
        field: "id",
        headerName: "Actions",
        width: 100,
        renderCell: params=> {
            return <EditDialog params={params} />
        }
    },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({ post, success }) {

    const [rows, setRows] = useState([]);

    useEffect(() => {
        const fetchData = post.map((data, i) => ({
            index: i+1,
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            phone_number: data.phone_number,
            dt_birthday: data.dt_birthday,
            national_id: data.national_id,
            created_at: data.created_at,
            updated_at: data.updated_at,
            id: data.id,
        }));

        setRows(fetchData);
    }, [post]);

    function customToolbar () {
        return (
            <GridToolbarContainer>
                <Box sx={{ p:2, display:'flex'}} >
                    <Typography variant="h4" >Students</Typography>
                </Box>
                {success &&
                    <Alert variant="filled" severity="success">
                    {success}
                    </Alert>
                }
            </GridToolbarContainer>
        )
    }

    return (
        <AuthenticatedLayout>
            <Paper sx={{ height: 400, width: "100%" }}>
                <DataGrid
                    slots = {{ toolbar: customToolbar }}
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ border: 0 }}
                />
            </Paper>
        </AuthenticatedLayout>
    );
}
