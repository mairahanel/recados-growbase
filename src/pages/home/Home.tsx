import { Box,  Button,  Dialog,  DialogActions,  DialogContent,  DialogContentText,  DialogTitle,  Fab,  Grid,  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
import { Navbar } from "../../components/Navbar/Navbar";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";


export const Home: React.FC = () => {

    //MODAIS
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const openModalAdd = () => {
        setOpenAdd(true);
    };

    const closeModalAdd = () => {
        setOpenAdd(false);
    };

    const openModalEdit = () => {
        setOpenEdit(true);
    };

    const closeModalEdit = () => {
        setOpenEdit(false);
    };

    return(
            <Box>
                <Navbar />
            <Grid container sx={{ marginTop: "200px", display: "flex", justifyContent: "center" }}>
                <Grid item>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 970 }} aria-label="customized table">
                        <TableHead>
                        <TableRow sx={{ backgroundColor: "#808080" }}>
                            <TableCell >Descrição</TableCell>
                            <TableCell align="left">Detalhamento</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow sx={{ backgroundColor: "#D3D3D3" }}>
                            <TableCell component="th" scope="row">
                                testando descrição
                            </TableCell>
                            <TableCell align="left">testando detalhamento</TableCell>
                            <TableCell align="center">
                                <Button size='small' color='success' onClick={openModalEdit}> <EditIcon /></Button>
                                <Button size='small' color='error'> <DeleteIcon /> </Button>
                            </TableCell>
                            </TableRow>
                            <TableRow sx={{ backgroundColor: "#D3D3D3" }}>
                            <TableCell component="th" scope="row">
                                testando descrição
                            </TableCell>
                            <TableCell align="left">testando detalhamento</TableCell>
                            <TableCell align="center">
                                <Button size='small' color='success' onClick={openModalEdit}> <EditIcon /></Button>
                                <Button size='small' color='error'> <DeleteIcon /> </Button>
                            </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                </Grid>
                <Grid item sx={{ width: "80px", padding: "0", display: "flex", justifyContent: "center" }}>
                    <Fab color="primary" aria-label="add" onClick={openModalAdd}>
                        <AddIcon />
                    </Fab>
                </Grid>

                {/* MODAL DE ADICIONAR TAREFA */}
                <Dialog open={openAdd} onClose={closeModalAdd}>
                    <DialogTitle>Adicionar tarefa</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Para adicionar uma tarefa, preencha os campos corretamente.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Descrição"
                        fullWidth
                        variant="outlined"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Detalhamento"
                        fullWidth
                        variant="outlined"
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={closeModalAdd}>Cancelar</Button>
                    <Button variant="contained" onClick={closeModalAdd}>Salvar</Button>
                    </DialogActions>
                </Dialog>

                {/* MODAL DE EDITAR TAREFA */}
                <Dialog open={openEdit} onClose={closeModalEdit}>
                    <DialogTitle>Editar tarefa</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Para editar a tarefa, preencha os campos corretamente.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Descrição"
                        fullWidth
                        variant="outlined"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Detalhamento"
                        fullWidth
                        variant="outlined"
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={closeModalEdit}>Cancelar</Button>
                    <Button variant="contained" onClick={closeModalEdit}>Salvar</Button>
                    </DialogActions>
                </Dialog>
            </Grid>
            </Box>
    )
}