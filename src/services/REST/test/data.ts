import api from '@/services/REST/utils/test'

export const fetchGetData = async () => {
  return await api.get('/icons/mockData.json')
}