import React, {useState} from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { Button,Dialog,
        DialogActions,
        DialogContent,
        DialogContentText,
        DialogTitle } from '@mui/material'; 
import { CarForm } from '../../components/CarForm';
import CloseIcon from '@mui/icons-material/Close';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Car ID', width: 200 },
    {
        field: 'year',
        headerName: 'Year',
        width: 100,
        editable: true,
    },
    {
        field: 'make',
        headerName: 'Make',
        width: 100,
        editable: true,
    },
    {
        field: 'model',
        headerName: 'Model',
        width: 100,
        editable: true,
    },
    {
        field: 'color',
        headerName: 'Color',
        width: 100,
        editable: true,
    },
    {
        field: 'car_type',
        headerName: 'Car Type',
        width: 100,
        editable: false,
    },
];



export const DataTable =  () => {
    let { carData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [error, setError] = useState(false);
    let [gridData, setData] = useState<GridSelectionModel>([])

    // if a car isnt selected, show error message
    let handleOpen = () => {
        if (gridData[0]) {
            setOpen(true)
        } else {
            setError(true)
        }
    }

    let handleClose = () => {
        setOpen(false)
        setError(false)
    }

    // if a car isnt selected, show error message
    let deleteData = () => {
        if (gridData[0]) {
            serverCalls.delete(`${gridData[0]}`)
            getData()
        } else {
            setError(true)
        }
        
    }

    console.log(gridData)

        return (
            <div style={{ height: 400, width: '100%' }}>
                <h2>Cars In Garage</h2>
                <DataGrid 
                    rows={carData} 
                    columns={columns} 
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection 
                    onSelectionModelChange = {(newSelectionModel) => {setData(newSelectionModel);}}
                    {...carData}  
                />

                <Button onClick={handleOpen}>Update</Button>
                <Button variant="contained" color="error" onClick={deleteData}>Delete</Button>

                {/*Dialog Pop Up begin */}
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Update A Car</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Car id: {gridData[0]}</DialogContentText>
                        <CarForm id={`${gridData[0]}`}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick = {handleClose} color="primary">Cancel</Button>
                    </DialogActions>
                </Dialog>
                <Dialog open={error} onClose={handleClose} aria-labelledby="form-dialog-error">
                    <DialogActions>
                        <CloseIcon onClick={handleClose} color="primary" />
                    </DialogActions>
                    <DialogTitle id="form-dialog-error">Please select a car to make changes.</DialogTitle>
                </Dialog>
            </div>
        );
    }