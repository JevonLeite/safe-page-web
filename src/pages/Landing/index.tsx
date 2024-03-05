import { useNavigate } from 'react-router-dom'
import { FaLock } from 'react-icons/fa'
import { useTheme } from 'styled-components'

import { Button } from '~/components'

import { Container } from './styles'

export default function Landing() {
  const { colors } = useTheme()
  const navigate = useNavigate()

  return (
    <Container>
      <div style={{ margin: '40px 0 0 40px' }}>
        <img
          src="https://hubbe.app/wp-content/uploads/2023/09/logo-hubbe-digital-2.png"
          width="300"
          alt="logo"
        />
      </div>

      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ color: colors.white, fontSize: 35 }}>DESAFIO TÉCNICO</div>

        <div style={{ marginTop: 30, color: colors.white, fontSize: 30 }}>
          Objetivo
        </div>

        <div
          style={{
            maxWidth: 600,
            marginTop: 30,
            color: colors.gray,
            fontSize: 20,
            textAlign: 'center',
          }}
        >
          Desenvolver uma aplicação web onde apenas uma pessoa por vez é capaz
          de acessar a tela segura. Teste você mesmo:
        </div>

        <div style={{ marginTop: 60 }}>
          <Button
            text="Acessar Tela Segura"
            icon={FaLock}
            style={{ width: 300, height: 60 }}
            onClick={() => navigate('/safe', { replace: true })}
          />
        </div>
      </div>
    </Container>
  )
}
