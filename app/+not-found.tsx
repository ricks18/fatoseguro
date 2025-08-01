import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Stack, Link } from 'expo-router';
import { useTheme } from '@/contexts/ThemeContext';

export default function NotFoundScreen() {
  const { colors } = useTheme();

  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={[styles.text, { color: colors.text }]}>This screen doesn't exist.</Text>
        <Link href="/" style={styles.link}>
          <Text style={{ color: colors.primary }}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    // backgroundColor aplicada via tema
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    // color aplicada via tema
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
