const baseURL = "http://localhost:5000/users";

const signUp = async (payload) => {
  try {
    const response = await fetch(`${baseURL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error("Sign Up failed");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("can not SignUp...", error);
    throw error;
  }
};

const login = async (payload) => {
  try {
    console.log("post", payload);
    const response = await fetch(`${baseURL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error("Sign In failed");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("SignIn failed...", error.message);
  }
};

// const api = axios.create({
//   baseURL: 'http://localhost:4000', // Replace with your backend URL
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem('Token')}`,
//   },
// });


export { login, signUp };
