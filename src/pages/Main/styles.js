import styled from 'styled-components/native';

import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background: #8A05BE
  padding-top: ${getStatusBarHeight()}px;
`;
