import apiAchievements from './apiAchievement';
import apiActivity from './apiActivity';
import apiBlog from './apiBlog';
import apiGeneration from './apiGeneration';
import apiProduct from './apiProduct';

const API = {
  ...apiProduct,
  ...apiAchievements,
  ...apiBlog,
  ...apiActivity,
  ...apiGeneration,
};

export default API;