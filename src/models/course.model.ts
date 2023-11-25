export type CourseName = 'Sociales' | 'Matematicas' | 'Naturales' | 'none'

export interface Course {
  id: string
  name: CourseName
  totalStudents: number
  type: string
}
