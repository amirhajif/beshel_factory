import { create } from 'zustand'

export const useUserInfos = create((set) => ({
    info: { id: '', username: '', role: '' },
    setInfo: (data) => set((state) => ({
        info: { ...state.info, id: data.id, username: data.username, role: data.role }
    })),
    deleteInfo: () => set((state) => ({
        info: { ...state.info, id: '', username: '', role: '' }
    }))

}))