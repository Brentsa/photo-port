import Reach from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import PhotoList from '..';

afterEach(cleanup);

describe('PhotoList is rendering', () => {
    it('Renders comonent', () => {
        render(<PhotoList/>);
    })

    it('Matches snapshot', () => {
        const {asFragment} = render(<PhotoList/>);
        expect(asFragment()).toMatchSnapshot();
    })
})