import { config } from '@tamagui/config/v2'
import { createFont, createTamagui, createTokens } from 'tamagui'

const size = {
  true: 0,
  '0.25': 1,
  '0.5': 2,
  '0.75': 3,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  13: 52,
  14: 56,
  15: 60,
  16: 64,
  17: 68,
  18: 82,
  19: 86,
  20: 90,
  full: '100%',
}

const fontSize = {
  xs: 12,
  sm: 13,
  base: 14,
  true: 14, // Default value
  lg: 16,
  xl: 18,
  '2xl': 20,
  '3xl': 24,
  '4xl': 32,
  '5xl': 40,
  '6xl': 48,
}

const defaultFont = createFont({
  family: 'ProximaNovaA',
  size: {
    ...fontSize,
  },
  lineHeight: {
    // 1 will be 22
    2: 22,
    xs: fontSize.xs * 1.35, // 135%
    sm: fontSize.sm * 1.35, // 135%
    base: fontSize.base * 1.35, // 135%
    true: fontSize.true * 1.35, // 135% - default value
    lg: fontSize.lg * 1.35, // 135%
    xl: fontSize.xl * 1.15, // 115%
  },
  weight: {
    true: 400, // Default value
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  letterSpacing: {
    1: 0,
    // 3 will be 0
  },
  // for native only, alternate family based on weight/style
  face: {
    // pass in weights as keys
    true: {
      normal: 'ProximaNovaA',
    },
  },
})

// Primitives from Figma
const colorPrimitives = {
  // Blue Main
  blueMain: 'rgba(1, 87, 155, 1)',
}

const tokens = createTokens({
  size,
  space: { ...size, '-1': -5, '-2': -10 },
  radius: {
    true: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    full: 100_00,
  },
  zIndex: { 0: 0, 1: 100, 2: 200, 3: 300, 4: 400, 5: 500 },
  color: { ...colorPrimitives },
  fontSize: {
    ...fontSize,
  },
})

const lightTheme = {
  // Text
  textBrand: tokens.color.blueMain,
  textAccent: tokens.color.blueMain,
}
const darkTheme = {
  // Text
  textBrand: tokens.color.blueMain,
  textAccent: tokens.color.blueMain,
}

const overRidesConfig = createTamagui({
  ...config,
  defaultTheme: 'light',
  fonts: {
    title: defaultFont,
    body: defaultFont,
  },
  tokens,
  themes: {
    light: {
      ...lightTheme,
    },
    dark: {
      ...darkTheme,
    },
  },
})

type Conf = typeof config

declare module 'tamagui' {
  type TamaguiCustomConfig = Conf
}

const tamaguiConfig = createTamagui(overRidesConfig)

export default tamaguiConfig
