import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { useState } from "react";

interface props{
    passwordValue?:string;
    onchange:  (event:React.ChangeEvent<HTMLInputElement>)=>void;
    name:string;
}

function InputPassword(prop:props) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  return (
    <TextField 
      style={{ width: "80%", marginTop: "3%" }}
      label={prop.name}
      variant="outlined"
      value={prop.passwordValue}
      onChange={prop.onchange}
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default InputPassword;