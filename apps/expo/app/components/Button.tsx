import React from 'react';
import {Button as TamaguiButton, styled} from 'tamagui';
import Text from './Text';

const StyledTamaguiButton = styled(TamaguiButton, {
  name: 'Button',
  width: '100%',
  variants: {
    size: {
      '...size': (name, {tokens}) => {
        console.log('tokens', tokens.size);
        return {
          height: tokens.size[name],
        };
      },
    },
    type: {
      link: {
        backgroundColor: 'transparent',
      },
    },
  },

  defaultVariants: {
    size: '$10',
  },
});

const ButtonText = styled(Text, {
  fontWeight: 'bold',
  variants: {
    type: {
      link: {
        fontSize: '$base',
        fontWeight: 'normal',
      },
    },
  },
});

const Button = ({text, fontSize = '$base'}) => {
  return (
    <StyledTamaguiButton>
      <ButtonText fontSize={fontSize}>{text}</ButtonText>
    </StyledTamaguiButton>
  );
};

export default Button;
