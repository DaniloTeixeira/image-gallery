import { environment } from './environment.prod';

const baseURL = environment.baseURL;

export default {
  images: `${baseURL}/images`,
};
