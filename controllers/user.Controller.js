import User from "../models/user.model.js";

export const getAllUser = async (req, res) => {

    try {

        const user = await User.find();

        return res.status(200).json({ user })

    } catch (error) {

        console.error(error);

        return res.status(500).json({ message: error.message })
    }

};

export const addUser = async (req, res) => {

    const newUser = new User({

        userName: req.body.userName,

        adress: req.body.adress,

        phoneNumber: req.body.phoneNumber,

        password: req.body.password
    })

    try {

        const user = await newUser.save();

        return res.status(200).json({ message: "User Added Sucessfully!" });

    } catch (error) {

        console.error(error);

        return res.status(400).json(error.message);
    }
};

export const userDetail = async (req, res) => {
    try {
        const userId = req.params.id;

        if (!userId) {

            return res.json({ message: 'Invalid UserId!' })

        }

        const user = await User.findById(userId)

        if (user == null) {

            return res.status(404).json({ message: 'User Not Found!' })

        }

        return res.status(200).json({ user })

    } catch (error) {

        console.error(error);

        return res.status(500).json({ message: error.message })

    }
};

export const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;

        if (!userId) {

            return res.json({ message: 'Invalid UserId!' })

        }

        const updatedUser = await User.updateOne({ _id: userId },

            {
                userName: req.body.userName,

                adress: req.body.adress,

                phoneNumber: req.body.phoneNumber,

                password: req.body.password
            },

            {
                new: true
            }
        );

        if (updatedUser == null) {

            return res.status(404).json({ message: 'User Not Found!' })

        }

        return res.status(200).json({ message: 'User Updated Sucessfully!' })

    } catch (error) {

        console.error(error);

        return res.status(400).json({ message: error.message })
    }
};

export const deleteUser = async (req, res) => {

    try {
        const userId = req.params.id;

        if (!userId) {

            return res.json({ message: 'Invalid UserId!' })

        }

        const user = await User.deleteOne({ _id: userId })

        if (user == null) {

            return res.status(404).json({ message: 'User Not Found!' })

        }

        return res.status(200).json({ message: 'User Deleted Sucessfully!' })

    } catch (error) {

        console.error(error);

        return res.status(500).json({ message: error.message })
    }

};