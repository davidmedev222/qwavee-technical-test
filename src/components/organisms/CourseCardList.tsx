import { CourseCard } from '@/components'

const teachers = Array.from({ length: 4 })

function CourseCardList() {
  return (
    <ul className='card-list'>
      {teachers.map((_, i) => (
        <li key={i}>
          <CourseCard />
        </li>
      ))}
    </ul>
  )
}

export default CourseCardList
