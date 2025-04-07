import { Card, CardContent, Typography } from "@mui/material"

const CardAbout = ({ title, subtitle}) => {
    return <>
        <Card className="m-5">
            
            <CardContent>
                <Typography variant="h5" component="h2" color="primary" gutterBottom sx={{
                    fontWeight: "bold"
                }} > 
                    {title}
                </Typography>
                <hr></hr>
                <Typography variant="body2" color="text.secondary">
                    {subtitle}
                </Typography>
            </CardContent>
        </Card>
    </>
        
    
};
export default CardAbout;