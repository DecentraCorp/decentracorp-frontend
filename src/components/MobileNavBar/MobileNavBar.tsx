import { NavLink } from 'react-router-dom';
import Logo from '../../assets/DBlogo.svg';
import {Wallet} from '../Wallet/Wallet';
import {
    StyledBurger,
    Div,
    Wrapper,
    StyledMenu,
    MenuLink,
    LogoWrapper,
    LogoMenuWrapper,
    WalletBtn
} from './Style';

interface MobileMenuProps {
    open: boolean;
    setOpen: any;
}

export function MobileNavBar({open, setOpen}: MobileMenuProps) {
    

    return (
        <Wrapper>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <Div open={open} />
            <Div open={open}/>
            <Div open={open}/>
        </StyledBurger>
        <StyledMenu open={open}>
                <LogoMenuWrapper src={Logo} alt='' />
                <NavLink to='/bank' style={{marginBottom: '2em'}}>
                    <MenuLink>
                        DecentraStock
                    </MenuLink>
                </NavLink>
                <NavLink to='/membership' style={{marginBottom: '2em'}}>
                    <MenuLink>
                        Membership
                    </MenuLink>
                </NavLink>
                <NavLink to='/dao' style={{marginBottom: '2em'}}>
                    <MenuLink>
                        DecentraCorp DAO
                    </MenuLink>
                </NavLink>
                <Wallet />
            </StyledMenu>
            <LogoWrapper src={Logo} alt='' />
        </Wrapper>
    )
}