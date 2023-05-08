import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Button, OverlayArrow, Tooltip, TooltipTrigger } from "react-aria-components";

const Products = () => {
    return (
        <>
            <div id="products" className="pt-3 pb-7">
                <div className="flex justify-between w-full">
                    <p className="text-lg font-bold">Products</p>
                    <div className="flex group items-center justify-center cursor-pointer">
                        <p className="group-hover:opacity-100 opacity-75 mr-1">All</p>
                        <ArrowRightIcon role='img' title='Use system theme' className='h-4 w-4 stroke-3 group-hover:opacity-100 opacity-75 dark:stroke-gray-400 stroke-gray-600' />
                    </div>
                </div>
            </div>
            <TooltipTrigger
                delay="0"
                closeDelay="0"
            >
                <Button>✏️</Button>
                <Tooltip className="bg-white">
                    Edit
                </Tooltip>
            </TooltipTrigger>
        </>
    )
}

export default Products;