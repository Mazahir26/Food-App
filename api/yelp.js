import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 94IYzvbMy_QFo4nzjCtYzP0f--CdUdQ8Pe02VGmRh7wxm28PzA8ir9hViBFk9GfAiWGYtZ7HtCDpdq_0U84zMTXQImVt0-2lkbPwQkSbylNMymRNuYrEtGql0xyDX3Yx",
  },
});
