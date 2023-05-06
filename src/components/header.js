import Image from 'next/image';
import ThemeSelector from '../components/themeSelector'

const Header = () => {
    return (
        <>
            <div id='header' className="flex items-center justify-between pt-6 pb-7">
                <div id='details' className='flex'>
                    <div className=''>
                        <Image
                            src="/images/profile.jpg"
                            alt="Megumi Fushiguro"
                            draggable="false"
                            width={70}
                            height={70}
                            style={{
                                objectFit: "cover",
                                borderRadius: "100px",
                            }}
                        />
                    </div>
                    <div className='flex flex-col items-start justify-center ml-4'>
                        <p className='text-xl font-semibold'>Kaustubh Sharma</p>
                        <p className='text-sm secondaryColor font-semibold'>23 • India</p>
                        <p className='text-xs secondaryColor font-semibold'>Last Updated: 4 May, 2023</p>
                    </div>
                </div>
                <div id='themeSelector'>
                    <ThemeSelector />
                </div>
            </div>
        </>
    )
}

export default Header;