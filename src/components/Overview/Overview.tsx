import ClientsSection from "./ClientsSection";
import ExperienceMarketingSection from "./ExpMarket";
import Process from "./Process";
import TangibleGap from "./TangibleGap";
import OverviewVideoPlayback from "./VideoPlayback_1";
import OverviewVideoPlayback_2 from "./VideoPlayback_2";
import History from "./History";

const Overview = () => {
    return (
        <div>
            <History />
            <OverviewVideoPlayback />
            <TangibleGap />
            <ClientsSection />
            <ExperienceMarketingSection />
            <Process />
            <OverviewVideoPlayback_2 />
        </div>
    );
};

export default Overview;
