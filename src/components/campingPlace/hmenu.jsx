import React from 'react'
import { Button, ButtonWrapper, CarWrapper, CardContainer, ImgWrapper, InfoWrapper } from '../styles/tuningstyle';
import { campingPlace } from '../mock/campingPlace';

const Hmenu = () => {
    const data = campingPlace.maindata;
    const dataLength = data.length;
    console.log("data:",data.length );
  return (
    <CarWrapper>
    {
     data.map((value, key) => {
      
      return <CardContainer key={key}>
     <ImgWrapper>
  <img src={value.car.photo} alt='car-rasm' />
  </ImgWrapper>
  <InfoWrapper>
      <h1>{value.car.name || "no data"}</h1>
      <p>{value.car.company || "no data"}</p>
      <h2> {value.car.cost} </h2>
     
     <ButtonWrapper>
      <Button $Vmenu>Order</Button>
      <Button $Vmenu>Compare</Button>
      </ButtonWrapper>
      </InfoWrapper>
      </CardContainer>
     })
    }
    </CarWrapper>
  )
}

export default Hmenu