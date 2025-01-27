import mongoose, { Document, Model, Schema } from 'mongoose';

interface IUserModel extends Document {
  name: string;
  email: string;

  created_at: Date;
  updated_at: Date;
}

export const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  price_id: { type: String, required: false, unique: false },
  has_access: { type: Boolean, required: false, unique: false },

  created_at: { type: Date, require: true },
  updated_at: { type: Date, require: true },
});

UserSchema.index({ email: 1 });

export const UserModel: Model<IUserModel> =
  mongoose.models.User || mongoose.model<IUserModel>('User', UserSchema);

export default UserModel;

export type { IUserModel };
