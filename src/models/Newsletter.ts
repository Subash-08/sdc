import mongoose, { Document, Schema } from 'mongoose';

export interface INewsletter extends Document {
  email: string;
  status: 'active' | 'unsubscribed';
  source: string; // e.g. "blog-footer", "blog-post-sidebar"
  ipAddress?: string;
  subscribedAt: Date;
  unsubscribedAt?: Date;
}

const NewsletterSchema = new Schema<INewsletter>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address'],
    },
    status: {
      type: String,
      enum: ['active', 'unsubscribed'],
      default: 'active',
    },
    source: { type: String, default: 'blog-footer' },
    ipAddress: { type: String },
    subscribedAt: { type: Date, default: Date.now },
    unsubscribedAt: { type: Date },
  },
  { timestamps: true }
);

// `unique: true` already creates the email index.
NewsletterSchema.index({ status: 1 });
NewsletterSchema.index({ subscribedAt: -1 });

const Newsletter =
  mongoose.models.Newsletter || mongoose.model<INewsletter>('Newsletter', NewsletterSchema);

export default Newsletter;
