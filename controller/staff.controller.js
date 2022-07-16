const StaffData = require("../model/staff");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signin = async (req, res) => { 
  if (!staffId || !password) {
    return res.status(422).json({ error: "Fill in the fields!" });
  }
  try {
    const userLogin = await StaffData.findOne({ username: username });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      if (!isMatch) {
        return res.status(400).json({ error: "Invalid Credentials" });
      } else {
        token = await userLogin.generateAuthToken();

        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 2589200000),
          httpOnly: true,
        });
        res.json({ message: "User login Successful!" });
      }
    } else {
      return res.status(400).json({ error: "Invalid All" });
    }
  } catch (error) {
    console.log(error);
  }
};

const editUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const editStaff = await StaffData.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(editStaff);
  } catch (error) {
    res.status(500).send(error);
  }
};

const signup = async (req, res) => {
  const {
    staffId,
    username,
    firstname,
    middlename,
    lastname,
    dateOfBirth,
    nationality,
    gender,
    email,
    mobile,
    employeeType,
    role,
    citizenship,
    pan,
    education,
    password,
  } = await req.body;

  if (
    !staffId ||
    !username ||
    !firstname ||
    !lastname ||
    !dateOfBirth ||
    !nationality ||
    !gender ||
    !email ||
    !mobile ||
    !employeeType ||
    !role ||
    !citizenship ||
    !pan ||
    !education ||
    !password
  ) {
    return res
      .status(422)
      .json({ error: "Please Fill in the fields properly!" });
  }
  try {
    const userExist = await StaffData.findOne({ staffId: staffId });
    if (userExist) {
      return res.status(422).json({ error: "user already exists" });
    }
    const user = new StaffData({
      staffId,
      username,
      firstname,
      middlename,
      lastname,
      dateOfBirth,
      nationality,
      gender,
      email,
      mobile,
      employeeType,
      role,
      citizenship,
      pan,
      education,
      password,
    });
    const userRegister = await user.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    console.log(err);
  }
};
