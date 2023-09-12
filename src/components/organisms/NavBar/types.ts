import { NavButtonCategory } from "@/components/molecules/NavButton/types";

export interface NavBarProps {
  
};

export type NavStatus = {
  category: NavButtonCategory;
  notificationCount: number;
  isActive: boolean;
};

export const initialNavStates: NavStatus[] = [
  { category: NavButtonCategory.DASHBOARD,
    notificationCount: 2,
    isActive: true
  },
  { category: NavButtonCategory.MAGIC_MOMENTS,
    notificationCount: 0,
    isActive: false
  },
  { category: NavButtonCategory.REPLIES,
    notificationCount: 6,
    isActive: false
  },
  { category: NavButtonCategory.STATICTICS,
    notificationCount: 9,
    isActive: false
  },
  { category: NavButtonCategory.AUTOMATION,
    notificationCount: 0,
    isActive: false
  }
];
