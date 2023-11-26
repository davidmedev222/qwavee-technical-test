'use client'
import { Avatar } from '@/components'
import { CourseName, Teacher } from '@/models'
import { TeacherTypes, teacherWithoutCourseID } from '@/utils'
import { useDrag } from 'react-dnd'

interface Props {
  teacher: Teacher
  courseID: string
  courseName: CourseName
}

function TeacherCard({ teacher, courseID, courseName }: Props) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: courseID === teacherWithoutCourseID ? TeacherTypes.WithoutCourses : TeacherTypes.WithCourses,
    item: { teacher, courseID },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

  return (
    <article ref={drag} role='handle' className={`teacher-card ${isDragging ? 'teacher-card-dragging' : ''}`}>
      <Avatar src={teacher.avatar} />
      <header className='teacher-card-header'>
        <h2 className='teacher-card-title'>
          {teacher.name} {teacher.lastName}
        </h2>
        <span className='teacher-card-subtitle'>{courseName}</span>
      </header>
    </article>
  )
}

export default TeacherCard
