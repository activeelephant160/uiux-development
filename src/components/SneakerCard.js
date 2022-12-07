import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { alignProperty } from '@mui/material/styles/cssUtils';

function SneakerCard(props) {
  const item = props.item;
  return (
    <div className="SneakerCard">
    <Grid item style={{ margin: "0.5rem"}}>
    <Card style= {{ minHeight:"250px", minWidth:"275px", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <CardContent>
        <h2>{item.brand}</h2>
        <h3>{item.name}</h3>
        <CardMedia component="img" image={item.image} style={{width: "220px", height: "200px"}} alt="Shoe Image" title="CardMedia Image Example"/>
        <div display="flex" flex-direction="column" justify-content="space-evenly">
          <h4>{item.color}</h4>
          <h4>{item.type}</h4>
        </div>
          <h2>${item.price}</h2>
        <div display="flex" flex-direction="row" justify-content="space-between">
          <h3>Number in Cart: {item.inCart} </h3>
          <CardActions>
              <Button size="small" variant="contained" onClick={() => props.alterCart(item)}> {item.buttonText} </Button>
              {/* <button onClick={() => props.addToCart(props.index)}>Add to Cart</button> */}
          </CardActions>
        </div>
      </CardContent>
    </Card>
    </Grid>
    </div>
  );
};

export default SneakerCard;