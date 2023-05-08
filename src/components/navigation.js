import { HomeIcon, BookOpenIcon, CodeBracketIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { Button, OverlayArrow, Tooltip, TooltipTrigger } from 'react-aria-components';
import { useTheme } from "next-themes";
import Link from 'next/link';
import { useState } from "react";

const BottomNavigation = () => {

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const [currentPage, setCurrentPage] = useState("home");

    const updateCurrentPage = (pageName) => {
        setCurrentPage(pageName);
    }

    return (
        <div className="flex w-full fixed bottom-0 items-center justify-center mb-3">
            <div className="flex items-center justify-center secondaryColorBg rounded-full p-1">
                <div className="mr-2">
                    <TooltipTrigger
                        delay="100"
                        closeDelay="100"
                    >
                        <Button
                            onPress={() => {
                                setCurrentPage("home");
                            }}
                            className={`p-2 m-0 rounded-full focus:outline-none ${currentPage == 'home' ? 'bg-secondaryAccent' : 'dark:hover:bg-opacity-10 hover:bg-opacity-50 hover:bg-white'} `}>
                            <Link href="/"><HomeIcon className="h-6" /></Link>
                        </Button>
                        <Tooltip
                            placement="top"
                            offset={12}
                            className="px-2 py-0.5 rounded-full bg-secondaryFgLight dark:bg-primaryFgDark data-[entering]:animate-slide data-[exiting=true]:animate-slide"
                        >
                            <p className="text-xs text-primaryBgLight dark:text-primaryBgDark">Home</p>
                        </Tooltip>
                    </TooltipTrigger>
                </div>
                <div className="mr-2">
                    <TooltipTrigger
                        delay="100"
                        closeDelay="100"
                    >
                        <Button
                            onPress={() => {
                                setCurrentPage("blog");
                            }}
                            className={`p-2 m-0 rounded-full focus:outline-none ${currentPage == 'blog' ? 'bg-secondaryAccent' : 'dark:hover:bg-opacity-10 hover:bg-opacity-50 hover:bg-white'} `}
                        >
                            <Link href="/blog"><BookOpenIcon className="h-6" /></Link>
                        </Button>
                        <Tooltip
                            placement="top"
                            offset={12}
                            className="px-2 py-0.5 rounded-full bg-secondaryFgLight dark:bg-primaryFgDark data-[entering]:animate-slide data-[exiting=true]:animate-slide"
                        >
                            <p className="text-xs text-primaryBgLight dark:text-primaryBgDark">Blog</p>
                        </Tooltip>
                    </TooltipTrigger>
                </div>
                <div className="mr-2">
                    <TooltipTrigger
                        delay="100"
                        closeDelay="100"
                    >
                        <Button
                            onPress={() => {
                                setCurrentPage("projects");
                            }}
                            className={`p-2 m-0 rounded-full focus:outline-none ${currentPage == 'projects' ? 'bg-secondaryAccent' : 'dark:hover:bg-opacity-10 hover:bg-opacity-50 hover:bg-white'} `}>
                            <Link href="/projects"><CodeBracketIcon className="h-6" /></Link>
                        </Button>
                        <Tooltip
                            placement="top"
                            offset={12}
                            className="px-2 py-0.5 rounded-full bg-secondaryFgLight dark:bg-primaryFgDark data-[entering]:animate-slide data-[exiting=true]:animate-slide"
                        >
                            <p className="text-xs text-primaryBgLight dark:text-primaryBgDark">Projects</p>
                        </Tooltip>
                    </TooltipTrigger>
                </div>
                <div className="">
                    <TooltipTrigger
                        delay="100"
                        closeDelay="100"
                        isOpen={true}
                    >
                        <Button
                            onPress={() => {
                                setCurrentPage("contact");
                            }}
                            className={`p-2 m-0 rounded-full focus:outline-none ${currentPage == 'contact' ? 'bg-secondaryAccent' : 'dark:hover:bg-opacity-10 hover:bg-opacity-50 hover:bg-white'} `}>
                            <Link href="/contact"><ChatBubbleLeftEllipsisIcon className="h-6" /></Link>
                        </Button>
                        <Tooltip
                            placement="top"
                            offset={12}
                            className="px-2 py-0.5 rounded-full bg-secondaryFgLight dark:bg-primaryFgDark data-[entering]:animate-slide data-[exiting=true]:animate-slidereverse"
                        >
                            <p className="text-xs text-primaryBgLight dark:text-primaryBgDark">Contact</p>
                        </Tooltip>
                    </TooltipTrigger>
                </div>
                {/* <div className="accentColorSecondaryBg p-2 mr-2 rounded-full hover:bg-opacity-10 hover:bg-white">
                    <BookOpenIcon className="h-6" />
                </div>
                <div className="p-2 mr-2 rounded-full hover:bg-opacity-10 hover:bg-white">
                    <CodeBracketIcon className="h-6" />
                </div>
                <div>
                    <button className="p-2 mr-2 rounded-full hover:bg-opacity-10 hover:bg-white">
                        <ChatBubbleLeftEllipsisIcon className="h-6" />
                    </button>
                </div> */}

            </div>
        </div>
    )
}

export default BottomNavigation;