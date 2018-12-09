import * as dict from '@lib/store/naf/dict';
import util from '@lib/utils/user-util';

export const modules = {
  naf: {
    namespaced: true,
    modules: {
      dict,
    },
  },
};
export const state = () => ({
  platform: util.platform,
});
export const mutations = {};
export const actions = {};
