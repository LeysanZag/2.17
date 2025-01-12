const baseUrl = "https://wedev-api.sky.pro/api/v1/leysanZag/comments";

const loginURL = "https://wedev-api.sky.pro/api/user/login";


export let token;

export let user;

export const setToken = (newToken) => {
   token = newToken;
} 

export const setUser = (newUser) => {
  user = newUser;
} 

export function getPromise() {

    return fetch( baseUrl,
  {
    method: "GET",

    headers: {
      Authorization: `Bearer ${token}`,
    },
  
  
  })

.then((response) => {

  if (response.status === 500) {
    throw new Error("Сервер упал")
  } else {
    return response.json();
  }

})

}

export function postPromise({ text, name}) {

  return fetch( baseUrl, {

    method: 'POST',
    
    headers: {
      Authorization: `Bearer ${token}`,
    },
     
    body: JSON.stringify({

    text: text,

    name: name,

    forceError: true,


})

}).then((response) => {

  console.log(response);
  
  if (response.status === 201) {
    return response.json();
  }else if (response.status === 500) {
    throw new Error("Сервер упал")
  }else if (response.status === 400) {
    throw new Error("Недопустие количество символов")
  }
  })
}

export function loginUser({ login, password }) {
  return fetch(loginURL, {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  })
  .then((response) => {
    if (response.status === 201) {
      return response.json();
    }else if (response.status === 500) {
      throw new Error("Сервер упал")
    }else if (response.status === 400) {
      throw new Error("Неправильный логин или пароль")
    }
    })
}