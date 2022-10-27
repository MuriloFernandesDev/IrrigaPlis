export const getAccessToken = (key: string) => {
   if (typeof window !== 'undefined') {
      const storage = localStorage.getItem(key)
      return storage && JSON.parse(storage)
   }
}
