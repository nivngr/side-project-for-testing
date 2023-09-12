import CampaignCard from "@/components/molecules/CampaignCard";
import { CampaignType } from "@/components/molecules/CampaignCard/types";
import React from "react";

export default function Home() {
    return (
        <main className="grid grid-cols-2 h-screen w-[60rem] flex-col justify-between m-[15rem] text-center">
            <CampaignCard
                date={new Date()}
                name="new campaign"
                campaignType={CampaignType.AUTO_DISCOVERY}
                isLive={true}
                isOpen={true}
            />
            <CampaignCard
                date={new Date()}
                name="new campaign"
                campaignType={CampaignType.AUTO_DISCOVERY}
                isLive={false}
                isOpen={true}
            />
            <CampaignCard
                date={new Date()}
                name="new campaign"
                campaignType={CampaignType.AUTO_DISCOVERY}
                isLive={true}
                isOpen={false}
            />
            <CampaignCard
                date={new Date()}
                name="new campaign"
                campaignType={CampaignType.AUTO_DISCOVERY}
                isLive={false}
                isOpen={false}
            />
        </main>
    );
}
