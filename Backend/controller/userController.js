const User = require("../model/userModel");

const insertUser = async (data) => {
  try {
    const newUser = new User(data);
    await newUser.save();
    return { success: true, user: newUser }; // Return success and the created user
  } catch (error) {
    console.error("Error in insertUser:", error.message);
    return { success: false, error: error.message };
  }
};

const deleteUser = async (email) => {
  try {
    if (!email) {
      throw new Error("User email is required.");
    }

    console.log("Attempting to delete user with email:", email);

    const result = await User.findOneAndDelete({ email });

    if (result) {
      console.log("User successfully deleted:", result);
      return "deleted";
    } else {
      console.log("User not found for email:", email);
      return "not deleted";
    }
  } catch (error) {
    console.error("Error deleting user:", error.message);
    throw error;
  }
};

const updateUser = async (password) => {
  try {
    if (!password) {
      throw new Error("User email is required.");
    }

    const result = await User.updateOne({ password });

    if (result) {
      console.log("User successfully updated:", result);
    } else {
      console.log("User not found for password:", email);
    }
  } catch {
    console.error("Error updating user:", error.message);
    throw error;
  }
};

const getAllUsers = async () => {
  let data = await User.find();
  return data;
};

module.exports = { insertUser, deleteUser, updateUser, getAllUsers };
