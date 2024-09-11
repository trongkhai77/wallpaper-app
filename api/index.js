import axios from "axios";

const API_KEY = "45792687-2415d1ed263759c64e087e87d";

const apiUrl = `https://pixabay.com/api/?key=${API_KEY}`;

const formatUrl = (params) => {
  let url = apiUrl + "&per_page=32&safeseach=true&editors_choice=true";
  if (!params) return url;
  let paramKeys = Object.keys(params);
  paramKeys.map((key) => {
    let value = key == "q" ? encodeURIComponent(params[key]) : params[key];
    url += `&${key}=${value}`;
  });
  // console.log("final url: ", url);
  return url;
};

export const apiCall = async (params) => {
  try {
    const respone = await axios.get(formatUrl(params));
    const { data } = respone;
    return { success: true, data: data };
  } catch (err) {
    console.log("got error: ", err.message);
    return { success: false, msg: err.message };
  }
};

// api change
