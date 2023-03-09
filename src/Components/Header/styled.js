import styled, {css} from "styled-components";

export const Link = styled.div`
  ${(props)=>{
      switch (props.active) {
        case true :
            return css`
              font-size: 3.2em;
              cursor: pointer;
              position: relative;
              opacity: 1;
              &:before {
                content: "";
                position: absolute;
                width: 100%;
                height: 2px;
                bottom: 0;
                background-color: #FFFFFF;
              }`
        default :
            return  css`
              font-size: 3.2em;
              text-decoration: none;
              cursor: pointer;
              position: relative;
              opacity:  0.7;
              `
      }
  }}
`
export const HeaderWrapper = styled.header`
  height: 11vh;
  background-color: #434343;
  color: #FFFFFF;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: HelveticaNeueCyr;
  font-weight: 100;
 
  & a {
    text-decoration: none;
    color: inherit;
  }
  & span  {
    font-size: 3.2em;
  }
`
export const NavigationWrapper = styled.div` 
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 32px;
      @media screen and (max-width:768px ){
        display: none;
      }
`
export const MobileNavigation = styled.div`
  
  align-items: center;
  justify-content: center;
  display: none;
  font-size: 4em;
  @media screen and (max-width:768px ){
    display: flex;
  }
`