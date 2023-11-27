interface Props {
  quantity: number
}

function TeacherCardListSkeleton({ quantity }: Props) {
  const skeletons = Array.from({ length: quantity })

  return (
    <div className='card-list-skeleton'>
      {skeletons.map((_, index) => (
        <div key={index} className='teacher-card-skeleton'>
          <div className='avatar-skeleton' />
          <div className='teacher-card-skeleton-header'>
            <div className='teacher-card-skeleton-title' />
            <div className='teacher-card-skeleton-subtitle' />
          </div>
        </div>
      ))}
    </div>
  )
}

export default TeacherCardListSkeleton
