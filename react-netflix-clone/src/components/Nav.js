import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'

const StyledNav = styled.nav`
    background: ${props => props.show ? '#111' : 'inherit'};
    position: fixed;
    top: 0;
    width: 100%;
    height: 30px;
    z-index: 1;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition-timing-function: ease-in;
    transition: all 0.5s;
`;

const Logo = styled.img`
    position: fixed;
    left: 40px;
    width: 80px;
    object-fit: contain;
`;

const Avatar = styled.img`
    position: fixed;
    right: 40px;
    width: 30px;
    object-fit: contain;
`;

const Nav = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setShow(true);
            } else {
                setShow(false);
            }
        })
        return () => {
            window.removeEventListener('scroll', () => {

            });
        }
    }, []);
  return (
    <StyledNav show={show}>
        <Logo 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" 
            alt="Netflix Logo" 
            onClick={() => window.location.href = '/'} 
        />
        <Avatar 
            src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
            alt="User logged" 
        />
    </StyledNav>
  )
}


export default Nav