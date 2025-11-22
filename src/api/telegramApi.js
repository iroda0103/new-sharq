// src/api/telegramApi.js

import axios from "axios";

const API = "http://localhost:3000/api";

export async function getTelegramPosts() {
  const res = await axios.get(`${API}/posts`);
  console.log('TEST',res);
  
  return res.data;
}
