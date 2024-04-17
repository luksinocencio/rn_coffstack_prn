import { ThemeColors } from '../../theme/theme';
import { ToucableOpacityBoxProps } from '../Box/Box';
import { ButtonPresset } from './Button';

export interface ButtonUI {
  container: ToucableOpacityBoxProps;
  content: ThemeColors;
}

export const buttonPressets: Record<
  ButtonPresset,
  { default: ButtonUI; disabled: ButtonUI }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: 'primaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: 'gray2',
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'primary',
      },
      content: 'primary',
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray4',
      },
      content: 'gray2',
    },
  },
};
