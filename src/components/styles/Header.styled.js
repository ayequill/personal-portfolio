import styledComponents from "styled-components";

const HeaderStyle = styledComponents.header` 
width: 100%;
position: fixed;
bottom: 0;
left: 0;
z-index: ${({ theme }) => theme.zIndexStyles.zFixed};
background-color:  ${({ theme }) => theme.colors.bodyColor};

`;
const NavStyle = styledComponents.nav`

height: ${({ theme }) => theme.spacingStyles.headerHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;

`;
const NavLogo = styledComponents.a`
 text-shadow: 1px -2px 2px #00000075, -2px 2px 4px rgba(0,0,0,0.2);
  font-size: 1.3rem;
  color: ${({theme})=> theme.colors.firstColor};
  font-weight: ${({theme})=> theme.fontStyles.fontMedium};
  &:hover {
    color: ${({theme})=> theme.colors.firstColor};
  }

`;
const NavMenu = styledComponents.div`
    @media screen and (max-width:767px){
        position: fixed;
        bottom: -100%;
        left: 0;
        width: 100%;
        background-color: ${({ theme }) => theme.colors.bodyColor};
        padding: 2rem 1.5rem 4rem;
        box-shadow: 0 -1px 4px rgba($color: #000000, $alpha: 0.15);
        border-radius: 1.5rem 1.5rem 0 0;
        transition: 0.3s;
        
    }
`;

const NavList = styledComponents.ul`
display: grid;
  gap: 1.5rem;
grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;
const NavItem = styledComponents.li`


`;
const NavLink = styledComponents.a`
display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.fontStyles.smallFontSize};
  color:${({ theme }) => theme.colors.titleColor};
  font-weight: ${({ theme }) => theme.fontStyles.fontMedium};
  &:hover {
    color: ${({ theme }) => theme.colors.firstColor};
  }
`;

const NavClose = styledComponents.i`
position: absolute;
  bottom: 0.5rem;
  right: 1.3rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme })=> theme.colors.firstColor};
  &:hover {
    color: ${({ theme })=> theme.colors.firstColor};
  }
`

const NavIcon = styledComponents.i`
font-size: 1.2rem;
`

const NavButtons =styledComponents.div`
display: flex;
align-items: center;
`
const ColorMode = styledComponents.i`
font-size: 1.25rem;
color: ${({ theme })=> theme.colors.firstColor};
margin-right: ${({theme})=> theme.spacingStyles.mb1};
  cursor: pointer;
  &:hover {
    color: ${({ theme })=> theme.colors.firstColor};
  }
`
const NavToggle = styledComponents.div`
font-size: 1.1rem;
  cursor: pointer;
  color: ${({ theme })=> theme.colors.firstColor};
  &:hover {
    color: ${({ theme })=> theme.colors.firstColor};
  }
`
const AppIcon = styledComponents.i`

`
export { HeaderStyle, NavStyle, NavLogo, NavMenu, NavList, NavLink, NavItem, NavIcon, NavClose, NavButtons, ColorMode, NavToggle};
