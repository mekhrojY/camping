import React from 'react'
import { useParams } from 'react-router-dom'
import { campcar } from '../../mock/mockdata';
import { Border,  ContainerDetail, DetailBg, DivLeft, DivRight, DivRight1, DivRight2, FifthCon, FifthConLeft, FifthConRight, FourthCon, FourthConLeft, FourthConRight, SecondDiv, SeventhCon, SeventhConLeft, SeventhConRight, SixConLeft, SixthCon, SixthConRight, ThirdCon, ThirdConRight, Thirdconleft } from '../../styles/motordetail';


const DetailsPage = () => {
  const { id } =useParams();
  //console.log(campcar);
  //console.log(id);
  const resultdata = campcar.maindata.find (
    (value) => value.id === parseInt(id)
  );
console.log(resultdata)

  return (
   
   
    <ContainerDetail> 
    
    <DetailBg style={{backgroundImage: `url(${resultdata.car.desc.photo})`, backgroundSize: "cover", height:"700px", backgroundPosition:"center", justifyContent: "center", alignItems:"center", display:"flex", color:"white"}}>
     <h1>Aidal</h1>
     <div>
     <button> ADD TO CART </button>
     <button> COMPARE</button>
     </div> 
     </DetailBg>

     <SecondDiv>
      <DivLeft>
    <img src={resultdata.car.photo2} style={{width:"700px"}}/>
      </DivLeft>
      <DivRight>
      <DivRight1>
       <h2>{resultdata.car.name}</h2>
       <Border/>
       <p>{resultdata.car.nom}</p>
       <p>{resultdata.car.nom1}</p>
       <p>{resultdata.car.nom3}</p>
        </DivRight1>
        <DivRight2>
        <h2 style={{color:"blue"}}>{resultdata.car.price} </h2>
                <Border/>
                <p>{resultdata.car.company}</p>
                <p>{resultdata.car.people}</p>
                <p>{resultdata.car.license}</p>
        </DivRight2>
      </DivRight>
           </SecondDiv>
     <ThirdCon>
     <Thirdconleft>
     <h2>{resultdata.car.desc.nom}</h2>
      <p>{resultdata.car.desc.comfort}</p>
     </Thirdconleft>
     <ThirdConRight>
     <img src={resultdata.car.desc.photo3} style={{height: "500px", width:"100%"}} />
     </ThirdConRight>
     </ThirdCon>

     <FourthCon>
      <FourthConLeft>
       <img src={resultdata.car.desc.carinsideImg}  style={{height: "500px", width:"100%"}}/>
      </FourthConLeft>
      <FourthConRight>
      <h2>{resultdata.car.desc.nom1}</h2>
    <p>{resultdata.car.desc.tidying}</p>
      </FourthConRight>
     </FourthCon>
     
     <FifthCon>
       <FifthConLeft>
    <h2>{resultdata.car.desc.nom2}</h2>
        <p>{resultdata.car.desc.ventilate}</p>
       </FifthConLeft>
       <FifthConRight>
      <img src={resultdata.car.desc.photo4} style={{height: "500px", width:"100%"}}/>
       </FifthConRight>
     </FifthCon>

     <SixthCon>
     <SixConLeft>
     <img src={resultdata.car.desc.photo5} style={{height: "500px", width:"100%"}} />
     </SixConLeft>
     <SixthConRight>
     <h2>{resultdata.car.desc.nom4}</h2>
    <p>{resultdata.car.desc.easyaccesstext}</p>
     </SixthConRight>

     </SixthCon>
   
      <SeventhCon>
        <SeventhConLeft>
        <h2>{resultdata.car.desc.nom5}</h2>
        <p>{resultdata.car.desc.heatingtext}</p>
        
        </SeventhConLeft>
        <SeventhConRight>
         <img src={resultdata.car.desc.photo6} style={{height: "500px", width:"100%"}}/>
        </SeventhConRight>
      </SeventhCon>
   
    </ContainerDetail>
  )
}

export default DetailsPage
