import React from 'react'
import { campingPlace } from '../mock/campingPlace';
import { Button, ButtonWrapper, CarWrapper, CardContainer, ImgWrapper, InfoWrapper } from '../styles/campingplaces';
import { Link } from 'react-router-dom';

const Hmenu = () => {
    const data = campingPlace.maindata;
  const dataLength = data.length;
  console.log("data:",data.length )
  return (
    <CarWrapper>
    {
     data.map((value, key) => {

      
      return    (
    <>
    <Link to={`${value.id}`} style={{textDecoration:"none", color:"black"}} >
        <CardContainer key={key}>
     <ImgWrapper>
  <img src={value.campingPlace.photo} alt='car-rasm' />
  </ImgWrapper>
  <InfoWrapper>
      <h1>{value.campingPlace.name || "no data"}</h1>
      <p>{value.campingPlace.company || "no data"}</p>
      <h2> {value.campingPlace.cost} </h2>
     
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
