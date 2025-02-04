import React from "react";


const AboutJesusmicine = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden w-full max-w-4xl mx-auto">
        {/* Image Section with Fixed Height */}
        <div className="w-full h-296"> {/* Adjusted height */}
          <img
            src="https://res.cloudinary.com/dmwo3fwvu/image/upload/v1738489327/jesusmicine_ef9p5y.jpg"
            alt="Jesusmicine"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content Section */}
        <div className="p-8 lg:p-12 space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            À Propos de la Jésusmicine
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
            <p className="text-lg">
              La Jésusmicine se définit comme la médecine parfaite de Dieu au
              travers de son fils Jésus. Elle est née, il y a plus de 2000 ans,
              sur la croix à Golgotha. Elle a pour fondement l’Amour de Dieu pour
              l’Homme (Jean 3, 16), le Lovisme tel que révélé au Rev. Père King G.
              Joshua Love. En effet, elle a été préfigurée par l’érection du
              serpent d’airain par Moise dans le désert (Nombres 21, 9).
            </p>

            <p className="text-lg">
              Plusieurs passages des Saintes Ecritures tels que Esaïe 53, 5 (… Et
              c’est par ses meurtrissures que nous sommes guéris), Psaumes 82,6
              (J’avais dit : Vous êtes des dieux, Vous êtes des fils du Très Haut.
              Cependant, vous mourrez comme des hommes, Vous tombez comme des
              princes quelconques.) attestent de ce que la mission première de
              Christ est celle de guérir et de sauver l’Homme-dieu devenu malade
              au fil du temps. Cette maladie s’extériorise par les différents
              problèmes, calamités que connait non seulement la race humaine, mais
              également l‘humanité toute entière en cette période si délicate.
              Christ a extériorisé cette médecine plurielle et variée par des
              faits, des gestes et des actes qui ont produit multiple guérisons
              (application de la boue issue du mélange de sa salive et de la
              poussière sur les yeux de l’aveugle, le relèvement des paralytiques,
              la résurrection de Lazare, le salut de la femme adultérine (par
              écrits sur la terre), de multiples miracles (la pêche miraculeuse,
              la multiplication des pains, le paiement des impôts avec un statère
              tiré du ventre d’un poisson…).
            </p>

            <p className="text-lg">
              Dans la Jésusmicine, Jésus est le médicament parfait. Il est à la
              fois : le médicament, le vaccin préventif (avant que tu ne sois
              affecté par les ténèbres), le vaccin curatif (lorsque tu viens à Lui
              étant déjà affecté), un antidote, un antibiotique, un anti poison…
            </p>

            <p className="text-lg">
              La Jésusmicine est cette médecine qui ne tolère aucune forme de
              ténèbres soigne toutes les maladies ou affections curables et
              incurables. Elle soigne à la fois le corps, l’âme et l’esprit. C’est
              une médecine bio, sans effet secondaire et à consommer sans
              modération.
            </p>

            <p className="text-lg">
              La Jésusmicine est donc cette plate-forme qui informe, éduque, forme
              et propage la médecine parfaite de Dieu par Jésus telle que révélé
              au Père King G. Joshua Love.
            </p>

            <p className="text-lg">
              La Jésusmicine a pour but de réunir les ouvriers de la dernière
              heure et de leur donner les outils de vulgarisation de cette
              science, afin de leur permettre de jouir parfaitement de la vie
              abondante de Christ en d’en créer autour d’eux et dans le monde
              entier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutJesusmicine;