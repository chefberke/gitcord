import mongoose from "mongoose";

export interface UserType extends mongoose.Document {
  _id: string;
  github_id: string;
  name: string;
  username: string;
  bio: string;
  email: string;
  github_profile_url: string;
  avatar_url: string;
  role: string;
  isModerator: boolean;
}

export interface UserPremiumType extends mongoose.Document {
  _id: string;
  premium: boolean;
  premium_expires_at: Date;
  premium_plan: string;
}

export interface UserStatsType extends mongoose.Document {
  _id: string;
  credit: number;
  view_count: number;
}

export interface LeaderboardUser {
  _id: string;
  username: string;
  name: string;
  avatar_url: string;
  github_profile_url: string;
  weeklyScore: number;
  pushEvents: number;
  pullRequests: number;
  issues: number;
  lastActivityDate?: string;
  daysIncluded?: number;
}

export interface UserProfile {
  id: string;
  github_id: string;
  name: string | null | undefined;
  username: string | null | undefined;
  email: string | null | undefined;
  bio: string;
  image: string | null | undefined;
  github_profile_url: string;
  avatar_url: string;
  role: string;
  isModerator: boolean;
  stats: {
    _id: string;
    credit: number;
    view_count: number;
  };
  premium: {
    _id: string;
    isPremium: boolean;
    expiresAt: Date | null;
    plan: string;
  };
}
