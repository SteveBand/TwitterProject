import React, { useState, useEffect } from 'react';
import { setShowModal } from '../redux/mainglobal';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';


const Closebtn = styled.button`
padding:${(padding) => padding};
color: ${(color) => color};
margin: ${(margin) => margin};
background-color: transparent;
border: none;
font-size: 15px;
height: 25px;
width: 25px;
cursor: pointer;
`

export const CloseBtn = ({ padding, color, margin, SVGElement,}) => {
    const dispatch = useDispatch()

    return (
        <Closebtn
            onClick={() => dispatch(setShowModal(false))}
            padding={padding}
            color={color}
            margin={margin}>
            {SVGElement}
        </Closebtn>  
    );
}