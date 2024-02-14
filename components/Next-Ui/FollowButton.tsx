import React from "react"
import { useCheckbox, Chip, VisuallyHidden, tv } from "@nextui-org/react"
import { CheckIcon } from "./CheckIcon"


const checkbox = tv({
  slots: {
    base: "border-default hover:bg-default-200",
    content: "text-default-500 text-sm",
  },
  variants: {
    isSelected: {
      true: {
        base: "border-white/30 bg-transparent ",
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

export default function FollowButton() {
  const {
    children,
    isSelected,
    isFocusVisible,
    getBaseProps,
    getLabelProps,
    getInputProps,
  } = useCheckbox({
    defaultSelected: true,
  })

  const styles = checkbox({ isSelected, isFocusVisible })

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
        color="success"
        startContent={isSelected ? <CheckIcon className="ml-1" /> : null}
        variant="faded"
        {...getLabelProps()}
      >
        {children ? children : isSelected ? "Entfolgen" : "Folgen"}
      </Chip>
    </label>
  )
}
