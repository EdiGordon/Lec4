import { Role } from "../../@type.d.js";
import { Schema } from "mongoose";


//role has a role name: (user/admin/moderator)
const roleSchema = new Schema<Role>({
    name: { type: String, unique: true }
});

export { roleSchema };