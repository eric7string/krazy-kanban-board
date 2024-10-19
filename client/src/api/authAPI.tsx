import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Error logging in, view network tab');
    }

    return data;
  } catch (error) {
    console.log('Error logging in', error);
    return Promise.reject('Error logging in');
  }
};



export { login };
