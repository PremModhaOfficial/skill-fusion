import Course from "@/types/course";
import { useState } from "react";



function Lable({ field }: { field: string }) {
    return <label
        className="block text-lg font-medium text-gray-700 mb-2"
        htmlFor={field}>{field}</label>
}

function InputField({ field, type }: { field: string, type: string }) {

    return <input
        className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg"
        type={type} name={field} id={field} />
}

export default function CreateCourse() {
    let [course, setCourse] = useState<Course>();

    let fields = [
        ["title", "text"],
        ["classes", "number"],
        ["price", "number"],
    ]

    return (
        <>
            <form
                className="bg-white shadow-xl shadow-black rounded-lg p-8"
                onSubmit={e => {
                    e.preventDefault()
                }}
            >

                { /* useing flexbox to divede form in two,  */}
                <div className="flex">
                    <div className="flex-auto">
                        {fields.map(([field, type]) => {
                            return (
                                <div>
                                    <Lable field={field} />
                                    <InputField field={field} type={type} />
                                </div>
                            )
                        })}

                        <div>
                            <input type="file" />
                        </div>
                        <div>
                            <Lable field="description" />
                            <textarea
                                className="mt-1 block w-full h-32 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg"
                                name="description" id="description"
                                placeholder="discription"
                                onChange={e => setCourse({ ...course, description: e.target.value })}
                            ></textarea>
                        </div>


                    </div>
                    <div className="flex-auto">
                    </div>
                </div>
                <div>
                    <button
                        className="mt-4 bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300"
                        type="submit"
                    >
                        Create Course
                    </button>
                </div>

            </form>
        </>
    )
  }
