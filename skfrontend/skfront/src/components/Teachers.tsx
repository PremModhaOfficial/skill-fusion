import React, { useState, useEffect } from 'react';
import t1 from '../assets/T1.avif';
import t2 from '../assets/T2.jpg';
import t3 from '../assets/T3.avif';
import t4 from '../assets/T4.avif';
import t5 from '../assets/T5.jpg';
import t6 from '../assets/T6.jpg';

interface Teacher {
  id: number;
  name: string;
  image: string;
}

const teachers: Teacher[] = [
  { id: 1, name: "A Gupta", image: t1 },
  { id: 2, name: "K Sharma", image: t2 },
  { id: 3, name: "P Modha", image: t3 },
  { id: 4, name: "R Ansari", image: t4 },
  { id: 5, name: "T Prajapati", image: t5 },
  { id: 6, name: "K Parmar", image: t6 },
];

const Teachers: React.FC = () => {
  const [visibleTeachers, setVisibleTeachers] = useState<Teacher[]>(teachers.slice(0, 4));

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleTeachers(prev => {
        const nextTeachers = [...prev.slice(1), teachers[(prev[3].id % teachers.length)]];
        return nextTeachers;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-3xl font-bold mb-2">Top Educators</h2>
      <div className="h-2 w-12 bg-red-700 mb-6 rounded-md"></div>
      <div className="flex flex-wrap justify-center gap-10 max-w-6xl">
        {visibleTeachers.map((teacher) => (
          <div key={teacher.id} className="flex flex-col items-center w-60"> 
            <div className="w-60 h-60 rounded-full overflow-hidden border-black border-2 bg-gray-200 mb-2"> 
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center font-semibold">{teacher.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
