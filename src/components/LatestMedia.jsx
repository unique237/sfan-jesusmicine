import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

export default function LatestMedia() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-6 text-blue-500 pt-5">
        Dernières Actualités Médias de l'Eglise SFAN
      </h2>
      <p className="text-gray-700 italic text-center mb-5">
        <strong>
          Restez connectés pour recevoir les dernières actualités médias de
          l'Eglise SFAN. Découvrez nos derniers événements, nos projets, nos
          moments forts et nos actualités récentes.
        </strong>
        <br />
        Revivez les moments forts de nos cultes, événements et célébrations à
        travers une collection d'images inspirantes. Plongez dans ces souvenirs
        précieux qui témoignent de la grâce de Dieu et de la vie active de notre
        église. N'hésitez pas à explorer et partager ces instants qui glorifient
        le Seigneur !
      </p>
      <div className="max-w-[1600px] gap-4 grid grid-cols-12 grid-rows-2 px-8 pt-3 items-center mx-auto">
        <Card className="col-span-12 sm:col-span-4 h-[350px] flex flex-col items-center">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start text-center">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Mediatheque 1
            </p>
            <NavLink to="/">
              <h4 className="text-white font-medium text-2xl">Random Link</h4>
            </NavLink>
          </CardHeader>
          <img
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={assets.img_9}
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[350px] flex flex-col items-center">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start text-center">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Mediatheque 2
            </p>
            <NavLink to="/">
              <h4 className="text-white font-medium text-2xl">Random Link</h4>
            </NavLink>
          </CardHeader>
          <img
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={assets.img_1}
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[350px] flex flex-col items-center">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start text-center">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Mediatheque 3
            </p>
            <NavLink to="/">
              <h4 className="text-white font-medium text-2xl">Random Link</h4>
            </NavLink>
          </CardHeader>
          <img
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={assets.img_2}
          />
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[350px] col-span-12 sm:col-span-5 flex flex-col items-center"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start text-center">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Eglises SFAN
            </p>
            <NavLink to="/">
              <h4 className="text-black font-medium text-2xl">Random Link</h4>
            </NavLink>
          </CardHeader>
          <img
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src={assets.img_3}
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div className="text-center">
              <p className="text-black text-tiny">Inauguration.</p>
              <p className="text-black text-tiny">Nom de l'Eglise.</p>
            </div>
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              Eglises du SFAN
            </Button>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[350px] col-span-12 sm:col-span-7 flex flex-col items-center"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start text-center">
            <p className="text-tiny text-white/60 uppercase font-bold">
              La JESUSMICINE
            </p>
            <h4 className="text-white/90 font-medium text-xl">
              Notre dernier festival!
            </h4>
          </CardHeader>
          <img
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src={assets.jesusmicne}
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center text-center">
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">La Medecine de Jesus</p>
                <p className="text-tiny text-white/60">
                  Le dernier festival Jesusmicine.
                </p>
              </div>
            </div>
            <Button radius="full" size="sm">
              En savoir plus...
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
