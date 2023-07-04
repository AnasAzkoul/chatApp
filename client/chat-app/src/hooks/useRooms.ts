import { useQuery } from '@tanstack/react-query'
import { getAllRooms } from '../utils/api'

const useRooms = () => {
  const {data: rooms, isLoading, isError} = useQuery({
    queryFn: getAllRooms,
    queryKey: ['rooms']
  })

  return {
    rooms,
    isLoading,
    isError
  }
}

export default useRooms; 
