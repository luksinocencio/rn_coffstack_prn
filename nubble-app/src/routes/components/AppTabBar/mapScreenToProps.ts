import type { IconProps } from '../../../components/Icon/Icon'
import type { AppTabBottomTabParamList } from '../../AppTabNavigator'

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string
    icon: {
      focused: IconProps['name']
      unfocused: IconProps['name']
    }
  }
> = {
  HomeScreen: {
    label: 'Início',
    icon: {
      focused: 'homeFill',
      unfocused: 'home',
    },
  },
  NewPostScreen: {
    label: 'Novo post',
    icon: {
      focused: 'newPost',
      unfocused: 'newPost',
    },
  },
  FavoriteScreen: {
    label: 'Favorito',
    icon: {
      focused: 'bookmarkFill',
      unfocused: 'bookmark',
    },
  },
  MyProfileScreen: {
    label: 'Meu perfil',
    icon: {
      focused: 'profileFill',
      unfocused: 'profile',
    },
  },
}
