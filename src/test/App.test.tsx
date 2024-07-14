import {render, screen} from '@testing-library/react'

import App from "../App.tsx";
import {expect} from "vitest";

it('should have hello world', () => {
    render(<App/>)
    const messages = screen.queryByText(/bower search/i)
    expect(messages).toBeVisible()
});