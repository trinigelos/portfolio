import React from 'react'
import "./AboutPage.css"
import { photoTriniData,
photoTrini2Data,
photoTrini3Data,
matterhornData,
cadizData,
hornocalData,
jujuyData,
cuevas2Data,
cuevas3Data,
uruguayData,
llamaData
} from './PhotosAbout';
import Bar from '../Bar';



const AboutPage = () => {

return (
<div className='parallax'>

    <div className="card one">
        <Bar />
        <div className='box'>

            <p><span>A LITTLE INTRODUCTION</span>Hey, I'm Trinidad, originally from Messi's land. According to my ID,
                I'm 24, but I've honestly lived enough to rival a time-traveler. Explored the humanities scene at
                Colegio Nacional de Monserrat, where I learnt mostly discipline and critical thinking.</p>
            <div className='firstbox media-responsive-first-element'>
                <img src={photoTriniData.src} alt="Trini" width={photoTriniData.width} height={photoTriniData.height} />
                <img src={photoTrini2Data.src} alt="Trini" width={photoTrini2Data.width}
                    height={photoTrini2Data.height} />
                <img src={photoTrini3Data.src} alt="Trini" width={photoTrini3Data.width}
                    height={photoTrini3Data.height} /></div>
        </div>
    </div>
    <div className="card two">
        <div className='box box-three'>
            <div className="firstbox second ">
                <img src={matterhornData.src} alt="Trini" width={matterhornData.width} height={matterhornData.height} />
                <img src={jujuyData.src} alt="Trini" width={jujuyData.width} height={jujuyData.height} />
                <img src={cuevas3Data.src} alt="Trini" width={cuevas3Data.width} height={cuevas3Data.height} />
            </div>
            <p><span>HOW IT ALL STARTED</span>At 17, I embarked on a New Zealand exchange, and at 18, I dove into global adventures, calling Italy,
                Germany, Ireland, and Switzerland home. My journey includes coaching hockey in Berlin, mastering
                house-cleaning arts, and handling reception duties in the Swiss Alps. With stamps from 25+ countries,
                I've embraced English, German, and Italian, occasionally forgetting words in my mother tongue, Spanish!
                Just a snapshot of my global escapades!</p>
        </div>
    </div>
    <div className="card three">
        <div className='box '>
            <p ><span>LEVELING UP:</span>My love for photography grew as I worked for hotels and bars, managing Instagram accounts and Airbnb
                places.
                Then, my brother introduced me to web development. I started with simple projects in 2019, using HTML
                and CSS. Then, I cranked it up a notch, taking on JavaScript, NodeJS, ExpressJS, MongoDB and ReactJS. From snapping pics to
                snapping
                code, I'm the versatile artist you never knew you needed.</p>
            <div className="firstbox card-three">
                <img src={cuevas2Data.src} alt="Trini" width={cuevas2Data.width} height={cuevas2Data.height} />
                <img src={hornocalData.src} alt="Trini" width={hornocalData.width} height={hornocalData.height} />
                <img src={llamaData.src} alt="Trini" width={llamaData.width} height={llamaData.height} />
            </div>

        </div>
    </div>
    <div className="card four">
        <div className='box box-three'>
            <div className="firstbox fourth">
                <img src={cadizData.src} alt="Trini" width={cadizData.width} height={cadizData.height} />
                <img src={uruguayData.src} alt="Trini" width={uruguayData.width} height={uruguayData.height} />

            </div>
            <p><span>WHAT NOW?</span>Now I'm knee-deep in the tech jungle. I've crafted websites for friends, even the local
                gym. The tech world is like a rollercoaster of learning. Logic, patience, and a dash of creative magic?
                That's my secret sauce. Pumped to bring this mix of humanities, photography and coding to the table.
                Life's too short for dull websites!</p>

        </div>
    </div>
</div>
);
};

export default AboutPage;