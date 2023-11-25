import { Course } from '@/models'
import { instance } from '@/services'

async function getCourses(): Promise<Course[]> {
  try {
    const url = '/subject'
    const request = await instance.get(url)
    return request.data
  } catch (error) {
    throw new Error('Error to get courses.')
  }
}

export { getCourses }
