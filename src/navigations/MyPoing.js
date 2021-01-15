import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export default function MyPoing() {
  return (
    <ViewContainer>
      <Text>마이포잉</Text>
    </ViewContainer>
  );
}

const ViewContainer = styled(View)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
