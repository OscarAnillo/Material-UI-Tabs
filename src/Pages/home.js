import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  divStyle : {
    position: 'relative',
    zIndex: 1,
    height: '100vh',
  },
  divImage: {
    backgroundImage: "url(https://images.pexels.com/photos/5847583/pexels-photo-5847583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
    height: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.up('md')]: {
      backgroundPosition: 'right',
    }

  },
  divText: {
    border: '1px solid #c51162',
    borderRadius: 5,
    width: '90%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.up('md')]:{
      width: '60%',
      top: '40%',
      left: '40%',
      transform: 'translate(-60%, -40%)',
    }

  },
  sectionStyle: {
    padding: '4em 0',
    background: 'rgba(0, 0, 0, 0.6)',
    [theme.breakpoints.up('md')]: {
      background: 'rgba(0, 0, 0, 0.8)'
    }
  },
  typographyTitle: {
    color: '#fff',
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
    textAlign: 'left',
    textTransform: 'uppercase',
    textShadow: '3px 3px 5px #000',
    width: '90%',
    margin: 'auto'
  },
  typographyText: {
    color: '#fff',
    textAlign: 'justify',
    width: '90%',
    margin: '1em auto',
    fontSize: 'clamp(1rem, 5vw, 1.3rem)'
  },
  sectionDiv: {
    width: '60%',
    display: 'flex',
    justifyContent: 'space-between',
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
      maxWidth: '40%',
      marginLeft: '3.5em',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '20%',
    }
  }

}))

export default function Home(){
  const classes = useStyles();

  return(
    <div className={classes.divStyle}>
      <div className={classes.divImage}>
        <div className={classes.divText}>
          <section className={classes.sectionStyle}>
          <Typography className={classes.typographyTitle}>Oscar Anillo Fullstack Web Developer</Typography>
          <Typography className={classes.typographyText}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</Typography>
            <div className={classes.sectionDiv}>
              <Button color="secondary" variant="contained">Catalog</Button>
              <Button color="secondary" variant="contained">Contact</Button>
             </div>
          </section>
        </div>
      </div>
    </div>
  )
}
