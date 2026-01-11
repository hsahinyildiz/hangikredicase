import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import Colors from '../constants/Colors';

interface Props {
    source: ImageSourcePropType;
    focused: boolean;
}

const TabIcon = ({ source, focused }: Props) => {
    return (
        <Image
            source={source}
            style={{
                width: 24,
                height: 24,
                tintColor: focused ? Colors.Primary : Colors.Gray,
            }}
            resizeMode="contain"
        />
    );
};

export default TabIcon;
