import { Typography, Card, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    divBg : {
        minHeight: '100vh',
        
    },
    divTitleSectionTypo: {
        color: '#bbb',
        textTransform: 'uppercase',
        fontSize: 'clamp(3rem, 4vw, 5rem)',
        [theme.breakpoints.up('md')] : {
            maxWidth: '900px',
            textAlign: 'left',
            margin: 'auto',
            
        }
    },
    divTitle: {
        margin: 'auto',
        width: '90%',
        [theme.breakpoints.up('md')] : {
            maxWidth: '900px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            
        }
    },
    divTitleSectionParagraph: {
        textAlign: 'justify',
        margin: '.5em 0',
        [theme.breakpoints.up('md')] : {
            width: '30%'
        }
    },
    divCardStyle: {
        width:  '100%',
        [theme.breakpoints.up('md')] : {
            width: '38%'
        }
        
    },
    divCardImage: {
        height: '450px',
        [theme.breakpoints.up('md')] : {
            height: '500px'
        }
        
    }
}))

export default function About(){
    const classes = useStyles();
    return(
        <div className={classes.divBg}>
            <Typography className={classes.divTitleSectionTypo}>About me</Typography>
           <div className={classes.divTitle}>
                <div className={classes.divCardStyle}>
                    <section>
                        <Card>
                            <CardMedia className={classes.divCardImage} image="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F513343414%2F0x0.jpg%3Ffit%3Dscale" alt="" />
                        </Card>
                    </section>
                </div>
               <section className={classes.divTitleSectionParagraph}>
                   <Typography variant="h4">Hello there...</Typography>
               </section>
                <section className={classes.divTitleSectionParagraph}>
                   <Typography>My name is Oscar Anillo, I am a fullstack developer, I'm currently located in Colombia, South America and I love to code! I will say that both frontend and backend bring joy to my days and I'm certainly proud of all the things that I have accomplished as a developer! I started as a self taught dev, then I went ahead and signed up in codecademy under the Fullstack Developer path back in 2017 and since then I have not finished learning tech languages, my knowledge goes from React, React Native, Gatsby, Next.js along with VUE.js plus backend technologies such as Node, PHP, SQL, C++.<br /> I love to face new challenges, tackle obstacles in my learning process and speak in English since I own a C2 level.</Typography>
               </section>
           </div>
           
            
        </div>
    )
}