import '@testing-library/jest-native/extend-expect';

jest.mock('@react-native-async-storage/async-storage', () => ({
    setItem: jest.fn(() => Promise.resolve(null)),
    getItem: jest.fn(() => Promise.resolve(null)),
    removeItem: jest.fn(() => Promise.resolve(null)),
    clear: jest.fn(() => Promise.resolve(null)),
}));

jest.mock('react-native-toast-message', () => ({
    show: jest.fn(),
    hide: jest.fn(),
    default: {
        show: jest.fn(),
        hide: jest.fn(),
    },
}));

jest.mock('react-native-gesture-handler', () => {
    const View = require('react-native/Libraries/Components/View/View');
    return {
        GestureHandlerRootView: View,
        Swipeable: View,
        DrawerLayout: View,
        State: {},
        Directions: {},
        TouchableOpacity: View,
        PanGestureHandler: View,
        TapGestureHandler: View,
        LongPressGestureHandler: View,
        NativeViewGestureHandler: View,
        FlingGestureHandler: View,
        RotationGestureHandler: View,
        PinchGestureHandler: View,
    };
});

jest.mock('react-native-bootsplash', () => ({
    hide: jest.fn(),
    show: jest.fn(),
    default: {
        hide: jest.fn(),
        show: jest.fn(),
    },
}));
