
import { TextField,} from "@material-ui/core";
interface props{
    passwordValue?:string;
    onchange:  (event:React.ChangeEvent<HTMLInputElement>)=>void;
    name:string;
    onkey: (event:React.KeyboardEvent<HTMLInputElement>)=>void;
}

function InputPassword(prop:props) {

  return (
    <TextField 
      style={{ width: "80%", marginTop: "3%" }}
      label={prop.name}
      variant="outlined"
      value={prop.passwordValue}
      type="password"
      onChange={prop.onchange}
      onKeyUp={prop.onkey}
 />

  );
}

export default InputPassword;