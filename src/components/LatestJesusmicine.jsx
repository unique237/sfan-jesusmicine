import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

export default function LatestJesusmicine() {
  return (
    <div className="max-w-[1600px] gap-4 grid grid-cols-12 grid-rows-1 px-8 pt-3 items-center mx-auto">
      <Card isFooterBlurred className="w-full h-[350px] col-span-12 sm:col-span-5 flex flex-col items-center">
        <CardHeader className="absolute z-10 top-1 flex-col items-start text-center">
          <p className="text-tiny text-white/60 uppercase font-bold">FESTIVAL JESUSMOCINE</p>
          <NavLink to='/'><h4 className="text-black font-medium text-2xl">Random Link</h4></NavLink>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="https://nextui.org/images/card-example-6.jpeg"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div className="text-center">
            <p className="text-black text-tiny">Festival du 31/12/2024</p>
            <p className="text-black text-tiny">Cameroun.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Eglises du SFAN
          </Button>
        </CardFooter>
      </Card>
      <Card isFooterBlurred className="w-full h-[350px] col-span-12 sm:col-span-7 flex flex-col items-center">
        <CardHeader className="absolute z-10 top-1 flex-col items-start text-center">
          <p className="text-tiny text-white/60 uppercase font-bold">La JESUSMICINE</p>
          <h4 className="text-white/90 font-medium text-xl">Video de La Dernier Jesusmicine</h4>
        </CardHeader>
        <div
          className="z-0 w-full h-full object-cover relative"
          style={{paddingBottom: "56.25%", height: 0}}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/GYdykvmrsbU"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Jesusmicine Video"
          ></iframe>
        </div>
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center text-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">La Medecine de Jesus</p>
              <p className="text-tiny text-white/60">Le dernier festival Jesusmicine.</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
