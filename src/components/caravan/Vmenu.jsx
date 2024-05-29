import React from 'react'


import { caravan } from '../mock/caravan';
import { Button, ButtonWrapper, CardContainer, ImgWrapper, InfoTitle, InfoWrapper } from '../styles/caravanStyle';

const CaravanVmenu = () => {
  const data = caravan.maindata;
  const dataLength = data.length;
  console.log("data:",data.length )
  return (
    <>
    {
     data.map((value, key) => {
      
      return <CardContainer key={key} $Vmenu>
     <ImgWrapper $Vmenu>
  <img src={value.caravan.image} alt='car-rasm' />
  </ImgWrapper>
  <InfoWrapper $Vmenu>
  <InfoTitle>
  <div>
      <h1>{value.caravan.name || "no data"}</h1>
      <p>{value.caravan.company || "no data"}</p>
      </div>
      <div>
      <h2> {value.caravan.cost} </h2>
      <h2> 5.3</h2>
      </div>
      </InfoTitle>
     
     <ButtonWrapper >
      <Button $Vmenu>Order</Button>
      <Button $Vmenu>Compare</Button>
      </ButtonWrapper>
      </InfoWrapper>
      </CardContainer>
     })
    }
    </>
  )
}

export default CaravanVmenu
