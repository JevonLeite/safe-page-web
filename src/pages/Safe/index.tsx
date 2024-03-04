import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoReturnDownBackSharp, IoLogoReact, IoLogoNodejs } from 'react-icons/io5'
import { TbBrandTypescript } from 'react-icons/tb'
import { useTheme } from 'styled-components'
import { AxiosError } from 'axios'

import api from '~/services/api'
import { useToast } from '~/hooks/toast'
import queryClient from '~/services/query'

import { Button, Loading } from '~/components'

import { Container, Card } from './styles'

interface IUser {
  token?: string
}

export default function Safe() {
  const { colors } = useTheme()
  const navigate = useNavigate()
  const { addToast } = useToast()
  const [user, setUser] = useState<IUser>()
  const [permGranted, setPermGranted] = useState(false)

  const onValidate = useCallback(
    async (data: IUser | undefined) => {
      try {
        console.log('Teste 2.1')
        console.log(data)
        await api.post('/users', data).then((response) => {
          console.log('Teste 2.2')
          console.log(response.data)
          setUser(response.data)
          setPermGranted(true)
        })
      } catch (error: any) {
        console.log('Teste 2.3')
        if (error instanceof AxiosError) {
          console.log('Teste 2.4')
          addToast({
            type: 'error',
            title: 'Página indisponível!',
            description: error.response?.data.message,
          })
        }

        console.log('Teste 2.5')
        navigate('/', { replace: true })
      }
    },
    [addToast],
  )

  useEffect(() => {
    console.log('Teste 3.1')
    const interval = setInterval(() => {
      if (permGranted) {
        onValidate(user)
      }
    }, 60000);

    return () => clearInterval(interval)
  }, [onValidate, user])

  useEffect(() => {
    console.log('Teste 2.1')
    onValidate(undefined)
  }, [onValidate])

  return (
    <Container>
      {permGranted ? (
        <>
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
                onClick={() => navigate('/', { replace: true })}
              />
            </div>
          </div>
        </>
      ) : (
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 200,
          }}
        >
          <Loading loading size="lg" color={colors.primary} />

          <div
            style={{
              marginTop: 20,
              color: colors.white,
              fontSize: 25,
            }}
          >
            Validando
          </div>
        </div>
      )}
    </Container>
  )
}
