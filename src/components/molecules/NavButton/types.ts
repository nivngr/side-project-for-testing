
export interface NavButtonProps {
  isActive?: boolean;
  notificationCount?: number;
  category: NavButtonCategory;
  onClick?: (category?: NavButtonCategory) => void;
};

export enum NavButtonCategory {
  DASHBOARD = "dashboard",
  MAGIC_MOMENTS = "magic_moments",
  REPLIES = "replies",
  STATICTICS = "statistics",
  AUTOMATION = "samplead_automation"
};