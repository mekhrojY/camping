import React from 'react'
import { usedCar } from '../mock/usedCar';
import { Button, ButtonWrapper, CardContainer, ImgWrapper, InfoTitle, InfoWrapper } from '../styles/usedCarStyle';

const Vmenu = () => {
    const data = usedCar.maindata;
  const dataLength = data.length;
  console.log("data:",data.length )
  return (
    <> 
       {
     data.map((value, key) => {
      
      return <CardContainer key={key} $Vmenu>
     <ImgWrapper $Vmenu>
  <img src={value.car.photo} alt='' />
  </ImgWrapper>
  <InfoWrapper $Vmenu>
  <InfoTitle>
  <div>
      <h1>{value.car.name || "no data"}</h1>
      <p>{value.car.company || "no data"}</p>
      </div>
      <div>
      <h2> {value.car.cost} </h2>
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

export default Vmenu