import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useMenu = () => {
  const axiosPublic = useAxiosPublic();
    const {data:items=[],isPending:loading,refetch} = useQuery({
      queryKey:['menu'],
      queryFn:async() =>{
        const {data} = await axiosPublic.get('/menu');
        return data
      }
    })
     return [items,loading,refetch]
};

export default useMenu;