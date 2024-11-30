import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin): Promise<string | null> => {
  // TODO: make a POST request to the login route
  try{
    const response = await fetch('./auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Login failed:', errorData.message);
      return null;
    }

    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error('Error during login:', error);
    return null;
  }
};



export { login };
