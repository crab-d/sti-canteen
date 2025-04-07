import { Card, CardMedia, Typography, CardContent } from "@mui/material";

function CardChefs({ name, picture }) {
  return (
    <>
      <Card>
        <CardContent className="p-1" >
          <CardMedia component="img" height="250px" image={picture}  />
          <Typography variant="body1" color="primary" textAlign="center" className="fw-bold w-100 bg-light border shadow-sm">
            {name}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default CardChefs;
