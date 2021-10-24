import apiAchievements from './apiAchievement';
import apiActivity from './apiActivity';
import apiBlog from './apiBlog';
import apiGeneration from './apiGeneration';
import apiProduct from './apiProduct';
import apiRecruitment from "./apiRecruitment";

const API = {
  ...apiProduct,
  ...apiAchievements,
  ...apiBlog,
  ...apiActivity,
  ...apiGeneration,
  ...apiRecruitment,
};

export default API;