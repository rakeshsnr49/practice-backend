const User = require('../models/usermodel');

exports.getUsers = async (req, res) => {
  try {
    const users = awaituser.find();
    res.json(users);
  } catch (err) {res.status(500).json({ error:err.message });
  res.json({ message: "User list fetched successfully!" });
                }
};

