import Button from "@material-ui/core/Button";


interface props {
  buttonName: string;
  buttonFunction: React.MouseEventHandler<HTMLButtonElement>;
}


export default function PageButton({ buttonName, buttonFunction }: props) {
  return (
    <Button
      variant="outlined"
      size="large"
      style={{ border: "2px solid #555555" }}
      onClick={buttonFunction}
    >
      {buttonName}
    </Button>
  );
}
