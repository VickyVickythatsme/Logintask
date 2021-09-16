import TextField from "@material-ui/core/TextField";


interface props {
  usernameValue?: string;
  onchange:  (event:React.ChangeEvent<HTMLInputElement>)=>void;
  name:string;
}

function InputUsername(prop: props) {
  return (
    <TextField
      value={prop.usernameValue}
      style={{width:"80%"}}
      label={prop.name}
      variant="outlined"
      onChange={prop.onchange}
    />
  );
}

export default InputUsername;
