const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={filled ? "#FFD700" : "none"} stroke="#FFD700" strokeWidth="2" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
)

const VerifiedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-green-500">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
)

type CourCardProps = {
    title: string,
    instructor: string,
    rating: number,
    numRatings: number,
    verified: boolean,
    classes: number,
    price: number,
    date?: string,
    image: string,
    bgColor: string
}

const CourseCard = ({ title, instructor, rating, numRatings, verified, classes, price, date, image, bgColor }: CourCardProps) => {
    let imageUrl = image;
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-6">
            <div className={`h-40 flex items-center justify-center ${bgColor}`}>
                <img src={imageUrl} alt={title} className="w-full h-full object-contain" />
            </div>
            <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{title}</h3>
                <p className="text-sm text-blue-600 mb-2">{instructor}</p>
                <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} filled={i < Math.floor(rating ? rating : 3.5)} />
                    ))}
                    <span className="ml-1 text-sm text-gray-600">{numRatings}</span>
                </div>
                {verified && (
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                        <VerifiedIcon />
                        <span className="ml-1">Verified</span>
                    </div>
                )}
                <p className="text-sm text-gray-600 mb-1">{classes} Classes</p>
                {date && <p className="text-sm text-gray-600 mb-1">{date}</p>}
                <p className="font-bold">₹{price} / class</p>
            </div>
        </div>
    )
}
    ;

export default CourseCard
