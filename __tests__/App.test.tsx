import { render, screen } from '@testing-library/react'
import App from '../components/App'

describe('Footer App', () => {
  it('renders footer component', () => {
    render(<App />)
    expect(document.body).toBeInTheDocument()
  })
})
