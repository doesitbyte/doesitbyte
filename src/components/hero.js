import { Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Hero = () => {

    const [animateNow, setAnimateNow] = useState(true);
    const [changingText, setChangingText] = useState("Websites");

    const changingTextList = ["websites", "apps", "software"]

    const changeHeroTitleText = () => {
        const currentIndex = changingTextList.indexOf(changingText);
        const nextIndex = (currentIndex + 1 >= changingTextList.length) ? 0 : currentIndex + 1;
        setChangingText(changingTextList[nextIndex]);
    }

    return (
        <div className="pt-3 pb-7">
            <div className="secondaryColor text-2xl font-bold flex flex-row items-start justify-start">
                <p>I create &nbsp;</p>
                <div className="overflow-hidden">
                    <Transition
                        appear="true"
                        show={animateNow}
                        enter="transition ease duration-100 transform"
                        enterFrom="translate-y-full"
                        enterTo="translate-y-0"
                        leave="transition ease duration-100 transform"
                        leaveFrom="translate-y-0"
                        leaveTo="-translate-y-full"
                        beforeEnter={() => {
                            changeHeroTitleText();
                        }}
                        afterEnter={() => {
                            setTimeout(() => {
                                setAnimateNow((animateNow) => !animateNow);
                            }, 2000)
                        }}
                        afterLeave={() => {
                            setAnimateNow((animateNow) => !animateNow);
                        }}
                    >
                        <p className="accentColor">{changingText}.</p>
                    </Transition>
                </div>
            </div>
            <div>
                <p className="secondaryColor text-xl mt-4">I'm Kaustubh Sharma, a progammer living in Mumbai, India. My work spans across multiple disciplines from product design to web and mobile development, machine learning and AI.</p>
            </div>
            <div className="flex flex-row mt-4 items-center justify-left">
                <div className="accentColorBg h-2 w-2 rounded-lg mr-2"></div>
                <div className="primaryColor text-xs">Available for new opportunities</div>
            </div>
            <div className="flex flex-row items-center justify-left w-fit flex-nowrap mt-4 pt-2 pb-2 pl-3 pr-3 rounded-lg secondaryColorBg opacity-80 hover:opacity-100 cursor-pointer transition duration-500 ease-in-out">
                <div>
                    <EnvelopeIcon className='h-4 w-4 dark:stroke-gray-400 stroke-gray-600' />
                </div>
                <div>
                    <p className="text-sm ml-2 primaryColor font-bold">Contact me</p>
                </div>
            </div>
        </div>
    )
}

export default Hero;