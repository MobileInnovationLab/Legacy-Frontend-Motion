import apiAchievements from './apiAchievement';
import apiActivity from './apiActivity';
import apiBlog from './apiBlog';
import apiProduct from './apiProduct';

const API = {
  ...apiProduct,
  ...apiAchievements,
  ...apiBlog,
  ...apiActivity,
};

export default API;