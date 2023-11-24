import { DndCard, TeacherCard } from '@/components'

const teachers = Array.from({ length: 4 })

function TeacherCardList() {
  return (
    <ul className='card-list'>
      {teachers.map((_, i) => (
        <li key={i}>
          <TeacherCard />
        </li>
      ))}
      <li>
        <DndCard />
      </li>
    </ul>
  )
}

export default TeacherCardList
