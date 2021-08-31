export const URLs = {
  CHECK_MK_5: {
    baseUrl:
      'https://checkmklb.vueling.com/master/check_mk/index.py?start_url=%2Fmaster%2Fcheck_mk',
    paramsUrl: '%2Fview.py%3Ffilled_in%3Dfilter%26service_regex%3D',
    paramsUrlEnd:'%26view_name%3Dallservices'
  },

  CHECK_MK_6: {
    baseUrl:
      'https://cmk.vueling.com/checkmk_m/check_mk/index.py?start_url=%2Fcheckmk_m%2Fcheck_mk',
    paramsUrl: '%2Fview.py%3Ffilled_in%3Dfilter%26service_regex%3D',
    paramsUrlEnd: '%26view_name%3Dsearchsvc'
  },
};
