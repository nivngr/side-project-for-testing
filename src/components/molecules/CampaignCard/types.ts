export interface CampaignCardProps {
    name: string;
    campaignType?: CampaignType;
    date: Date;
    isLive: boolean;
    isOpen: Boolean;
    notificationCount?: number;
    className?: string;
}

export enum CampaignType {
    AUTO_DISCOVERY,
    MANUAL_DISCOVERY,
    EMPTY,
}
