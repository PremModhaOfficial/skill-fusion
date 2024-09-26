type Course = {
    id: number,
    title: string,
    instructor: string,
    rating?: number,
    numRatings: number,
    verified: boolean,
    classes: number,
    price: number,
    date?: string,
    image: string,
    bgColor: string
}



export default Course
