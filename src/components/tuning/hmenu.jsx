import React from 'react'
import { tuning } from '../mock/tuning';
import { Button, ButtonWrapper, CarWrapper, CardContainer, ImgWrapper, InfoWrapper } from '../styles/tuningstyle';

const HmenuT = () => {
    const data = tuning.maindata;
    const dataLength = data.length;
    console.log("data:",data.length )
  return (
    <CarWrapper>
    {
     data.map((value, key) => {
      
      return <CardContainer key={key}>
     <ImgWrapper>
  <img src={value.tuning.image} alt='car-rasm' />
  </ImgWrapper>
  <InfoWrapper>
      <h1>{value.tuning.name || "no data"}</h1>
      <p>{value.tuning.company || "no data"}</p>
      <h2> {value.tuning.cost} </h2>
     
     <ButtonWrapper>
      <Button >Order</Button>
      <Button >Compare</Button>
      </ButtonWrapper>
      </InfoWrapper>
      </CardContainer>
     })
    }
    </CarWrapper>
  )
}

export default HmenuT
