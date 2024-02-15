import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function GithubCard() {
  return (
    <Card className="w-80 xl:w-[40rem]">
      <CardHeader className="flex gap-3">
        <Image
          alt="Volume logo"
          height={40}
          radius="sm"
          src="/image/volume-icon.png"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-xl">Volume</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>Sieh dir Volume auf Github an</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/jittergtz/volume-app"
        >
         Zum Source code auf GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}
