import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  email?: string;
  mobile_number: number;
  name: string;
  DOB?: Date;
  password?: string;
  confirm_password?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: false,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email'],
    },
    mobile_number: {
      type: Number,
      required: false,
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, 'Name must be at least 3 characters long'],
      maxlength: [20, 'Name cannot exceed 20 characters'],
    },
    DOB: {
      type: Date,
      required: false,
    },
    password: {
      type: String,
      select: false,
    },
    confirm_password: {
      type: String,
      select: false,
    },
    isActive: {
      type: Boolean,
      default: true,
      required: true,
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (_doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
  );

// Add indexes for faster queries
userSchema.index({ appleId: 1 }, { unique: true, sparse: true });
userSchema.index({ email: 1 }, { unique: true, sparse: true });
userSchema.index({ mobile_number: 1 }, { unique: true, sparse: true });

export const User = mongoose.model<IUser>('User', userSchema);