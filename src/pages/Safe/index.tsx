import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoReturnDownBackSharp, IoLogoReact, IoLogoNodejs } from 'react-icons/io5'
import { TbBrandTypescript } from 'react-icons/tb'
import { useTheme } from 'styled-components'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import api from '~/services/api'
import { useToast } from '~/hooks/toast'
import queryClient from '~/services/query'

import { Button, Loading } from '~/components'

import { Container, Card } from './styles'

export default function Safe() {
  const { colors } = useTheme()
  const navigate = useNavigate()
  const { addToast } = useToast()

  const { mutateAsync: onAccess, isLoading } = useMutation(
    async () => {
      console.log('Teste 2')
      return api.post('/users').then((response) => response.data)
    },
    {
      onError: (error: any) => {
        console.log('Teste 3')
        if (error instanceof AxiosError) {
          return addToast({
            type: 'error',
            title: 'Página indisponível!',
            description: error.response?.data.message,
          })
        }

        navigate('/', { replace: true })
      },
      onSuccess: () => {
        console.log('Teste 4')
        return navigate('/safe')
      },
      onSettled: async () => {
        await queryClient.invalidateQueries(['users'])
      },
      retry: 3,
    },
  )

  useEffect(() => {
    console.log('Teste 1')
    onAccess()
  }, [onAccess])

  return (
    <Container>
      {isLoading ? (
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
      ) : (
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
      )}
    </Container>
  )
}
