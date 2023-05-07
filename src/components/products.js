import { ArrowRightIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { Tooltip, Button } from "flowbite-react";

const Products = () => {
    return (
        <div id="products" className="pt-3 pb-7">
            <div className="flex justify-between w-full">
                <p className="text-lg font-bold">Products</p>
                <div className="flex group items-center justify-center cursor-pointer">
                    <p className="group-hover:opacity-100 opacity-75 mr-1">All</p>
                    <ArrowRightIcon role='img' title='Use system theme' className='h-4 w-4 stroke-3 group-hover:opacity-100 opacity-75 dark:stroke-gray-400 stroke-gray-600' />
                </div>
            </div>
            <Tooltip content="Tooltip content">
                <Button>
                    Default tooltip
                </Button>
            </Tooltip>
        </div>
    )
}

export default Products;