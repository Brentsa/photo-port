import React from 'react';
import { render, cleanup, getByTestId } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import ContactForm from "..";

afterEach(cleanup);

describe('Contact form renders', () => {
    it('Renders', () => {
        render(<ContactForm/>);
    })

    it('Matches snapshot', () => {
        const {asFragment} = render(<ContactForm/>);
        expect(asFragment).toMatchSnapshot();
    })

    it('Renders h1 and button', () => {
        const {getByTestId} = render(<ContactForm/>);

        expect(getByTestId('contact')).toHaveTextContent('Contact Me')
        expect(getByTestId('button')).toHaveTextContent('Submit')
    })
})