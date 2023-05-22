import user from "../models/users.js";

export const registerUser = async (req, res) => {
  //   res.send("registerUser");
  const { name, email, password, phone } = req.body;

  //   res.send({ name, email, password, phone });

  const newUser = new user({
    name: name,
    email: email,
    passwordHash: password,
    phone: phone,
  });
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

//get all users
export const getAllUsers = async (req, res) => {
  //variables declared with const are immutable
  //variables declared with let are mutable
  //variables declared with var are mutable

  try {
    const users = await user.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

//get a user by id
export const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const userById = await user.findById(id);
    res.status(200).json(userById);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
