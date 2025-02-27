import styled from 'styled-components';

const DefaultStyledButton = styled.div`
display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;


const VariantStyledButton = styled(DefaultStyledButton)(({variant, theme}) => theme.button.variant[variant])
const SizeStyledButton = styled(VariantStyledButton)(({size, theme}) => theme.button.size[size])

export const StyledButton = SizeStyledButton;