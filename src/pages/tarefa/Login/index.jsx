import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

const Login = () => {
    const [login, setLogin ] =userState ('');
    return (
        <Grid item xs={12}>
            <FormControl fullWidth>
              <Input id="Login_username" aria-describedby="Login_username_helper_text" value={Login} 
              onChange={e => { setLogin(e.target.value) }} />
              <FormHelperText id="Login_username_helper_text">Login.</FormHelperText>
            </FormControl>
          
          </Grid>

    );
}

export default Login ;