import React from 'react'
import { caravan } from '../mock/caravan';
import { Button, ButtonWrapper, CarWrapper, CardContainer, ImgWrapper, InfoWrapper } from '../styles/caravanStyle';
import { Link } from 'react-router-dom';

const CaravanHmenu = () => {
  const data = caravan.maindata;
  const dataLength = data.length;
  console.log("data:",data.length )
  return  (
    <CarWrapper>
{
 data.map((value, key) => {
  
    return (
    <>
    <Link to={`${value.id}`} style={{textDecoration:"none", color:"black"}} >
        <CardContainer key={key}>
     <ImgWrapper>
  <img src={value.caravan.image} alt='car-photo' />
  </ImgWrapper>
  <InfoWrapper>
      <h1>{value.caravan.name || "no data"}</h1>
      <p>{value.caravan.company || "no data"}</p>
      <h2> {value.caravan.cost} </h2>
     
     <ButtonWrapper>
      <Button>Order</Button>
      <Button>Compare</Button>
      </ButtonWrapper>
      </InfoWrapper>
      </CardContainer> 
      </Link>
      </>

      );
    
      
     })
    }
    </CarWrapper>
  )
}

export default CaravanHmenu
