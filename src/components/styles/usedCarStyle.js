import styled from "styled-components"
import usedCarBg  from "../../assets/usedcar/usedcarBg.jpg"


export const Container =styled.div`
display: flex;
flex-direction: column;
`
export const BgWrapper = styled.div`
background-image:url(${usedCarBg});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
height: 600px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: white;
h1{
    
    font-size: 80px;
  }
h2{
    font-size: 35px;
}
p{
    font-size: 25 px;
    
}

`

export const Wrapper = styled.div`
display: flex;
margin-top: 60px;
height: 600px;
padding: 20px 15%;
img{
width: 202.42px;
height: 137.433px;
flex-shrink: 0;

background-color: white;
}
`

export const CostWrapper = styled.div`
flex: 2;
padding: 0px 20px;
display: flex;
flex-direction: column;
margin-top: 10px ;
`
export const FilterMiniCons = styled.div`
display: flex;
flex-direction: column;

p{
    padding: 10px;
    margin-bottom: 5px;
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 18px */
}
`;

export const InputStyler =styled.div`
display: flex;
gap: 20px;
width: 40px;
padding: 20px 0px;
input {
    border: 1px solid #37373799;
    width: 120px;
    height: 40px;
    border-radius: 8px;
    
   color: #006DAB;
    
    
}

`
export const CheckboxWrapper = styled.div`
display: flex;
margin-bottom:10px;
input {
    width: 25px;
  border: 1px solid #666666;
  cursor: pointer;
  margin-right: 10px;
   }
   p{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
   }
`
export const SearchandCompare =styled.div`
border: 1px solid transparent;
width: 100px;
height: 40px;
border-radius: 60px;
margin: 30px 10px;
background-color: ${props => props.$second ? "#FF7A00" : "#006DAB"};

p{
    display: flex;
    justify-content: center;
    padding:7px;
    color: #FFF;

font-family: "Open Sans";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
}


`

export const CatalogWrapper = styled.div`
flex: 8;
`
export const ItemWrapper =styled.div`
display: flex;
border-bottom: 2px solid #37373780;
margin-bottom: 20px;

padding-bottom: 5px;


`
export const ItemLeftWrapper = styled.div`
flex: 1;
display: flex;

p{
    margin-left: 5px;
    font-size: 18px;
    font-weight: 500;
}
`
export const ItemRightWrapper = styled.div`
flex: 1;
display: flex;
justify-content: end;
margin-left: 10px;
align-items: center;
p{
    margin-left: 5px;
    font-size: 18px;
    font-weight: 500; 
   
}
input{
    border-radius: 5px;
    padding: 5px;
    border: 1px solid #37373780;
    margin-left: 10px;
    
}
button{
   width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #37373780;
    margin-left: 10px;
    cursor: pointer;
}
img{
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
}
`

export const CarWrapper = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 15px;

`

export const CardContainer = styled.div`
display: flex;

flex-direction: ${props => props.$Vmenu ? "row" : "column"};
border-radius: 20px;
padding: 15px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
h1{
    font-size: 20px;
}
h2{
    font-size: 20px;
    color: #006DAB;
}
`

export const ImgWrapper = styled.div`

flex: ${props => props.$Vmenu ? "1" : ""};


`
export const InfoWrapper = styled.div`

display: flex;
flex-direction: column;
flex: ${props => props.$Vmenu ? "2" : ""};

`
export const InfoTitle = styled.div`
display: flex;
justify-content: space-between;
`
export const ButtonWrapper = styled.div`
display: flex;

justify-content: space-around;
margin-top: 15px;
:hover {
    color: white;
    background-color: #006DAB;
}
`
export const Button = styled.button`
display: flex;
padding: 8px 15px;
border-radius: 12px;
border: 2px solid #006DAB ;
//width: 100px;
width: ${props => props.$Vmenu ? "350px" : "120px"};
align-items: center;
justify-content: center;
background-color: transparent;
cursor: pointer;

`