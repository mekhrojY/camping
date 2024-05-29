import React from 'react'
import { usedCar } from '../mock/usedCar';
import { Button, ButtonWrapper, CarWrapper, CardContainer, ImgWrapper, InfoWrapper } from '../styles/usedCarStyle';

const UsedHmenu = () => {
    const data = usedCar.maindata;
  const dataLength = data.length;
  console.log("data:",data.length )
  return (
    <CarWrapper>
    {
     data.map((value, key) => {
      
      return <CardContainer key={key}>
     <ImgWrapper>
  <img src={value.used.image} alt='rasm' />
  </ImgWrapper>
  <InfoWrapper>
      <h1>{value.used.name || "no data"}</h1>
      <p>{value.used.company || "no data"}</p>
      <h2> {value.used.cost} </h2>
     
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

export default UsedHmenu
