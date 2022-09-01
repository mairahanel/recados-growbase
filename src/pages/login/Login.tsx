import { AccountCircle } from "@mui/icons-material"
import { Box, Button, Card, CardActions, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, InputAdornment, Paper, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { loginUser, LoginUser } from "../../store/modules/login/LoginSlice";
import { CreateUser, createUser } from "../../store/modules/user/UserSlice";

export const Login: React.FC = () => {

    const dispatch = useAppDispatch();
 
    const [name, setName] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const [rPass, setRpass] = useState<string>("");

    const [nameLogin, setNameLogin] = useState<string>("");
    const [passLogin, setPassLogin] = useState<string>("");


    const [open, setOpen] = useState(false);

    const openModal = () => {
    setOpen(true);
    };

    const closeModal = () => {
    setOpen(false);
    };

    function criarUsuario(){
        const usuario: CreateUser = {
            name: name,
            pass: pass,
            Rpass: rPass
        }

        setName("");
        setPass("");
        setRpass("");

        dispatch(createUser(usuario));
    }

    function logar(){
        const login: LoginUser = {
            name: nameLogin,
            pass: passLogin,
        }
        
        setNameLogin("");
        setPassLogin("");

        dispatch(loginUser(login));
    }

    return(
        <Grid container component='main' sx={{ backgroundColor: "#363636" /* "#dda0dd" */ }}>
            <Grid item 
                xs={12} 
                height='100vh' 
                sx={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center" 
                }}>
                <Box>
                    <Card 
                    sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    height: "500px", 
                    width: "600px",
                    backgroundColor: "#D3D3D3"
                    }}>
                        <Grid container 
                        height='50vh' 
                        sx={{ 
                        display: "flex", 
                        justifyContent: "center" 
                        }}>
                        <Grid item xs={12} 
                        sx={{ 
                        display: "flex", 
                        justifyContent: "center", 
                        flexDirection: "row", 
                        alignItems: "start" }}>
                            <Typography variant='h4'>Faça seu login!</Typography>
                        </Grid>
                        <CardActions>
                            <Grid container 
                            sx={{ 
                            display: "flex", 
                            justifyContent: "center" 
                            }}>
                                <Grid item xs={12}>
                                    <TextField 
                                        variant='outlined' 
                                        label='E-mail' 
                                        type='email'
                                        value={nameLogin}
                                        onChange={(e) => setNameLogin(e.target.value)}
                                        sx={{ 
                                        width: "500px", 
                                        marginTop: "40px" 
                                    }}
                                        InputProps={{
                                            endAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle />
                                            </InputAdornment>
                                            ),
                                        }}>
                                    </TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField 
                                        variant='outlined' 
                                        label='Senha' 
                                        type='password'
                                        value={passLogin}
                                        onChange={(e) => setPassLogin(e.target.value)}
                                        sx={{ 
                                        width: "500px", 
                                        marginTop: "20px" 
                                        }} ></TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button 
                                        variant='contained' 
                                        onClick={() => logar()}
                                        sx={{ 
                                        width: "280px", 
                                        marginTop: "50px", 
                                        backgroundColor: "#4169E1" /* "#00FF7F" */, 
                                        color: "white" 
                                        }}>Entrar</Button>
                                </Grid>
                                <Grid item 
                                    xs={12} 
                                    marginTop='20px' 
                                    fontSize='medium'>
                                    <Typography variant='subtitle1'>ou</Typography>
                                    <Typography variant='subtitle2'>
                                        <Button onClick={openModal} size='small' sx={{ color:'black' }}>Cadastre-se</Button>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardActions>
                        </Grid>
                    </Card>
                </Box>
            </Grid>
            <div>
                <Dialog open={open} onClose={closeModal}>
                <DialogTitle sx={{ 
                            display: "flex", 
                            justifyContent: "center" 
                            }}>
                                Crie sua conta</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Para criar uma nova conta, preencha corretamente todos os campos abaixo.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    label="E-mail"
                    type="email"
                    fullWidth
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ marginTop: "30px" }}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    label="Nova senha"
                    type="password"
                    fullWidth
                    variant="outlined"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)} 
                />
                <TextField
                    autoFocus
                    margin="dense"
                    label="Repita sua senha"
                    type="password"
                    fullWidth
                    variant="outlined"
                    value={rPass}
                    onChange={(e) => setRpass(e.target.value)}
                />
                </DialogContent>
                <DialogActions>
                <Button variant='outlined' color='error' onClick={closeModal}>Fechar</Button>
                <Button variant='contained' onClick={()=> criarUsuario()} 
                    sx={{ backgroundColor: "#4169E1" }}>Salvar</Button>
                </DialogActions>
                </Dialog>
            </div>
        </Grid>
    )
}