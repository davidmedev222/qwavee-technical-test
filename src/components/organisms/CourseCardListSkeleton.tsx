import { TeacherCardListSkeleton } from '@/components'

interface Props {
  quantity: number
}

function CourseCardListSkeleton({ quantity }: Props) {
  const skeletons = Array.from({ length: quantity })

  return (
    <div className='card-list-skeleton'>
      {skeletons.map((_, index) => (
        <div key={index} className='course-card-skeleton'>
          <div className='course-card-skeleton-header'>
            <div className='course-card-skeleton-subtitle' />
            <div className='course-card-skeleton-title' />
            <div className='course-card-skeleton-description' />
          </div>
          <div className='course-card-skeleton-footer'>
            <div className='course-card-skeleton-subtitle' />
            <TeacherCardListSkeleton quantity={1} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default CourseCardListSkeleton
