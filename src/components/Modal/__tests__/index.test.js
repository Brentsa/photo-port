import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Modal from '..';

afterEach(cleanup);

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
}

const mockSetModalIsOpen = jest.fn();

describe('Modal component renders', ()=>{
    it('Renders modal', () => {
        render(<Modal currentPhoto={currentPhoto} setIsModalOpen={mockSetModalIsOpen}/>);
    });

    it('Matches snapshot', () => {
        const {asFragment} = render(<Modal currentPhoto={currentPhoto} setIsModalOpen={mockSetModalIsOpen}/>);
        expect(asFragment).toMatchSnapshot();
    });
});

describe('Click Event', () => {
    it('calls onClose handler', () => {
        const {getByText} = render(<Modal currentPhoto={currentPhoto} setIsModalOpen={mockSetModalIsOpen}/>);
        fireEvent.click(getByText('Close this modal'));
        expect(mockSetModalIsOpen).toHaveBeenCalled();
    })
})