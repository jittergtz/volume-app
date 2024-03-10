"use client"
import React, { useEffect, useState } from "react"
import { useCheckbox, Chip, VisuallyHidden, tv, Image } from "@nextui-org/react"
import { CheckIcon } from "../Next-Ui/CheckIcon"
import { useRouter } from "next/navigation"
import { useSessionContext } from "@supabase/auth-helpers-react"
import useAuthModal from "@/hooks/useAuthModal"
import { useUser } from "@/hooks/useUser"
import toast from "react-hot-toast"



const checkbox = tv({
  slots: {
    base: "border-default hover:bg-default-200",
    content: "text-default-500 text-sm",
  },
  variants: {
    isFollowed: {
      true: {
        base: "border-white/30 bg-transparent",
        content: "text-secondary-foreground text-sm pl-1",
      },
    },
    isFocusVisible: {
      true: {
        base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
      },
    },
  },
})

export default function FollowButton({ isFollowed, handleClick }: { isFollowed: boolean, handleClick: any }) {
  const [isSelected, setIsSelected] = useState<boolean>(isFollowed);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  const {
    children,
    isFocusVisible,
    getBaseProps,
    getLabelProps,
    getInputProps,
  } = useCheckbox({
    defaultSelected: isSelected,
  })

  const styles = checkbox({ isFollowed, isFocusVisible });

  return (
    <label {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Chip
      
        size="sm"
        classNames={{
          base: styles.base(),
          content: styles.content(),
        }}
        startContent={isFollowed ? <CheckIcon className="ml-1" /> : null}
        variant="faded"
        onClick={handleClick}
        {...getLabelProps()}
      >
        {children ? children : isFollowed ? "gefolgt" : "Folgen"}
      </Chip>
    </label>
  )
}
