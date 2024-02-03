"use client"
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react"
import { useRouter } from "next/navigation"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import useAuthModal from "@/hooks/useAuthModal"
import { useEffect } from "react"
import usePlayerFUllModal from "@/hooks/usePlayerFullModul"
import PlayerModal from "./PlayerModal"

const PlayerFullModal = () => {
  const router = useRouter()
  const { session } = useSessionContext()
  const { onClose, isOpen } = usePlayerFUllModal()

  const onChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  }

  useEffect(() => {
    if (session) {
      router.refresh()
      onClose()
    }
  }, [session, router, onClose])

  return (
    <PlayerModal
      isOpen={isOpen}
      onChange={onChange}
    >
      <div>kanake</div>
    </PlayerModal>
  )
}

export default PlayerFullModal
