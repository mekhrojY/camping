import React from 'react'
import { usedCar } from '../mock/usedCar';
import { Button, ButtonWrapper, CardContainer, ImgWrapper, InfoTitle, InfoWrapper } from '../styles/usedCarStyle';

const UsedVmenu = () => {
    const data = usedCar.maindata;
  const dataLength = data.length;
  console.log("data:",data.length )
  return (
    <> 
       {
     data.map((value, key) => {
      
      return <CardContainer key={key} $Vmenu>
     <ImgWrapper $Vmenu>
  <img src={value.used.image} alt='rasm' />
  </ImgWrapper> 
  <InfoWrapper $Vmenu>  
  <InfoTitle>
  <div>
      <h1>{value.used.name || "no data"}</h1>
      <p>{value.used.company || "no data"}</p>
      </div>
      <div>
      <h2> {value.used.cost} </h2>
      <h2> 5.3</h2>
      </div>
      </InfoTitle>
     
     <ButtonWrapper > 
      <Button >Order</Button>
      <Button >Compare</Button>
      </ButtonWrapper>
      </InfoWrapper>
      </CardContainer>
     })
    }
    
    </>
  )
}

export default UsedVmenu
