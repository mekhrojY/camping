import React from 'react'
import { tuning } from '../mock/tuning';
import { Button, ButtonWrapper, CardContainer, ImgWrapper, InfoTitle, InfoWrapper } from '../styles/tuningstyle';

const Tuningvmenu = () => {
    const data = tuning.maindata;
    const dataLength = data.length;
    console.log("data:",data.length )
  return (
    <>
    {
     data.map((value, key) => {
      
      return <CardContainer key={key} $Vmenu>
     <ImgWrapper $Vmenu>
  <img src={value.tuning.image} alt='car-rasm' />
  </ImgWrapper>
  <InfoWrapper $Vmenu>
  <InfoTitle>
  <div>
      <h1>{value.tuning.name || "no data"}</h1>
      <p>{value.tuning.company || "no data"}</p>
      </div>
      <div>
      <h2> {value.tuning.cost} </h2>
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

export default Tuningvmenu
