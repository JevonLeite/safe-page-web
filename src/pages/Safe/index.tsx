import { IoReturnDownBackSharp, IoLogoReact, IoLogoNodejs } from 'react-icons/io5'
import { TbBrandTypescript } from 'react-icons/tb'
import { useTheme } from 'styled-components'

import { Button } from '~/components'

import { Container, Card } from './styles'

export default function Safe() {
  const { colors } = useTheme()

  return (
    <Container>
      <div style={{ margin: '40px 0 0 40px' }}>
        <img
          src="https://hubbe.app/wp-content/uploads/2023/09/logo-hubbe-digital-2.png"
          width="300"
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

        <div style={{ color: colors.white, fontSize: 35 }}>
          BEM-VINDO À TELA SEGURA
        </div>

        <div style={{ marginTop: 50, color: colors.white, fontSize: 25 }}>
          TECH STACK UTILIZADO
        </div>

        <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center' }}>
          <Card>
            <TbBrandTypescript size={80} />
          </Card>

          <Card>
            <IoLogoReact size={80} />
          </Card>

          <Card>
            <IoLogoNodejs size={80} />
          </Card>
        </div>

        <div style={{ marginTop: 60 }}>
          <Button
            text='Voltar'
            icon={IoReturnDownBackSharp}
            style={{ width: 200, height: 60 }}
          />
        </div>
      </div>


    </Container>
  )
}
