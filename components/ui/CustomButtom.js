import styled from '@emotion/styled';

const CustomButtom = styled.a`
    display: block;
    font-weight: 700;        
    text-transform: uppercase;
    border: 1px solid #d1d1d1;
    padding: .8rem 2rem;
    margin: 0 auto;
    text-align: center;
    align-self: center;    
    background-color: ${ props => props.bgColor ? '#da552f' : 'white' };
    color: ${ props => props.bgColor ? 'white' : '#000' };
    
       
    @media (max-width: 768px){        
        width: 40%;
    }
    /* &:last-of-type{
        @media(min-width: 768px) {
            margin-right: 0;
        }        
    } */
    &:hover{
        cursor: pointer;
    }
`;

export default CustomButtom;