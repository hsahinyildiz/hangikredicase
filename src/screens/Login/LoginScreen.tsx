import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../components/Input';
import Button from '../../components/Button';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import { useAppDispatch } from '../../store/hooks';
import { loginSuccess } from '../../store/slices/authSlice';
import { saveSession } from '../../utils/storage';
import Toast from 'react-native-toast-message';
import { Metrics } from '../../constants/Metrics';
import { loginSchema } from '../../validation/loginSchema';
import Colors from '../../constants/Colors';

interface Props {
  onClose: () => void;
}

const LoginScreen = ({ onClose }: Props) => {
  const dispatch = useAppDispatch();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const onSubmit = (data: any) => {
    dispatch(loginSuccess({ email: data.email }));
    saveSession({ isLoggedIn: true, user: { email: data.email } });
    onClose();
    Toast.show({
      type: 'success',
      text1: 'Giriş başarılı, hoş geldiniz.'
    });
  };

  return (
    <CustomSafeAreaView>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.view}>
            <View style={styles.imageView}>
              <Image
                source={require('../../assets/logo.png')}
                style={{ width: Metrics.logoSize, height: Metrics.logoSize / 2 }}
                resizeMode="contain"
              />
              <TouchableOpacity style={styles.closeButton} activeOpacity={0.7} onPress={onClose}>
                <Image
                  source={require('../../assets/close.png')}
                  style={styles.closeIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Hoş Geldiniz</Text>
            <Text style={styles.subtitle}>Lütfen giriş bilgilerinizi girin</Text>
            <View style={styles.form}>
              <Text style={styles.label}>E-mail</Text>
              <Controller
                control={control}
                name="email"
                defaultValue=""
                render={({ field }) => (
                  <>
                    <Input
                      ref={emailRef}
                      value={field.value}
                      onChangeText={field.onChange}
                      placeholder="email@example.com"
                      returnKeyType="next"
                      keyboardType='email-address'
                      onSubmitEditing={() => passwordRef.current?.focus()}
                    />
                    {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
                  </>
                )}
              />
              <Text style={[styles.label, { marginTop: 14 }]}>Şifre</Text>
              <Controller
                control={control}
                name="password"
                defaultValue=""
                render={({ field }) => (
                  <>
                    <Input
                      ref={passwordRef}
                      value={field.value}
                      onChangeText={field.onChange}
                      secureTextEntry
                      keyboardType='default'
                      returnKeyType="go"
                      onSubmitEditing={handleSubmit(onSubmit)}
                    />
                    {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
                  </>
                )}
              />
              <Button style={styles.button} title="Giriş Yap" onPress={handleSubmit(onSubmit)} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </CustomSafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White
  },
  scrollContent: {
    flexGrow: 1,
  },
  view: {
    paddingHorizontal: 25,
    flex: 1,
  },
  imageView: {
    flexDirection: 'row',
  },
  closeButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  closeIcon: {
    width: 24,
    height: 24
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 10,
    color: Colors.Dark
  },
  subtitle: {
    fontSize: 15,
    color: Colors.Gray,
    marginBottom: 30,
  },
  form: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 5,
    color: Colors.DarkGray
  },
  error: {
    fontSize: 14,
    color: 'red',
  },
  button: {
    marginTop: 20
  }
});
