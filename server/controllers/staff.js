import StaffNames from "../models/staffNames.js";

export const getStaff = async (req, res) => {
	try {
		const staff = await StaffNames.find({ filter: "staff" });
		res.status(200).json(staff);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
