import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import Loading from './components/Loading';

export default function App() {
  const [loading, isLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Ваша логика регистрации
  };

  const handleLogin = () => {
    // Ваша логика входа
  };

  return loading ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>Добро пожаловать!</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Зарегистрироваться" onPress={handleRegister} />
      <Button title="Войти" onPress={handleLogin} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
});
