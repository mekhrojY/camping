import { Link } from "react-router-dom";
import styled from "styled-components";
import motorBg from "../../assets/bg/bgimg.png"
export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 20px 40px ;
cursor: pointer;
`;
export const LogoWrapper = styled.div`
flex: 1;
display: flex;
justify-content: center;
`;
export const NavMiddle = styled.div`
flex: 3;
display: flex;
justify-content: space-around;

p{
    color: var(--text, #373737);

font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
`;
export const NavRight = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
`;

export const Navlink = styled(Link)`
color: black;
font-weight: 600;
text-decoration: none;
`;

export const BgWrapper = styled.div`
background-image:url(${motorBg});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
height: 700px;
width:100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: white;
h1{
    font-size: 70px;
}
h2{
    font-size: 27px;
}
p{
    font-size: 18px;
}

`
