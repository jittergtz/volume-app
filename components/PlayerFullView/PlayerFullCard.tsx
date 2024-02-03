"use client"
import React, { useState } from "react"
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react"
import { ShuffleIcon } from "../Next-Ui/ShuffleIcon"
import { NextIcon } from "../Next-Ui/NextIcon"
import { PauseCircleIcon } from "../Next-Ui/PauseCircleIcon"
import { PreviousIcon } from "../Next-Ui/PreviousIcon"
import { RepeatOneIcon } from "../Next-Ui/RepeatOneIcon"
import { HeartIcon } from "../Next-Ui/HeartIcon"
import { FaArrowsTurnRight } from "react-icons/fa6"
import { IoIosClose } from "react-icons/io"
import usePlayerFUllModal from "@/hooks/usePlayerFullModul"


function PlayerFullCard({onClose, onOpen}: any) {
  const [liked, setLiked] = useState(false)
  const PlayerFull = usePlayerFUllModal()

  return (
    <Card
      className="ml-auto h-full w-full backdrop-blur-3xl bg-transparent rounded-none md:max-w-[400px]"
      shadow="sm"
    >
      <button
       onClick={onClose}
       className="ml-auto p-5">
        <IoIosClose size={28} />
      </button>
      <CardBody className="flex justify-end gap-10  sm:mb-0">
        <div className="flex flex-col items-center gap-2 justify-center  col-span-6 md:col-span-4">
          <Image
            alt="Album cover"
            className="object-cover w-64 h-64"
            shadow="md"
            src="/image/IMG_7711.jpg"
          />
          <Button>
            Zu Apple Music <FaArrowsTurnRight size={9} />
          </Button>
        </div>

        <div className="flex px-5 flex-col col-span-6 md:col-span-8">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-0">
              <h3 className="font-semibold text-foreground/90">Daily Mix</h3>
              <p className="text-small text-foreground/80">12 Tracks</p>
              <h1 className="text-large font-medium mt-2">Frontend Radio</h1>
            </div>
            <Button
              isIconOnly
              className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
              radius="full"
              variant="light"
              onPress={() => setLiked((v) => !v)}
            >
              <HeartIcon
                className={liked ? "[&>path]:stroke-transparent" : ""}
                fill={liked ? "currentColor" : "none"}
              />
            </Button>
          </div>

          <div className="flex flex-col mt-3 gap-1">
            <Slider
              aria-label="Music progress"
              classNames={{
                track: "bg-default-500/30",
                thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
              }}
              color="foreground"
              defaultValue={33}
              size="sm"
            />
            <div className="flex justify-between">
              <p className="text-small">1:23</p>
              <p className="text-small text-foreground/50">4:32</p>
            </div>
          </div>

          <div className="flex w-full items-center justify-center">
            <Button
              isIconOnly
              className="data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
            >
              <RepeatOneIcon className="text-foreground/80" />
            </Button>
            <Button
              isIconOnly
              className="data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
            >
              <PreviousIcon />
            </Button>
            <Button
              isIconOnly
              className="w-auto h-auto data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
            >
              <PauseCircleIcon size={54} />
            </Button>
            <Button
              isIconOnly
              className="data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
            >
              <NextIcon />
            </Button>
            <Button
              isIconOnly
              className="data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
            >
              <ShuffleIcon className="text-foreground/80" />
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default PlayerFullCard