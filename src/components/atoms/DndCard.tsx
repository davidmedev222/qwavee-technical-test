'use client'
import { CourseName } from '@/models'
import { putTeacherCourse } from '@/services'
import { TeacherTypes, teacherWithoutCourseID } from '@/utils'
import { useDrop } from 'react-dnd'
import toast from 'react-hot-toast'
import { mutate } from 'swr'

interface Props {
  courseID: string
  courseName: CourseName
}

function DndCard({ courseID, courseName }: Props) {
  const [{ canDrop }, drop] = useDrop(() => ({
    accept: courseID === teacherWithoutCourseID ? TeacherTypes.WithCourses : TeacherTypes.WithoutCourses,
    drop: async (item) => await handleDrop(item),
    collect: (monitor) => ({
      canDrop: monitor.canDrop()
    })
  }))

  const handleDrop = async (item: any) => {
    try {
      await toast.promise(
        putTeacherCourse(courseID, item.teacher),
        {
          loading: 'Adding teacher...',
          success: ({ name }) => `${name} added to the course ${courseName}`,
          error: 'Error adding teacher'
        },
        { className: 'toast' }
      )
      await Promise.all([mutate(courseID), mutate(item.courseID)])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <article ref={drop} className={`dnd-card ${canDrop ? 'dnd-card-over' : ''} `}>
      <p className='dnd-card-description'>{canDrop ? 'Drop here' : 'Drag a teacher'} </p>
    </article>
  )
}

export default DndCard
