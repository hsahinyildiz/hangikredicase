import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type CustomSafeAreaViewProps = ViewProps & {
  children: ReactNode;
  edges?: ('top' | 'bottom' | 'left' | 'right')[];
  backgroundColor?: string;
};

const CustomSafeAreaView = ({
  children,
  style,
  edges,
  backgroundColor,
}: CustomSafeAreaViewProps) => {
  const insets = useSafeAreaInsets();
  const defaultEdges = edges === undefined;

  return (
    <View
      style={StyleSheet.compose(
        {
          paddingTop: defaultEdges || edges?.includes('top') ? insets.top : 0,
          paddingBottom: defaultEdges || edges?.includes('bottom') ? insets.bottom : 0,
          paddingLeft: defaultEdges || edges?.includes('left') ? insets.left : 0,
          paddingRight: defaultEdges || edges?.includes('right') ? insets.right : 0,
          backgroundColor: '#FFFFFF',
          flex: 1,
        },
        style,
      )}
    >
      {children}
    </View>
  );
};

export default CustomSafeAreaView;
