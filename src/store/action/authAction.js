import axios from 'axios';

export const UserRegister = (data) => {
  return async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await axios.post('/api/messanger/user-register', data, config);
      console.log(response);
    } catch (error) {
      console.log(error.response.data);
    }
  };
};
