//routes
const { Router } = require("express");
const router = Router();

const User = require("../models/User");

// create
router.post("/registration", async (req, res) => {
  const { email, password, name, isAdmin } = req.body;

  const user = new User({
    name: name,
    email: email,
    password: password,
    isAdmin: isAdmin,
    profiles: [],
  });

  await user.save();

  const createdUser = await User.findOne({ name }).lean().exec();

  res.status(200).json({ createdUser });
});

// router requets login

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const createdUser = await User.findOne({ email }).lean().exec();

  createdUser && createdUser.password === password
    ? res.status(200).json({ createdUser })
    : res.status(200).json({ err: "Credentials is wrong " });
});

// router requets users

router.get("/users", async (req, res) => {
  const allUsers = await User.find().lean().exec();

  allUsers
    ? res.status(200).json({ allUsers })
    : res.status(200).json({ err: "Server disconected " });
});

//router requets create

router.patch("/createProfile", async (req, res) => {
  const { user, profile } = req.body;
  console.log(req.body);
  await User.updateOne(
    { email },
    {
      $set: {
        profiles: [...userBefore.profiles, profile],
      },
    }
  )
    .lean()
    .exec();

  const updatedUser = await User.findOne({ email: user.email }).lean().exec();
  updatedUser
    ? res.status(200).json({ updatedUser })
    : res.status(200).json({ err: "Credentials is wrong" });
});

// router requets edit profils

router.patch("/editProfile", async (req, res) => {
  const { email, profile, oldName } = req.body;

  const userBefore = await User.findOne({ email }).lean().exec();
  console.log(userBefore);
  const oldProfileIndex = userBefore.profiles.findIndex(
    (profile) => profile.name === oldName
  );
  const oldProfiles = [...userBefore.profiles];
  oldProfiles.splice(oldProfileIndex, 1, profile);

  await User.updateOne(
    { email },
    {
      $set: {
        profiles: oldProfiles,
      },
    }
  )
    .lean()
    .exec();

  const updatedUser = await User.findOne({ email }).lean().exec();
  updatedUser
    ? res.status(200).json({ updatedUser })
    : res.status(200).json({ err: "Credentials is wrong" });
});

// router requets delete profils

router.delete("/deleteProfile", async (req, res) => {
  const { email, name } = req.body;

  const userBefore = await User.findOne({ email }).lean().exec();

  await User.updateOne(
    { email },
    {
      $set: {
        profiles: userBefore.profiles.filter(
          (profile) => profile.name !== name
        ),
      },
    }
  )
    .lean()
    .exec();

  const updatedUser = await User.findOne({ email }).lean().exec();
  updatedUser
    ? res.status(200).json({ updatedUser })
    : res.status(200).json({ err: "Credentials is wrong" });
});

// router requets edit user(profile)

router.patch("/editUser", async (req, res) => {
  const { user, profile } = req.body;

  const userBefore = await User.findOne({ email: user.email }).lean().exec();

  await User.updateOne(
    { email: user.email },
    {
      $set: {
        name: req.body.name,
        gender: req.body.gender,
        birthdate: req.body.birthdate,
        city: req.body.city,
        profiles: userBefore?.profiles
          ? [...userBefore.profiles, profile]
          : profile,
      },
    }
  )
    .lean()
    .exec();

  const updatedUser = await User.findOne({ email: user.email }).lean().exec();
  updatedUser
    ? res.status(200).json({ updatedUser })
    : res.status(200).json({ err: "Credentials is wrong" });
});

// router deleteUsers
router.delete("/deleteUser", async (req, res) => {
  const { email } = req.body;

  await User.deleteOne({ email }).lean().exec();

  const allUsers = await User.find().lean().exec();

  allUsers
    ? res.status(200).json({ allUsers })
    : res.status(200).json({ err: "Server disconected " });
});

module.exports = router;
