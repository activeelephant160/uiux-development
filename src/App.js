import './App.css';
import * as React from 'react';
import { useState } from "react";
import { ThemeProvider, FormGroup, FormLabel, FormControl, FormControlLabel, RadioGroup, Radio, Container, Grid, Stack, Typography, Toolbar, AppBar, Button, CssBaseline, Checkbox} from "@mui/material";
import { darkTheme } from "./theme";
import SneakerCard from "./components/SneakerCard"
//import CartItem from "./components/Cart"
import sneakerData from "./assets/data.json";


sneakerData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {

  const [cart, setCart] = useState(Array(sneakerData.length).fill(0));
  const [lowTop, setLowTop] = useState(true);
  const [highTop, setHighTop] = useState(true);
  const [plainWhite, setPlainWhite] = useState(true);
  const [colored, setColored] = useState(true);  
  const [sortDirection, setSortDirection] = useState("low-to-high");
  const [cartFilter, setCartFilter] = useState(false); 
  //const [data, setData] = useState(sneakerData);
  
  const alterCart = (item) => {
    const cartArr = [...cart]
    if(item.inCart === 0){
      item.addedToCart = true; 
      cartArr[item.number]++
      item.inCart++
      item.buttonText = "Remove from Cart"
    }
    else if (item.inCart === 1){
      item.addedToCart = false; 
      cartArr[item.number]--
      item.inCart--
      item.buttonText = "Add to Cart"
    }
    setCart(cartArr)
  }


  const onHandleChangeDirection = (event) => {
    setSortDirection(event.target.value)
  }
  
  const onHandleLowTop = (event) => {
    setLowTop(event.target.checked) 
  }

  const onHandleHighTop = (event) => {
    setHighTop(event.target.checked) 
  }

  const onHandlePlainWhite = (event) => {
    setPlainWhite(event.target.checked) 
  }

  const onHandleSetColored = (event) => {
    setColored(event.target.checked) 
  }
  
  const onHandleChangeCart = (event) => {
    setCartFilter(event.target.checked)
  }


  const matchesLowTop = item => {
    // all items should be shown when no filter is selected
    if (lowTop === true){
      return item.type === "Low-Top"
    }
    else{
      return false
    }
  }

  const matchesHighTop = item => {
    // all items should be shown when no filter is selected
    if (highTop === true){
      return item.type === "High-Top"
    }
    else{
      return false
    }
  }

  const matchesPlainWhite = item => {
    // all items should be shown when no filter is selected
    if (plainWhite === true){
      return item.color === "Plain White"
    }
    else{
      return false
    }
  }

  const matchesColored = item => {
    // all items should be shown when no filter is selected
    if (colored === true){
      return item.color === "Color"
    }
    else{
      return false
    }
  }

  const inCart = item => {
    if (cartFilter === true){
      return item.addedToCart;
    }
    else{
      return false;
    }
  }
 
  const matchesFilterType = item => {
    return (matchesHighTop(item) || matchesLowTop(item)) && (matchesPlainWhite(item) || matchesColored(item)) || inCart(item) 
  }

  const matchesSortDirection = (item1, item2) => {
    if(sortDirection === "low-to-high"){
      return item1.price - item2.price
    }
    else{
      return item2.price - item1.price
    }
  }

   const filteredData = sneakerData.filter(matchesFilterType);
   //const filteredData2 = filteredData.filter(inCart);  
   const sortedData = filteredData.sort(matchesSortDirection);
  
  return (
    <div className="App">
    <ThemeProvider theme={darkTheme}>
      <CssBaseline enableColorScheme />
      <Stack>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
              Sneaker Store
            </Typography>
          </Toolbar>
        </AppBar>
        <Stack>
          <h2>Add sneakers to your cart!</h2>
        </Stack>
        <Container>
        <Grid container spacing={2}>
          <Grid item xs={4} sm={3} md={2}>
          <Stack>
            <FormControl>
            <Typography variant="p" sx={{ flexGrow: 1, textAlign:"left"}}>Play around with the filters to find your perfect sneaker!</Typography>
              <FormLabel><h3>Type</h3></FormLabel>
              <FormGroup> 
                <FormControlLabel 
                value="Low-Top" 
                control={<Checkbox checked={lowTop} onChange={onHandleLowTop}/>} 
                label="Low-Top" 
                />
                <FormControlLabel 
                value="High-Top" 
                control={<Checkbox checked={highTop} onChange={onHandleHighTop} />} 
                label="High-Top" />
              </FormGroup>
            </FormControl>
          </Stack>
          <Stack>
            <FormControl>
              <FormLabel><h3>Color</h3></FormLabel>
              <FormGroup>
                <FormControlLabel 
                value="Plain-White" 
                control={<Checkbox checked={plainWhite} onChange={onHandlePlainWhite}/>}  
                label="Plain-White" />
                <FormControlLabel 
                value="Color" 
                control={<Checkbox checked={colored} onChange={onHandleSetColored}/>}
                label="Color" />
              </FormGroup>
            </FormControl>
          </Stack>
          <Stack>
            <FormControl>
              <FormLabel><h3>Other</h3></FormLabel>
              <FormGroup>
              {/* // defaultValue="false" onChange={onHandleChangeCart}> */}
                <FormControlLabel 
                value="false"
                control={<Checkbox checked={cartFilter} onChange={onHandleChangeCart} />}  
                label="Cart" />
                {/* <FormControlLabel 
                value = "false"
                control={<Radio/>}  
                label="Not In Cart" /> */}
              </FormGroup>
              <div style={{textAlign:"left"}}>
                {/* {cart.map((count, index) => count? <CartItem cartItem = {sortedData[index]} count = {count}/> :<></>)} */}
                Total = $
                {(cart.reduce((a,b,index) => {return a + b*sneakerData[index].price},0)).toFixed(2)}
              </div>  
            </FormControl>
          </Stack>
          <Stack>
          <FormControl>
              <FormLabel><h3>Sort by Price</h3></FormLabel>
              <RadioGroup defaultValue="low-to-high" onChange={onHandleChangeDirection}>
                <FormControlLabel 
                value="low-to-high" 
                control={<Radio />} 
                label="Low-To-High" />
                <FormControlLabel 
                value="high-to-low" 
                control={<Radio />} 
                label="High-To-Low" />
              </RadioGroup>
            </FormControl>
          </Stack>
          <Stack sx={{marginTop:"0.5rem"}}>
            <Typography variant="p" sx={{ flexGrow: 1, textAlign:"left"}}>But make sure one filter of Type and Color are selected at all times :) </Typography>
          </Stack>
          </Grid>
          <Grid item xs={8} sm={9} md={10}>
           <Grid container display="flex" justifycontent="center" alignitems="center">
            {sortedData.map((item) => ( // TODO: map bakeryData to BakeryItem components
              <SneakerCard item = {item} key={item.number} alterCart = {alterCart}/> 
            ))}
           </Grid>
          </Grid>
        </Grid>
        </Container>
      </Stack>
      </ThemeProvider>      
    </div>
  );
}
export default App;
