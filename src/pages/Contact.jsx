import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Field, Label, Switch } from "@headlessui/react";
import ContactInfo from "../components/ContactInfo";

export default function Example() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="bg-white px-6 py-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-yellow-400 sm:text-5xl">
          CONTACTEZ NOUS
        </h2>
        <p className="mt-2 text-lg text-blue-500 italic">
          « l’Amour, c’est la Religion de Dieu »
        </p>
        <p className="mt-2 text-lg text-gray-700 italic text-justify sm:text-center">
          Vous avez une question, une préoccupation ou une suggestion à nous
          faire parvenir ? N'hésitez pas à nous contacter. Nous serons ravis de
          vous lire et de vous répondre dans les plus brefs délais.
        </p>
      </div>

      <form
        action="#"
        method="POST"
        className="mx-auto mt-3 max-w-2xl sm:mt-20 shadow-lg p-2 ring-1 ring-gray-300 rounded-lg "
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-gray-900"
            >
              Noms et Prénoms
            </label>
            <div className="mt-2">
              <input
                id="company"
                name="noms"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900"
            >
              E-mail
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold text-gray-900"
            >
              Numéro de téléphone
            </label>
            <div className="mt-2">
              <div className="flex rounded-md bg-white outline outline-1 outline-gray-300 focus-within:outline-2 focus:outline-indigo-600">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="code"
                    name="code"
                    autoComplete="code"
                    aria-label="code"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline-none"
                  >
                    <option>AFG(+93)</option>
                    <option>ALB(+355)</option>
                    <option>DZA(+213)</option>
                    <option>AND(+376)</option>
                    <option>AGO(+244)</option>
                    <option>ARG(+54)</option>
                    <option>ARM(+374)</option>
                    <option>AUS(+61)</option>
                    <option>AUT(+43)</option>
                    <option>AZE(+994)</option>
                    <option>BHS(+1-242)</option>
                    <option>BHR(+973)</option>
                    <option>BGD(+880)</option>
                    <option>BRB(+1-246)</option>
                    <option>BLR(+375)</option>
                    <option>BEL(+32)</option>
                    <option>BLZ(+501)</option>
                    <option>BEN(+229)</option>
                    <option>BTN(+975)</option>
                    <option>BOL(+591)</option>
                    <option>BIH(+387)</option>
                    <option>BWA(+267)</option>
                    <option>BRA(+55)</option>
                    <option>BRN(+673)</option>
                    <option>BGR(+359)</option>
                    <option>BFA(+226)</option>
                    <option>BDI(+257)</option>
                    <option>CPV(+238)</option>
                    <option>KHM(+855)</option>
                    <option selected>CMR(+237)</option>
                    <option>CAN(+1)</option>
                    <option>CAF(+236)</option>
                    <option>TCD(+235)</option>
                    <option>CHL(+56)</option>
                    <option>CHN(+86)</option>
                    <option>COL(+57)</option>
                    <option>COM(+269)</option>
                    <option>COG(+242)</option>
                    <option>COD(+243)</option>
                    <option>CRI(+506)</option>
                    <option>CIV(+225)</option>
                    <option>HRV(+385)</option>
                    <option>CUB(+53)</option>
                    <option>CYP(+357)</option>
                    <option>CZE(+420)</option>
                    <option>DNK(+45)</option>
                    <option>DJI(+253)</option>
                    <option>DMA(+1-767)</option>
                    <option>DOM(+1-809)</option>
                    <option>ECU(+593)</option>
                    <option>EGY(+20)</option>
                    <option>SLV(+503)</option>
                    <option>GNQ(+240)</option>
                    <option>ERI(+291)</option>
                    <option>EST(+372)</option>
                    <option>SWZ(+268)</option>
                    <option>ETH(+251)</option>
                    <option>FJI(+679)</option>
                    <option>FIN(+358)</option>
                    <option>FRA(+33)</option>
                    <option>GAB(+241)</option>
                    <option>GMB(+220)</option>
                    <option>GEO(+995)</option>
                    <option>DEU(+49)</option>
                    <option>GHA(+233)</option>
                    <option>GRC(+30)</option>
                    <option>GRD(+1-473)</option>
                    <option>GTM(+502)</option>
                    <option>GIN(+224)</option>
                    <option>GNB(+245)</option>
                    <option>GUY(+592)</option>
                    <option>HTI(+509)</option>
                    <option>HND(+504)</option>
                    <option>HUN(+36)</option>
                    <option>ISL(+354)</option>
                    <option>IND(+91)</option>
                    <option>IDN(+62)</option>
                    <option>IRN(+98)</option>
                    <option>IRQ(+964)</option>
                    <option>IRL(+353)</option>
                    <option>ISR(+972)</option>
                    <option>ITA(+39)</option>
                    <option>JAM(+1-876)</option>
                    <option>JPN(+81)</option>
                    <option>JOR(+962)</option>
                    <option>KAZ(+7)</option>
                    <option>KEN(+254)</option>
                    <option>KIR(+686)</option>
                    <option>PRK(+850)</option>
                    <option>KOR(+82)</option>
                    <option>KWT(+965)</option>
                    <option>KGZ(+996)</option>
                    <option>LAO(+856)</option>
                    <option>LVA(+371)</option>
                    <option>LBN(+961)</option>
                    <option>LSO(+266)</option>
                    <option>LBR(+231)</option>
                    <option>LBY(+218)</option>
                    <option>LIE(+423)</option>
                    <option>LTU(+370)</option>
                    <option>LUX(+352)</option>
                    <option>MDG(+261)</option>
                    <option>MWI(+265)</option>
                    <option>MYS(+60)</option>
                    <option>MDV(+960)</option>
                    <option>MLI(+223)</option>
                    <option>MLT(+356)</option>
                    <option>MHL(+692)</option>
                    <option>MRT(+222)</option>
                    <option>MUS(+230)</option>
                    <option>MEX(+52)</option>
                    <option>FSM(+691)</option>
                    <option>MDA(+373)</option>
                    <option>MCO(+377)</option>
                    <option>MNG(+976)</option>
                    <option>MNE(+382)</option>
                    <option>MAR(+212)</option>
                    <option>MOZ(+258)</option>
                    <option>MMR(+95)</option>
                    <option>NAM(+264)</option>
                    <option>NRU(+674)</option>
                    <option>NPL(+977)</option>
                    <option>NLD(+31)</option>
                    <option>NZL(+64)</option>
                    <option>NIC(+505)</option>
                    <option>NER(+227)</option>
                    <option>NGA(+234)</option>
                    <option>NOR(+47)</option>
                    <option>OMN(+968)</option>
                    <option>PAK(+92)</option>
                    <option>PLW(+680)</option>
                    <option>PAN(+507)</option>
                    <option>PNG(+675)</option>
                    <option>PRY(+595)</option>
                    <option>PER(+51)</option>
                    <option>PHL(+63)</option>
                    <option>POL(+48)</option>
                    <option>PRT(+351)</option>
                    <option>QAT(+974)</option>
                    <option>ROU(+40)</option>
                    <option>RUS(+7)</option>
                    <option>RWA(+250)</option>
                    <option>WSM(+685)</option>
                    <option>SMR(+378)</option>
                    <option>STP(+239)</option>
                    <option>SAU(+966)</option>
                    <option>SEN(+221)</option>
                    <option>SRB(+381)</option>
                    <option>SYC(+248)</option>
                    <option>SLE(+232)</option>
                    <option>SGP(+65)</option>
                    <option>SVK(+421)</option>
                    <option>SVN(+386)</option>
                    <option>SLB(+677)</option>
                    <option>SOM(+252)</option>
                    <option>ZAF(+27)</option>
                    <option>ESP(+34)</option>
                    <option>LKA(+94)</option>
                    <option>SDN(+249)</option>
                    <option>SUR(+597)</option>
                    <option>SWE(+46)</option>
                    <option>CHE(+41)</option>
                    <option>SYR(+963)</option>
                    <option>TWN(+886)</option>
                    <option>TJK(+992)</option>
                    <option>TZA(+255)</option>
                    <option>THA(+66)</option>
                    <option>TGO(+228)</option>
                    <option>TON(+676)</option>
                    <option>TTO(+1-868)</option>
                    <option>TUN(+216)</option>
                    <option>TUR(+90)</option>
                    <option>TKM(+993)</option>
                    <option>TUV(+688)</option>
                    <option>UGA(+256)</option>
                    <option>UKR(+380)</option>
                    <option>ARE(+971)</option>
                    <option>GBR(+44)</option>
                    <option>USA(+1)</option>
                    <option>URY(+598)</option>
                    <option>UZB(+998)</option>
                    <option>VUT(+678)</option>
                    <option>VAT(+39)</option>
                    <option>VEN(+58)</option>
                    <option>VNM(+84)</option>
                    <option>YEM(+967)</option>
                    <option>ZMB(+260)</option>
                    <option>ZWE(+263)</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 h-5 w-5 self-center justify-self-end text-gray-500"
                  />
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="Numéro de téléphone"
                  className="block w-full grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="pays"
              className="block text-sm font-semibold text-gray-900"
            >
              Pays
            </label>
            <div className="mt-2">
              <select
                id="pays"
                name="pays"
                autoComplete="pays"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600"
              >
                <option value="">Sélectionnez un pays</option>
                <option value="AFG">Afghanistan</option>
                <option value="ALB">Albanie</option>
                <option value="DZA">Algérie</option>
                <option value="AND">Andorre</option>
                <option value="AGO">Angola</option>
                <option value="ATG">Antigua-et-Barbuda</option>
                <option value="ARG">Argentine</option>
                <option value="ARM">Arménie</option>
                <option value="AUS">Australie</option>
                <option value="AUT">Autriche</option>
                <option value="AZE">Azerbaïdjan</option>
                <option value="BHS">Bahamas</option>
                <option value="BHR">Bahreïn</option>
                <option value="BGD">Bangladesh</option>
                <option value="BRB">Barbade</option>
                <option value="BLR">Biélorussie</option>
                <option value="BEL">Belgique</option>
                <option value="BLZ">Belize</option>
                <option value="BEN">Bénin</option>
                <option value="BTN">Bhoutan</option>
                <option value="BOL">Bolivie</option>
                <option value="BIH">Bosnie-Herzégovine</option>
                <option value="BWA">Botswana</option>
                <option value="BRA">Brésil</option>
                <option value="BRN">Brunei</option>
                <option value="BGR">Bulgarie</option>
                <option value="BFA">Burkina Faso</option>
                <option value="BDI">Burundi</option>
                <option value="CPV">Cap-Vert</option>
                <option value="KHM">Cambodge</option>
                <option value="CMR" selected>
                  Cameroun
                </option>
                <option value="CAN">Canada</option>
                <option value="CAF">République centrafricaine</option>
                <option value="TCD">Tchad</option>
                <option value="CHL">Chili</option>
                <option value="CHN">Chine</option>
                <option value="COL">Colombie</option>
                <option value="COM">Comores</option>
                <option value="COG">Congo</option>
                <option value="CRI">Costa Rica</option>
                <option value="CIV">Côte d'Ivoire</option>
                <option value="HRV">Croatie</option>
                <option value="CUB">Cuba</option>
                <option value="CYP">Chypre</option>
                <option value="CZE">Tchéquie</option>
                <option value="DNK">Danemark</option>
                <option value="DJI">Djibouti</option>
                <option value="DMA">Dominique</option>
                <option value="DOM">République dominicaine</option>
                <option value="ECU">Équateur</option>
                <option value="EGY">Égypte</option>
                <option value="SLV">Salvador</option>
                <option value="GNQ">Guinée équatoriale</option>
                <option value="ERI">Érythrée</option>
                <option value="EST">Estonie</option>
                <option value="SWZ">Eswatini</option>
                <option value="ETH">Éthiopie</option>
                <option value="FJI">Fidji</option>
                <option value="FIN">Finlande</option>
                <option value="FRA">France</option>
                <option value="GAB">Gabon</option>
                <option value="GMB">Gambie</option>
                <option value="GEO">Géorgie</option>
                <option value="DEU">Allemagne</option>
                <option value="GHA">Ghana</option>
                <option value="GRC">Grèce</option>
                <option value="GRD">Grenade</option>
                <option value="GTM">Guatemala</option>
                <option value="GIN">Guinée</option>
                <option value="GNB">Guinée-Bissau</option>
                <option value="GUY">Guyana</option>
                <option value="HTI">Haïti</option>
                <option value="HND">Honduras</option>
                <option value="HUN">Hongrie</option>
                <option value="ISL">Islande</option>
                <option value="IND">Inde</option>
                <option value="IDN">Indonésie</option>
                <option value="IRN">Iran</option>
                <option value="IRQ">Irak</option>
                <option value="IRL">Irlande</option>
                <option value="ISR">Israël</option>
                <option value="ITA">Italie</option>
                <option value="JAM">Jamaïque</option>
                <option value="JPN">Japon</option>
                <option value="JOR">Jordanie</option>
                <option value="KAZ">Kazakhstan</option>
                <option value="KEN">Kenya</option>
                <option value="KIR">Kiribati</option>
                <option value="KOR">Corée du Sud</option>
                <option value="KWT">Koweït</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-gray-900"
            >
              Objet
            </label>
            <div className="mt-2">
              <input
                id="company"
                name="objet"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-900"
            >
              Message
            </label>
            <div className="mt-2">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-blue-500"
                defaultValue={""}
              />
            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-black/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 data-[checked]:bg-blue-500"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-black/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm text-gray-600">
              En sélectionnant ceci, vous acceptez notre{" "}
              <a href="#" className="font-semibold text-blue-500">
                qu'on&nbsp;vous envoi&nbsp;au moins un message en réponse
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
          >
            ENVOYER LE MESSAGE
          </button>
        </div>
      </form>
      <ContactInfo />
    </div>
  );
}
