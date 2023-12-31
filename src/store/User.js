import { create } from 'zustand'

export const useUserInfos = create((set) => ({
    id: '',
    username: '',
    role: '',
    setUser: (info) => set((state) => ({
        id: info.id,
        username: info.username,
        role: info.role
    })),
    logoutUser: () => set((state) => ({
        id: '',
        username: '',
        role: ''
    }))

}))