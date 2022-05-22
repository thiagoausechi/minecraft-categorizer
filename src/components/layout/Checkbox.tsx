import styled from "styled-components";

import Check from "../../assets/img/check.png";

const Indicator = styled.div`
    position: absolute;
    
    cursor: pointer;

    top: 3px;
    left: 0;

    height: 30px;
    width: 30px;
    
    background: #999 url('https://i.ibb.co/rb2TWXL/bgbtn.png') center / cover;
	image-rendering: pixelated;
    
    border: 2px solid #000000;

    &:before
    {
        content: "";
        display: none;
        background-color: rgb(38 38 38 / 45%);
        width: 26px;
        height: 26px;
    }

    &:after
    {
        content: "";
        display: none;
        background-image: url(${Check});
        background-size: 34px 34px;
        background-repeat: no-repeat;
        width: 34px;
        height: 34px;
        position: absolute;
        top: -4px;
        left: -4px;
    }
`;

const Control = styled.label`
    display: flex;
    position: relative;
    align-items: center;
    height: 34px;
    
    cursor: pointer;

    padding-left: 40px;
    padding-top: 1px;

    input
    {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    span
    {
        align-items: center;
    }
    
    input:not(:checked) ~ ${Indicator}
    {
        :before
        {
            display: block;
        }
    }

    input:checked ~ ${Indicator}
    {
        box-shadow:
            inset -2px -4px #0006,
            inset 2px 2px #FFF7;

        :after
        {
            display: block;
        }
    }
`;

interface Props
{
    label: string
    checked: boolean
    onChange: any
}

const Checkbox: React.FC<Props> = ({ label, checked, onChange }) => 
{
    return (
        <Control>
            <input type="checkbox" checked={checked} onChange={onChange} />
            <span>{label}</span>
            <Indicator />
        </Control>
    );
}

export default Checkbox;