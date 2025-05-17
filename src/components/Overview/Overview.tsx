import ClientsSection from "./ClientsSection";
import ExperienceMarketingSection from "./ExpMarket";
import Process from "./Process";
import TangibleGap from "./TangibleGap";
import OverviewVideoPlayback from "./VideoPlayback_1";
import OverviewVideoPlayback_2 from "./VideoPlayback_2";
import History from "./History";
import HeroSection from "./HeroSection";

const Overview = () => {
    return (
        <div>
            <HeroSection />
            <History />
            <TangibleGap />
            <ClientsSection />
            <ExperienceMarketingSection />
            <OverviewVideoPlayback />
            <Process />
            <OverviewVideoPlayback_2 />
        </div>
    );
};

export default Overview;
