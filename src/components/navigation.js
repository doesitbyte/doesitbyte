import { HomeIcon, BookOpenIcon, CodeBracketIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "flowbite-react";
import { useTheme } from "next-themes";

const BottomNavigation = () => {

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <div className="flex w-full fixed bottom-0 items-center justify-center mb-3">
            <div className="flex items-center justify-center secondaryColorBg rounded-full p-2">
                <div className="p-2 mr-2 rounded-full hover:bg-opacity-10 hover:bg-white">
                    <HomeIcon className="h-6" />
                </div>
                <div className="accentColorSecondaryBg p-2 mr-2 rounded-full hover:bg-opacity-10 hover:bg-white">
                    <BookOpenIcon className="h-6" />
                </div>
                <div className="p-2 mr-2 rounded-full hover:bg-opacity-10 hover:bg-white">
                    <CodeBracketIcon className="h-6" />
                </div>
                <div>
                    <Tooltip
                        content="tooltip"
                        arrow={false}
                        style={currentTheme}
                        animation="duration-100"
                        className="dark:bg-white dark:text-black px-0 py-0 p-0 max-h-min"
                        id="tooltip"
                    >
                        <button className="p-2 mr-2 rounded-full hover:bg-opacity-10 hover:bg-white">
                            <ChatBubbleLeftEllipsisIcon className="h-6" />
                        </button>
                    </Tooltip>
                </div>

            </div>
        </div>
    )
}

export default BottomNavigation;