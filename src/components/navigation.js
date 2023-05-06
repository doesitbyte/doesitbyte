import { HomeIcon, BookOpenIcon, CodeBracketIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";

const BottomNavigation = () => {
    return (
        <div className="flex w-full fixed bottom-0 items-center justify-center mb-3">
            <div className="flex items-center justify-center secondaryColorBg rounded-full p-2">
                <div className="accentColorBg p-2 ml-1 mr-1 rounded-full">
                    <HomeIcon className="h-6" />
                </div>
                <div className="p-2 ml-1 mr-1 rounded-full">
                    <BookOpenIcon className="h-6" />
                </div>
                <div className="p-2 ml-1 mr-1 rounded-full">
                    <CodeBracketIcon className="h-6" />
                </div>
                <div className="p-2 ml-1 mr-1 rounded-full">
                    <ChatBubbleLeftEllipsisIcon className="h-6" />
                </div>
            </div>
        </div>
    )
}

export default BottomNavigation;