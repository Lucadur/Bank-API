const API_BASE_URL = "http://localhost:3001/api/v1/user";

export async function loginUser(email, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      return data.body.token;
    } else {
      throw new Error(data.error);
    }
  } catch (error) {
    throw error;
  }
}

export async function fetchUserProfile(token) {
  try {
    const response = await fetch(`${API_BASE_URL}/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to fetch user profile");
    }
  } catch (error) {
    throw error;
  }
}
export async function updateUserName(token, newFirstName, newLastName) {
  try {
    const response = await fetch(`${API_BASE_URL}/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        firstName: newFirstName,
        lastName: newLastName,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to update profile");
    }
  } catch (error) {
    throw error;
  }
}
