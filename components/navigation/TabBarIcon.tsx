// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons';
import { IconProps } from '@expo/vector-icons/build/createIconSet';
import React, { ComponentProps } from 'react';

export function TabBarIcon({
  style,
  ...props
}: IconProps<ComponentProps<typeof Ionicons>['name']>) {
  return (
    <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...props} />
  );
}
