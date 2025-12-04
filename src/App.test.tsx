import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

test('renders learn react link', () => {
  render(
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  )
  const linkElement = screen.getByText(/Home/i)
  expect(linkElement).toBeInTheDocument()
})
