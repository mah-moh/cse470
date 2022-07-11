import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function AlertComponent(props) {
    return(
        <Alert severity="error">
            <AlertTitle>{props.text}</AlertTitle>
            <strong>Try again!</strong>
        </Alert>
    )
}