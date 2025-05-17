"use client";

import CoreTeam from "./CoreTeam";
import TeamVideoPlayback from "./VideoPlayback";
import PartnerAllianceSection from "./Partner";
import Creation from "./Creation";
import Careers from "./Careers";
import GetInTouch from "./GetInTouch";

const page = () => {
    return (
        <div>
            <Creation />
            <TeamVideoPlayback />ś
            <CoreTeam />
            <PartnerAllianceSection />
            <Careers />
            <GetInTouch />
        </div>
    );
};

export default page;
