// Icons
import CustomIcon from '../assets/icons/tab-icons/CustomIcon';
import FavoritesIcon from '../assets/icons/tab-icons/FavoritesIcon';
import HomeIcon from '../assets/icons/tab-icons/HomeIcon';
import ProfileIcon from '../assets/icons/tab-icons/ProfileIcon';
import SupportIcon from '../assets/icons/tab-icons/SupportIcon';

// Screens
import CustomScreen from '../components/CustomScreen/CustomScreen';
import FavoritesScreen from '../components/FavoritesScreen/FavoritesScreen';
import HomeScreen from '../components/HomeScreen/HomeScreen';
import ProfileScreen from '../components/ProfileScreen/ProfileScreen';
import SupportScreen from '../components/SupportScreen/SupportScreen';

// Types
import { SCREEN_NAMES } from '../types/ScreenNames';

export const TAB_CONFIG = [
  { name: SCREEN_NAMES.HOME, icon: HomeIcon, component: HomeScreen },
  { name: SCREEN_NAMES.PROFILE, icon: ProfileIcon, component: ProfileScreen },
  { name: SCREEN_NAMES.CUSTOM, icon: CustomIcon, component: CustomScreen },
  { name: SCREEN_NAMES.SUPPORT, icon: SupportIcon, component: SupportScreen },
  { name: SCREEN_NAMES.FAVORITES, icon: FavoritesIcon, component: FavoritesScreen },
];
