import mongoose, { Schema } from 'mongoose';
import { Omit } from 'lodash';
import { SignUpType } from '../schema/signup-schema';
import PasswordHash from '../utils/password-hash';

export interface IUserDocument
  extends Omit<SignUpType['body'], 'confirmPassword'>,
    mongoose.Document {
  createdAt: string;
  updatedAt: string;
  comparePassword(password: string): Promise<boolean>;
}

const signupSchema = new Schema<IUserDocument>(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
  },
  {
    timestamps: true,
  }
);

signupSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const hash = await PasswordHash.toHash(this.get('password'));
    this.set('password', hash);
  }
  next();
});

signupSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  const hash = this.get('password');
  return PasswordHash.comparePassword(hash, password);
};

export default mongoose.model<IUserDocument>('User', signupSchema);
