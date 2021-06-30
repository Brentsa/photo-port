import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Gallery from '..';

const mockCurrentCategory = {name: 'portraits', description: "Portraits of people in my life."}

afterEach(cleanup);

describe('Render Gallery', () => {
    //baseline test
    it('Renders component', () => {
        render(<Gallery currentCategory={mockCurrentCategory} />);
    })

    //snapshot test
    it('Matches snapshot', () => {
        const {asFragment} = render(<Gallery currentCategory={mockCurrentCategory} />);
        expect(asFragment()).toMatchSnapshot();
    })

    it('Renders title', () => {
        const {getByTestId} = render(<Gallery currentCategory={mockCurrentCategory} />);
        expect(getByTestId('h1tag')).toHaveTextContent('Portraits');
    })
})
