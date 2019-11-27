import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

import { COLORS } from '~/styles'

export const ButtonContainer = styled(RectButton)`
  align-items: center;
  padding: 15px 15px;
`

export const ContentText = styled.Text`
  text-transform: uppercase;
`
