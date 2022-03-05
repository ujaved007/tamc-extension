import mongoose from "mongoose";

const staffSchema = mongoose.Schema({ data: [{ type: String }], filter: String });

const StaffNames = mongoose.model("StaffNames", staffSchema);

export default StaffNames;
