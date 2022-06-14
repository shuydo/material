import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";

const GoodsItem = props => {
  const { name, price, poster, setOrder } = props;

  return (
    // <div className="col-12 col-md-6 px-md-2">
    <Grid item xs={12} md={4} sx={{ outline: "1px solid" }} spaicing={2}>
      {/* {} or "" */}
      <Card sx={{height:'100%'}}>
        <CardMedia
          src={poster} //image.img-not working
          component="img" // className="card-img-top"
          alt={name}
          title={name} //
          sx={{ height: 140 }} //
        />
        {/* <div className="card-body"> */}
        <CardContent>
          {/* <h5 className="card-title">{name}</h5> */}
          <Typography variant="5" component="h3">
            {name}
          </Typography>
          {/* <p className="card-text">Цена: {price} руб.</p> */}
          <Typography variant="body1">Цена: {price} руб.</Typography>
          <CardActions>
            <Button
              variant="text" // def & (contained/outlined)
              // className="btn btn-primary"
              onClick={() =>
                setOrder({
                  id: props.id,
                  name: props.name,
                  price: props.price,
                })
              }
            >
              Купить
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default GoodsItem;
