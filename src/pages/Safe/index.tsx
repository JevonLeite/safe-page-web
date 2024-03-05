import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  IoReturnDownBackSharp,
  IoLogoReact,
  IoLogoNodejs,
} from 'react-icons/io5'
import { TbBrandTypescript } from 'react-icons/tb'
import { useTheme } from 'styled-components'
import { AxiosError } from 'axios'

import api from '~/services/api'
import { useAccess } from '~/hooks/access'
import { useToast } from '~/hooks/toast'

import { Button, Loading } from '~/components'

import { Container, Card } from './styles'

interface IUser {
  token?: string
}

export default function Safe() {
  const { colors } = useTheme()
  const navigate = useNavigate()
  const { user, addUser, removeUser } = useAccess()
  const { addToast } = useToast()
  const [permGranted, setPermGranted] = useState(false)

  const onValidate = useCallback(
    async (data: IUser | undefined) => {
      try {
        await api.post('/users', data).then((response) => {
          addUser(response.data)
          setPermGranted(true)
        })
      } catch (error: any) {
        if (error instanceof AxiosError) {
          addToast({
            type: 'error',
            title: 'Página indisponível!',
            description: error.response?.data.message,
          })
        }

        navigate('/', { replace: true })
      }
    },
    [addUser, addToast, navigate],
  )

  useEffect(() => {
    const interval = setInterval(() => {
      if (permGranted) {
        onValidate(user)
      }
    }, 60000)

    return () => clearInterval(interval)
  }, [onValidate, permGranted, user])

  useEffect(() => {
    onValidate(undefined)
  }, [onValidate])

  window.addEventListener('beforeunload', () => {
    if (user) {
      removeUser(user)
    }
  })

  return (
    <Container>
      {permGranted ? (
        <>
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
            <div style={{ color: colors.white, fontSize: 35 }}>
              BEM-VINDO À TELA SEGURA
            </div>

            <div style={{ marginTop: 50, color: colors.white, fontSize: 25 }}>
              TECH STACK UTILIZADO
            </div>

            <div
              style={{
                marginTop: 30,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
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
                text="Voltar"
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
