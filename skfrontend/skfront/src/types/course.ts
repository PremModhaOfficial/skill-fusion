type Course = {
    id: number,
    title: string,
    description: string,
    instructor: string,
    rating?: number,
    numRatings: number,
    verified: boolean,
    classes: number,
    price: number,
    date?: string,
    image: string,
}



export default Course
