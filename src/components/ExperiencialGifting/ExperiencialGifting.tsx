"use client";

import Merchandise from "./Merch";
import MidHeading from "./MidHeading";
import GallerySection from "../common/GallerySection";
import MerchSubsection from "./Tangibles";
import MerchGlance from "./MerchGlance";

const imageList = Array.from(
    { length: 16 },
    (_, i) => `../../assets/images/merchandise/gal${i + 1}.jpg`
);

const page = () => {
    return (
        <div>
            <Merchandise />
            <MidHeading />
            <MerchGlance />
            <GallerySection
                images={imageList}
                title="Showcase"
                imagesPerSlide={6}
            />
            <MerchSubsection />
        </div>
    );
};

export default page;
