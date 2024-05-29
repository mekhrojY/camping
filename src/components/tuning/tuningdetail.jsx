import React from 'react'
import { useParams } from 'react-router-dom';
import { tuning } from '../mock/tuning';
import { Border, Butoons, ContainerDetail, DetailBg, DivLeft, DivRight, DivRight1, DivRight2, FifthCon, FifthConLeft, FifthConRight, FourthCon, FourthConLeft, FourthConRight, SecondDiv, SeventhCon, SeventhConLeft, SeventhConRight, SixConLeft, SixthCon, SixthConRight, ThirdCon, ThirdConRight, Thirdconleft } from '../styles/tuningdetail';

const DetailTuning = () => {
    const { id } =useParams();
    const resultdata = tuning.maindata.find (
        (value) => value.id === parseInt(id)
      );
    console.log(resultdata)
    
  return ( 
    <ContainerDetail> 
    
    <DetailBg style={{backgroundImage: `url(${resultdata.tuning.desc.photo})`, backgroundSize: "cover", height:"700px", backgroundPosition:"center", justifyContent: "center", alignItems:"center", display:"flex", color:"white"}}>
     <h1>{resultdata.tuning.name}</h1>
     <Butoons>
     <button> ADD TO CART </button>
     <button> COMPARE</button>
     </Butoons> 
     </DetailBg>

     <SecondDiv>
      <DivLeft>
    <img src={resultdata.tuning.campcarpic} style={{width:"700px"}}/>
      </DivLeft>
      <DivRight>
      <DivRight1>
       <h2>{resultdata.tuning.name}</h2>
       <Border/>
       <p>{resultdata.tuning.nom}</p>
       <p>{resultdata.tuning.nom1}</p>
       <p>{resultdata.tuning.nom3}</p>
        </DivRight1>
        <DivRight2>
        <h2 style={{color:"blue"}}>{resultdata.car.price} </h2>
                <Border/>
                <p>{resultdata.tuning.company}</p>
                <p>{resultdata.tuning.people}</p>
                <p>{resultdata.tuning.license}</p>
        </DivRight2>
      </DivRight>
           </SecondDiv>
     <ThirdCon>
     <Thirdconleft>
     <h2>{resultdata.tuning.desc.nom}</h2>
      <p>{resultdata.tuning.desc.comfort}</p>
     </Thirdconleft>
     <ThirdConRight>
     <img src={resultdata.tuning.desc.photo3} style={{height: "500px", width:"100%"}} />
     </ThirdConRight>
     </ThirdCon>

     <FourthCon>
      <FourthConLeft>
       <img src={resultdata.tuning.desc.carinsideImg}  style={{height: "500px", width:"100%"}}/>
      </FourthConLeft>
      <FourthConRight>
      <h2>{resultdata.tuning.desc.nom1}</h2>
    <p>{resultdata.tuning.desc.tidying}</p>
      </FourthConRight>
     </FourthCon>
     
     <FifthCon>
       <FifthConLeft>
    <h2>{resultdata.tuning.desc.nom2}</h2>
        <p>{resultdata.tuning.desc.ventilate}</p>
       </FifthConLeft>
       <FifthConRight>
      <img src={resultdata.tuning.desc.photo4} style={{height: "500px", width:"100%"}}/>
       </FifthConRight>
     </FifthCon>

     <SixthCon>
     <SixConLeft>
     <img src={resultdata.tuning.desc.photo5} style={{height: "500px", width:"100%"}} />
     </SixConLeft>
     <SixthConRight>
     <h2>{resultdata.tuning.desc.nom4}</h2>
    <p>{resultdata.tuning.desc.easyaccesstext}</p>
     </SixthConRight>

     </SixthCon>
   
      <SeventhCon>
        <SeventhConLeft>
        <h2>{resultdata.tuning.desc.nom5}</h2>
        <p>{resultdata.tuning.desc.heatingtext}</p>
        
        </SeventhConLeft>
        <SeventhConRight>
         <img src={resultdata.tuning.desc.photo6} style={{height: "500px", width:"100%"}}/>
        </SeventhConRight>
      </SeventhCon>
   
    </ContainerDetail>
  )
}

export default DetailTuning
