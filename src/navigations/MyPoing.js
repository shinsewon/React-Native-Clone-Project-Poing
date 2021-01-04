import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchTest from '../screens/SearchTest';
import styled from 'styled-components/native';

export default function MyPoing() {
  return <SearchTest />;
}

const ViewContainer = styled(View)`
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: blue;
`;
