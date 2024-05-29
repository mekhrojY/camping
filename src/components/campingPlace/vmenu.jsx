import React from 'react'
import { campingPlace } from '../mock/campingPlace';
import { Button, ButtonWrapper, CardContainer, ImgWrapper, InfoTitle, InfoWrapper } from '../styles/campingplaces';



const CampVmenu = () => {
    const data = campingPlace.maindata;
    const dataLength = data.length;
    console.log("data:",data.length )
  return (
    <>
    {
     data.map((value, key) => {
      
      return <CardContainer key={key} $Vmenu>
     <ImgWrapper $Vmenu>
  <img src={value.campingPlace.photo} alt='car-rasm' />
  </ImgWrapper>
  <InfoWrapper $Vmenu>
  <InfoTitle>
  <div>
      <h1>{value.campingPlace.name || "no data"}</h1>
      <p>{value.campingPlace.company || "no data"}</p>
      </div>
      <div>
      <h2> {value.campingPlace.cost} </h2>
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

export default CampVmenu
