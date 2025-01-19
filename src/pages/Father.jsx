import React from "react";
import { assets } from "../assets/assets";
import Testimonies from "../components/Testimonies";

const Father = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={assets.king}
          alt="King"
          className="w-full md:w-1/3 h-[80vh] object-fill"
        />

        <div className="flex-1 md:ml-4">
          <h1 className="text-2xl font-bold mb-4 text-yellow-500">
            Père Supérieur du SFAN{" "}
          </h1>

          <p className="mb-4">
            Père King Joshua Love, est le Père Supérieur et Fondateur de la Méga
            Eglise Sanctuaire Pour Toutes les Nations (SFAN), Terre Sainte et
            lieu de pèlerinage, Auditorium de plus de 12 000 (douze mille)
            places situé à Nkoabang (banlieue Est de Yaoundé, la Capitale
            Politique du Cameroun), qui compte à ce jour, un réseau de centaines
            d’Eglises sur le plan national et international. Il est également le
            Président Fondateur de l’International Love Institute, Institut
            Biblique et Théologique de formation des Pasteurs et des Ministres
            de Culte ; et Fondateur de la Global Academy of Success qui est une
            académie spécialisée dans la formation des Leaders, le coaching et
            le mentoring. Il est en outre le Président de la Congrégation
            Baptiste Camerounaise RCE, plateforme regroupant un millier
            d’Eglises au Cameroun.
          </p>

          <p className="mb-4">
            Conférencier international, il reçoit l’appel de Dieu à l’âge de 10
            ans. A 14 ans, il prêche à des foules nombreuses, l’Amour
            inconditionnel de Dieu et le salut à ceux qui croient.
          </p>

          <p className="mb-4">
            Il a tour à tour fait l’évangélisation de la rue, prêchant à des
            milliers de désœuvrés, de prostitués et d’autres bannis de la
            société, la miséricorde et l’Amour de Dieu. Pionnier dans la
            théologie du LOVISME : l’AMOUR peut Tout, il est en outre
            l’initiateur de la JESUMICINE : la Médecine Parfaite par
            Jésus-Christ !
          </p>

          {/*<h2 className="text-xl font-semibold mb-3">Early Life</h2>*/}
          <p className="mb-4">
            Opérant sous une onction spéciale de miracles spectaculaires,
            guérison des foules, guérisons des fous, résurrections des morts
            sont le quotidien de cet Homme de Dieu.
          </p>

          <h2 className="text-xl font-semibold mb-3 text-red-600">
            Prophéties
          </h2>
          <p className="mb-4">
            La chronique de prophéties de ce Prophète des Nations est
            remarquable : sur son pays, sur la sous région CEMAC, sur l’Afrique,
            sur l’Europe, l’Amérique, l’Asie, ses prophéties se sont réalisées
            aux jours et heures !
          </p>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-3 text-yellow-500 italic">
        Le Père King Joshua Love
      </h2>
      <p className="mb-4 mt-4">
        De la multitude des révélations qu’il a reçues, il y’en a des majeurs
        qui ont transformé les vies de millions de personnes sur tous les
        continents. La première à fort impact est sans nul doute, « La Prière
        Miraculeuse du Père KING » ! Véritable Bible de la délivrance, cet
        ouvrage traite de la délivrance des œuvres des ténèbres et des problèmes
        spirituels profonds à la racine.
      </p>
      <p className="mb-4">
        Auteur à succès, il a à son actif plus de 400 prières révélées et une
        dizaine de parchemins sacrés qui touchent tous les domaines de la vie.
        Une autre de ses publications dans la même lignée de puissance est « Le
        Sacré », dévotionnel devenu livre de chevet des pasteurs à travers le
        monde, cette publication a une dizaine de volumes dont un hors-série…
      </p>

      <Testimonies />

      <p className="mb-4">
        Ce grand esprit qui croit que l’Eglise doit retrouver sa vraie place au
        sein de notre société, veut voir une Eglise forte et puissante,
        recouvrant son caractère sacré dont elle n’aurait jamais dû se départir.
        Il est aujourd’hui, une voix porteuse pour une nouvelle génération de
        leaders dans le monde.
      </p>
      <p className="mb-4">
        Malgré sa proximité avec les grands de ce monde, Hommes de pouvoir et
        Leaders politiques, il est un ami des veuves, des orphelins et des moins
        privilégiés, un modèle pour sa génération mais un homme humble,
        travaillant sans relâche pour l'avancement du Royaume de Dieu.
      </p>
      <p className="mb-4">
        Il a co-fondé la <strong>King Dream’s World Foundation</strong> qui est
        une ONG caritative pour l’encadrement et le soutien des veuves, des
        orphelins, des personnes souffrant d’un handicap et des personnes
        nécessiteuses.
      </p>
      <p className="mb-4">
        Marié à la merveilleuse et charmante Gloria Wonders, le Père King G.
        Joshua Love est père de 5 enfants.
      </p>
      <p className="mb-4">
      Son credo <strong>« l’Amour, c’est la Religion de Dieu »</strong>. 
      </p>
    </div>
  );
};

export default Father;
