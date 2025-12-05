
import { AboutApasSection } from "../../components/AboutApasSection/AboutApasSection.js";
import { CarouselBox } from "../../components/carousel-box/carousel-box.js";
import Carousel from "../../components/Carousel/Carousel.js";
import { HeroVideoSection } from "../../components/HeroVideoSection/HeroVideoSection.js";
import { HowToOrderSection } from "../../components/HowToOrderSection/HowToOrderSection.js";
import { NutritionRichWaterSection } from "../../components/NutritionRichWaterSection/NutritionRichWaterSection.js";
import { WaterBottleCollection } from "../../components/WaterBottleCollection/WaterBottleCollection.js";
import './section.css'
export function Section(){
    return(
        <>
              
                  <div className="position-relative">
                    <Carousel/>
                    <div  className="carousel-box-container"  >
                        <CarouselBox/>
                    </div>
                  </div>
                  <AboutApasSection  />
                  <HowToOrderSection/>
                  <NutritionRichWaterSection/>
                  <WaterBottleCollection/>
                  <HeroVideoSection/>
                
            
                
        </>
    )
}