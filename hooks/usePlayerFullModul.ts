import {create } from "zustand"

interface usePlayerFUllModal {
    isOpen: boolean
    onOpen: () => void 
    onClose: () => void
}

const usePlayerFUllModal = create<usePlayerFUllModal>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))


export default usePlayerFUllModal