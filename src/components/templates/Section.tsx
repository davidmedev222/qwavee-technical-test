'use client'
import { CourseCardList, TeacherCardList } from '@/components'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Toaster } from 'react-hot-toast'

function Section() {
  return (
    <DndProvider debugMode backend={HTML5Backend}>
      <section className='section'>
        <h1 className='section-title'>Qwavee Technical Test</h1>
        <TeacherCardList courseID='4' courseName='none' />
        <CourseCardList />
      </section>
      <Toaster />
    </DndProvider>
  )
}

export default Section
