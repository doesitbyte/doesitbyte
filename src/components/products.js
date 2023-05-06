import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Products = () => {
    return (
        <div id="products" className="pt-3 pb-7">
            <div className="flex justify-between w-full">
                <p className="text-lg font-bold">Products</p>
                <div className="flex">
                    <p>All</p>
                    <ArrowRightIcon role='img' title='Use system theme' className='h-4 w-4 dark:stroke-gray-400 dark:hover:stroke-gray-50 stroke-gray-600 hover:stroke-gray-950' />
                </div>
            </div>
        </div>
    )
}

export default Products;