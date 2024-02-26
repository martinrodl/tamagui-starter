import React from 'react';
import {SizableText, SizableTextProps, useTheme} from 'tamagui';

const Text = SizableText.styleable(({fontWeight, color, ...props}, ref) => {
  const theme = useTheme();

  return (
    <SizableText
      ref={ref}
      {...props}
      color={color ?? theme.textPrimary}
      fontWeight={fontWeight ?? 'regular'}
    />
  );
});

export default Text;
