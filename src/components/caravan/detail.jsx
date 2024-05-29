import React from 'react'
import { caravan } from '../mock/caravan';
import { Border, Butoons, ContainerDetail, DetailBg, DivLeft, DivRight, DivRight1, DivRight2, FifthCon, FifthConLeft, FifthConRight, FourthCon, FourthConLeft, FourthConRight, SecondDiv, SeventhCon, SeventhConLeft, SeventhConRight, SixConLeft, SixthCon, SixthConRight, ThirdCon, ThirdConRight, Thirdconleft } from '../styles/caravanDetail';
import { useParams } from 'react-router-dom';

const DetailsCaravan = () => {
    const { id } =useParams();
    const resultdata = caravan.maindata.find (
        (value) => value.id === parseInt(id)
      );
    console.log(resultdata)
    
  return (
    <ContainerDetail> 
    
    <DetailBg style={{backgroundImage: `url(${resultdata.caravan.Bgpic})`, backgroundSize: "cover", height:"700px", backgroundPosition:"center", justifyContent: "center", alignItems:"center", display:"flex", color:"white"}}>
     <h1>{resultdata.caravan.name}</h1>
     <Butoons>
     <button> ADD TO CART </button>
     <button> COMPARE</button>
     </Butoons> 
     </DetailBg>

     <SecondDiv>
      <DivLeft>
    <img src={resultdata.caravan.image} style={{width:"700px"}}/>
      </DivLeft>
      <DivRight>
      <DivRight1>
       <h2>{resultdata.caravan.name}</h2>
       <Border/>
       <p>{resultdata.caravan.nom}</p>
       <p>{resultdata.caravan.nom1}</p>
       <p>{resultdata.caravan.nom3}</p>
        </DivRight1>
        <DivRight2>
        <h2 style={{color:"blue"}}>{resultdata.caravan.price} </h2>
                <Border/>
                <p>{resultdata.caravan.company}</p>
                <p>{resultdata.caravan.people}</p>
                <p>{resultdata.caravan.license}</p>
        </DivRight2>
      </DivRight>
           </SecondDiv>
     <ThirdCon>
     <Thirdconleft>
     <h2>{resultdata.caravan.desc.nom}</h2>
      <p>{resultdata.caravan.desc.comfort}</p>
     </Thirdconleft>
     <ThirdConRight>
     <img src={resultdata.caravan.desc.photo3} style={{height: "500px", width:"100%"}} />
     </ThirdConRight>
     </ThirdCon>

     <FourthCon>
      <FourthConLeft>
       <img src={resultdata.caravan.desc.carinsideImg}  style={{height: "500px", width:"100%"}}/>
      </FourthConLeft>
      <FourthConRight>
      <h2>{resultdata.caravan.desc.nom1}</h2>
    <p>{resultdata.caravan.desc.tidying}</p>
      </FourthConRight>
     </FourthCon>
     
     <FifthCon>
       <FifthConLeft>
    <h2>{resultdata.caravan.desc.nom2}</h2>
        <p>{resultdata.caravan.desc.ventilate}</p>
       </FifthConLeft>
       <FifthConRight>
      <img src={resultdata.caravan.desc.photo4} style={{height: "500px", width:"100%"}}/>
       </FifthConRight>
     </FifthCon>

     <SixthCon>
     <SixConLeft>
     <img src={resultdata.caravan.desc.photo5} style={{height: "500px", width:"100%"}} />
     </SixConLeft>
     <SixthConRight>
     <h2>{resultdata.caravan.desc.nom4}</h2>
    <p>{resultdata.caravan.desc.easyaccesstext}</p>
     </SixthConRight>

     </SixthCon>
   
      <SeventhCon>
        <SeventhConLeft>
        <h2>{resultdata.caravan.desc.nom5}</h2>
        <p>{resultdata.caravan.desc.heatingtext}</p>
        
        </SeventhConLeft>
        <SeventhConRight>
         <img src={resultdata.caravan.desc.photo6} style={{height: "500px", width:"100%"}}/>
        </SeventhConRight>
      </SeventhCon>
   
    </ContainerDetail>
  )
}

export default DetailsCaravan
