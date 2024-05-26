import React from 'react'
import { Button, ButtonWrapper, CarWrapper, CardContainer, ImgWrapper, InfoWrapper } from '../styles/motorStyle'
import { campcar } from '../mock/mockdata';
import { Link } from 'react-router-dom';

const Hmenu = () => {
  const data = campcar.maindata;
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
  <img src={value.car.photo} alt='car-photo' />
  </ImgWrapper>
  <InfoWrapper>
      <h1>{value.car.name || "no data"}</h1>
      <p>{value.car.company || "no data"}</p>
      <h2> {value.car.cost} </h2>
     
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

export default Hmenu
