// types
import { User } from "../types/";

const login = ({
  email,
  password,
  remember = false
}: {
    email: string;
    password: string;
    remember?: boolean;
  }): Promise<User> => {
  const config: RequestInit = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify({ email, password })
  };

  // send request to auth server if succesfull save user into local storage or session storage based on user choice
  return fetch("http://localhost:3000/users/authenticate", config)
    .then(handleResponse)
    .then((user: User) => {
      // if user selected remember me save in local storage else in a session storage
      remember
        ? localStorage.setItem("user", JSON.stringify(user))
        : sessionStorage.setItem("user", JSON.stringify(user));
      return user;
    });
};

function register({
  firstName,
  lastName,
  email,
  password
}: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
  const config: RequestInit = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify({ firstName, lastName, email, password })
  };
  return fetch("http://localhost:3000/users/register", config).then(handleResponse);
}

const logout = (): void => {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
  sessionStorage.removeItem("user");
};

const handleResponse = (response: Response): any => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        window.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
};

export const userService = {
  login,
  register,
  logout
};