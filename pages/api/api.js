const API_ROOT = 'https://tosy-auto.herokuapp.com';
const APIUrls = {
  root: API_ROOT,
  web_setting: API_ROOT + "/api/website-setting?populate=*",
  pages: API_ROOT + "/api/pages?populate=*",
  products: API_ROOT + "/api/products?populate=*",
  news: API_ROOT + "/api/news-and-updates?populate=*",
  achievement: API_ROOT + "/api/achievement?populate=achievement.Image",
  quality: API_ROOT + "/api/quality?populate=quality.Image",
  infrastructure: API_ROOT + "/api/infrastructure?populate=machine.Image",
  contact_form: API_ROOT + "/api/contact-forms?populate=*",

}
export default APIUrls;