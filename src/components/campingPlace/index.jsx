import React, { useState } from 'react'
import { campingPlace } from '../mock/campingPlace';
import { BgWrapper, CatalogWrapper, CheckboxWrapper, Container, CostWrapper, FilterMiniCons, InputStyler, ItemLeftWrapper, ItemRightWrapper, ItemWrapper, SearchandCompare, Wrapper } from '../styles/campingplaces';
import CampVmenu from './vmenu';
import Hmenu from './hmenu';
import hMenu from "../../assets/icons/hMenu.png"
import vMenu from "../../assets/icons/vMenu.png"

const CampingComp = () => {
  const [active, setActive] = useState (false);
  const data = campingPlace.maindata;
  const dataLength = data.length;
  function handleVmenu () {
    setActive (false);
  };
  function handleHmenu () {
    setActive (true);
  };
  return (
    <Container>
    <BgWrapper>
      <p>Bongo</p>
      <h2>Our ranges</h2>
      <h1>Camping Places</h1>
    </BgWrapper>
    <Wrapper>
      <CostWrapper>

       <FilterMiniCons>
        <p>Cost of car</p>
        <ItemWrapper />
        <InputStyler>
          <div>
          <p>From</p>
          <input type='text' />

          </div>
          <div>
          <p>To</p>
          <input type='text' />
          </div>
          </InputStyler>
       </FilterMiniCons>
       <FilterMiniCons>
        <p>Brand</p>
        <ItemWrapper />
        <CheckboxWrapper> <input type='checkbox' /> <p>Aidal</p></CheckboxWrapper>
        <CheckboxWrapper> <input type='checkbox' /> <p>Knal</p></CheckboxWrapper>
        <CheckboxWrapper> <input type='checkbox' /> <p>Escape</p></CheckboxWrapper>
        
        
       </FilterMiniCons>
       <FilterMiniCons>
        <p>Company</p>
        <ItemWrapper />
        <CheckboxWrapper> <input type='checkbox' /> <p>Escape</p></CheckboxWrapper>
        <CheckboxWrapper> <input type='checkbox' /> <p>Aidal</p></CheckboxWrapper>
       </FilterMiniCons>
       <FilterMiniCons>
        <p>License type</p>
        <ItemWrapper />
        <CheckboxWrapper> <input type='checkbox' /> <p>1 year</p></CheckboxWrapper>
        <CheckboxWrapper> <input type='checkbox' /> <p>2 year</p></CheckboxWrapper>
        <CheckboxWrapper> <input type='checkbox' /> <p>1.5year</p></CheckboxWrapper>
       </FilterMiniCons>
       <FilterMiniCons>
        <p>Number of travelers</p>
        <ItemWrapper />
        <CheckboxWrapper> <input type='checkbox' /> <p>2</p></CheckboxWrapper>
        <CheckboxWrapper> <input type='checkbox' /> <p>3-4</p></CheckboxWrapper>
        <CheckboxWrapper> <input type='checkbox' /> <p>5+</p></CheckboxWrapper>
       </FilterMiniCons>
       <FilterMiniCons>
        <p>Location</p>
        <ItemWrapper />
        <CheckboxWrapper> <input type='checkbox' /> <p>Seoul</p></CheckboxWrapper>
        <CheckboxWrapper> <input type='checkbox' /> <p>Korea</p></CheckboxWrapper>
        <CheckboxWrapper> <input type='checkbox' /> <p>Pusan</p></CheckboxWrapper>
        <CheckboxWrapper>
       <SearchandCompare><p>Search</p></SearchandCompare>
       <SearchandCompare $second><p>Compare</p></SearchandCompare>
       </CheckboxWrapper>
         

       </FilterMiniCons>
       
      </CostWrapper>
      <CatalogWrapper>
      <ItemWrapper>
        <ItemLeftWrapper>
        <p>Item </p>
        <p style={{color:"#006DAB"}}>{dataLength}</p>
        </ItemLeftWrapper>
        <ItemRightWrapper>
        <p>Sort By</p>
         <input type='text' placeholder='Select' />
         <input type='text' placeholder='60' style={{width:'50px'}}/>
        <button onClick={handleHmenu}>
           <img src={hMenu} alt='hmenu'/>
           </button>
         <button onClick={handleVmenu} >
          <img src={vMenu} alt='vmenu'/>
          </button>
        </ItemRightWrapper>
      </ItemWrapper> 
      <>{
        active ? <CampVmenu /> : <Hmenu />}</>
     
    
      </CatalogWrapper>
    </Wrapper>
  </Container>
  )
}

export default CampingComp
