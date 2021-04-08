import {Typography, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    divBg: {
        height: '100vh',
        backgroundImage: 'url(https://www.vebudovision.com/wp-content/uploads/2020/06/44039332_m-692x500-1.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'relative'
    },
    typographyTitle: {
        color: '#bbb',
        fontSize: 'clamp(3rem, 4vw, 5rem)'
    },
    divContact: {
        width: '90%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid #eee',
        background: 'rgba(80, 139, 179)',
        boxShadow: '3px 5px 10px #111',
        [theme.breakpoints.up('sm')] : {
            maxWidth: '500px'
        }
    },
    textFieldStyle: {
        width: '90%',
        margin: '.5em 0'
    },
    textAreaStyle: {
        width: '90%',
        resize: 'none',
        border: 'none',
        borderBottom: '1px solid #bbb'
    },
    buttonStyle: {
        background: '#303f9f',
        color: '#fff',
        border: 'none',
        padding: '1em 1.5em',
        margin: '.5em 0'
    }
}))

export default function Contact(){
    const classes = useStyles();
    return(
        <div className={classes.divBg}>
            <div className={classes.divContact}>
            <Typography className={classes.typographyTitle}>Contac Me</Typography>
                <form action="mailto:oscarani14@gmail.com" method="POST" autoComplete="off">
                    <TextField variant="standard" label="Your Name" className={classes.textFieldStyle}/>
                    <TextField variant="standard" label="Your Email" className={classes.textFieldStyle} />
                    <textarea className={classes.textAreaStyle} placeholder="Message here"/>
                    <button type="submit" className={classes.buttonStyle}>SEND</button>
                </form>
            </div>
        </div>
    )
}