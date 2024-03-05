import React from 'react'
import { act, render, screen, waitFor } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import api from '~/services/api'
import AppProvider from '~/hooks'
import { theme } from '../../styles/themes/default'

import Safe from '~/pages/Safe'

interface IMockProps {
  children: React.ReactNode
}

const MockSafe = ({ children }: IMockProps) => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </AppProvider>
    </ThemeProvider>
  )
}

describe('Safe render Page', () => {
  it('show safe page content', async () => {
    jest.spyOn(api, 'post').mockResolvedValue({
      data: { token: 'f889fae8-0f4e-4034-97b6-48f6d9d05160' },
    })

    await act(async () => {
      render(
        <MockSafe>
          <Safe />
        </MockSafe>
      )
    })

    await waitFor(() => {
      expect(screen.queryByTestId('perm-content')).toBeInTheDocument()
    })
  })

  it('restrict safe page content on access', async () => {
    render(
      <MockSafe>
        <Safe />
      </MockSafe>
    )

    expect(screen.queryByTestId('perm-content')).not.toBeInTheDocument()
  })

  it('show validating content on access', async () => {
    render(
      <MockSafe>
        <Safe />
      </MockSafe>
    )

    expect(screen.queryByTestId('no-perm-content')).toBeInTheDocument()
  })
})
