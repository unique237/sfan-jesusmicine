import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Field, Label, Switch } from "@headlessui/react";
import ContactInfo from "../components/ContactInfo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//import { code } from "@heroui/theme";

export default function Example() {

  //const [selectedValue, setSelectedValue] = useState('Cameroun');

  const [agreed, setAgreed] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: "",
    phoneNumber: "",
    country: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://server.sfanjesusmicine.org/api/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success("Votre message a été envoyé avec success !");
        setFormData({
          name: "",
          email: "",
          phoneCode: "",
          phoneNumber: "",
          country: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Erreur, Message Non-envoyé.");
      }
    } catch (error) {
      toast.error("VErreur Serveur !");
    }
  };

  return (
    <div className="bg-white px-6 py-6 sm:py-8 lg:px-8">
      <ToastContainer />
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
        onSubmit={handleSubmit}
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
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
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
                value={formData.email}
                onChange={handleChange}
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
                    name="phoneCode"
                    value={formData.phoneCode}
                    onChange={handleChange}
                    autoComplete="code"
                    aria-label="code"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline-none"
                  >
                    <option value="AFG(+93)">AFG(+93)</option>
                    <option value="ALB(+355)">ALB(+355)</option>
                    <option value="DZA(+213)">DZA(+213)</option>
                    <option value="AND(+376)">AND(+376)</option>
                    <option value="AGO(+244)">AGO(+244)</option>
                    <option value="ARG(+54)">ARG(+54)</option>
                    <option value="ARM(+374)">ARM(+374)</option>
                    <option value="AUS(+61)">AUS(+61)</option>
                    <option value="AUT(+43)">AUT(+43)</option>
                    <option value="AZE(+994)">AZE(+994)</option>
                    <option value="BHS(+1-242)">BHS(+1-242)</option>
                    <option value="BHR(+973)">BHR(+973)</option>
                    <option value="BGD(+880)">BGD(+880)</option>
                    <option value="BRB(+1-246)">BRB(+1-246)</option>
                    <option value="BLR(+375)">BLR(+375)</option>
                    <option value="BEL(+32)">BEL(+32)</option>
                    <option value="BLZ(+501)">BLZ(+501)</option>
                    <option value="BEN(+229)">BEN(+229)</option>
                    <option value="BTN(+975)">BTN(+975)</option>
                    <option value="BOL(+591)">BOL(+591)</option>
                    <option value="BIH(+387)">BIH(+387)</option>
                    <option value="BWA(+267)">BWA(+267)</option>
                    <option value="BRA(+55)">BRA(+55)</option>
                    <option value="BRN(+673)">BRN(+673)</option>
                    <option value="BGR(+359)">BGR(+359)</option>
                    <option value="BFA(+226)">BFA(+226)</option>
                    <option value="BDI(+257)">BDI(+257)</option>
                    <option value="CPV(+238)">CPV(+238)</option>
                    <option value="KHM(+855)">KHM(+855)</option>
                    <option value="CMR(+237)">CMR(+237)</option>
                    <option value="CAN(+1)">CAN(+1)</option>
                    <option value="CAF(+236)">CAF(+236)</option>
                    <option value="TCD(+235)">TCD(+235)</option>
                    <option value="CHL(+56)">CHL(+56)</option>
                    <option value="CHN(+86)">CHN(+86)</option>
                    <option value="COL(+57)">COL(+57)</option>
                    <option value="COM(+269)">COM(+269)</option>
                    <option value="COG(+242)">COG(+242)</option>
                    <option value="COD(+243)">COD(+243)</option>
                    <option value="CRI(+506)">CRI(+506)</option>
                    <option value="CIV(+225)">CIV(+225)</option>
                    <option value="HRV(+385)">HRV(+385)</option>
                    <option value="CUB(+53)">CUB(+53)</option>
                    <option value="CYP(+357)">CYP(+357)</option>
                    <option value="CZE(+420)">CZE(+420)</option>
                    <option value="DNK(+45)">DNK(+45)</option>
                    <option value="DJI(+253)">DJI(+253)</option>
                    <option value="DMA(+1-767)">DMA(+1-767)</option>
                    <option value="DOM(+1-809)">DOM(+1-809)</option>
                    <option value="ECU(+593)">ECU(+593)</option>
                    <option value="EGY(+20)">EGY(+20)</option>
                    <option value="SLV(+503)">SLV(+503)</option>
                    <option value="GNQ(+240)">GNQ(+240)</option>
                    <option value="ERI(+291)">ERI(+291)</option>
                    <option value="EST(+372)">EST(+372)</option>
                    <option value="SWZ(+268)">SWZ(+268)</option>
                    <option value="ETH(+251)">ETH(+251)</option>
                    <option value="FJI(+679)">FJI(+679)</option>
                    <option value="FIN(+358)">FIN(+358)</option>
                    <option value="FRA(+33)">FRA(+33)</option>
                    <option value="GAB(+241)">GAB(+241)</option>
                    <option value="GMB(+220)">GMB(+220)</option>
                    <option value="GEO(+995)">GEO(+995)</option>
                    <option value="DEU(+49)">DEU(+49)</option>
                    <option value="GHA(+233)">GHA(+233)</option>
                    <option value="GRC(+30)">GRC(+30)</option>
                    <option value="GRD(+1-473)">GRD(+1-473)</option>
                    <option value="GTM(+502)">GTM(+502)</option>
                    <option value="GIN(+224)">GIN(+224)</option>
                    <option value="GNB(+245)">GNB(+245)</option>
                    <option value="GUY(+592)">GUY(+592)</option>
                    <option value="HTI(+509)">HTI(+509)</option>
                    <option value="HND(+504)">HND(+504)</option>
                    <option value="HUN(+36)">HUN(+36)</option>
                    <option value="ISL(+354)">ISL(+354)</option>
                    <option value="IND(+91)">IND(+91)</option>
                    <option value="IDN(+62)">IDN(+62)</option>
                    <option value="IRN(+98)">IRN(+98)</option>
                    <option value="IRQ(+964)">IRQ(+964)</option>
                    <option value="IRL(+353)">IRL(+353)</option>
                    <option value="ISR(+972)">ISR(+972)</option>
                    <option value="ITA(+39)">ITA(+39)</option>
                    <option value="JAM(+1-876)">JAM(+1-876)</option>
                    <option value="JPN(+81)">JPN(+81)</option>
                    <option value="JOR(+962)">JOR(+962)</option>
                    <option value="KAZ(+7)">KAZ(+7)</option>
                    <option value="KEN(+254)">KEN(+254)</option>
                    <option value="KIR(+686)">KIR(+686)</option>
                    <option value="PRK(+850)">PRK(+850)</option>
                    <option value="KOR(+82)">KOR(+82)</option>
                    <option value="KWT(+965)">KWT(+965)</option>
                    <option value="KGZ(+996)">KGZ(+996)</option>
                    <option value="LAO(+856)">LAO(+856)</option>
                    <option value="LVA(+371)">LVA(+371)</option>
                    <option value="LBN(+961)">LBN(+961)</option>
                    <option value="LSO(+266)">LSO(+266)</option>
                    <option value="LBR(+231)">LBR(+231)</option>
                    <option value="LBY(+218)">LBY(+218)</option>
                    <option value="LIE(+423)">LIE(+423)</option>
                    <option value="LTU(+370)">LTU(+370)</option>
                    <option value="LUX(+352)">LUX(+352)</option>
                    <option value="MDG(+261)">MDG(+261)</option>
                    <option value="MWI(+265)">MWI(+265)</option>
                    <option value="MYS(+60)">MYS(+60)</option>
                    <option value="MDV(+960)">MDV(+960)</option>
                    <option value="MLI(+223)">MLI(+223)</option>
                    <option value="MLT(+356)">MLT(+356)</option>
                    <option value="MHL(+692)">MHL(+692)</option>
                    <option value="MRT(+222)">MRT(+222)</option>
                    <option value="MUS(+230)">MUS(+230)</option>
                    <option value="MEX(+52)">MEX(+52)</option>
                    <option value="FSM(+691)">FSM(+691)</option>
                    <option value="MDA(+373)">MDA(+373)</option>
                    <option value="MCO(+377)">MCO(+377)</option>
                    <option value="MNE(+382)">MNE(+382)</option>
                    <option value="MAR(+212)">MAR(+212)</option>
                    <option value="MOZ(+258)">MOZ(+258)</option>
                    <option value="MMR(+95)">MMR(+95)</option>
                    <option value="NAM(+264)">NAM(+264)</option>
                    <option value="NRU(+674)">NRU(+674)</option>
                    <option value="NPL(+977)">NPL(+977)</option>
                    <option value="NLD(+31)">NLD(+31)</option>
                    <option value="NZL(+64)">NZL(+64)</option>
                    <option value="NIC(+505)">NIC(+505)</option>
                    <option value="NER(+227)">NER(+227)</option>
                    <option value="NGA(+234)">NGA(+234)</option>
                    <option value="NOR(+47)">NOR(+47)</option>
                    <option value="OMN(+968)">OMN(+968)</option>
                    <option value="PAK(+92)">PAK(+92)</option>
                    <option value="PLW(+680)">PLW(+680)</option>
                    <option value="PAN(+507)">PAN(+507)</option>
                    <option value="PNG(+675)">PNG(+675)</option>
                    <option value="PRY(+595)">PRY(+595)</option>
                    <option value="PER(+51)">PER(+51)</option>
                    <option value="PHL(+63)">PHL(+63)</option>
                    <option value="POL(+48)">POL(+48)</option>
                    <option value="PRT(+351)">PRT(+351)</option>
                    <option value="QAT(+974)">QAT(+974)</option>
                    <option value="ROU(+40)">ROU(+40)</option>
                    <option value="RUS(+7)">RUS(+7)</option>
                    <option value="RWA(+250)">RWA(+250)</option>
                    <option value="WSM(+685)">WSM(+685)</option>
                    <option value="SMR(+378)">SMR(+378)</option>
                    <option value="STP(+239)">STP(+239)</option>
                    <option value="SAU(+966)">SAU(+966)</option>
                    <option value="SEN(+221)">SEN(+221)</option>
                    <option value="SRB(+381)">SRB(+381)</option>
                    <option value="SYC(+248)">SYC(+248)</option>
                    <option value="SLE(+232)">SLE(+232)</option>
                    <option value="SGP(+65)">SGP(+65)</option>
                    <option value="SVK(+421)">SVK(+421)</option>
                    <option value="SVN(+386)">SVN(+386)</option>
                    <option value="SLB(+677)">SLB(+677)</option>
                    <option value="SOM(+252)">SOM(+252)</option>
                    <option value="ZAF(+27)">ZAF(+27)</option>
                    <option value="ESP(+34)">ESP(+34)</option>
                    <option value="LKA(+94)">LKA(+94)</option>
                    <option value="SDN(+249)">SDN(+249)</option>
                    <option value="SUR(+597)">SUR(+597)</option>
                    <option value="SWE(+46)">SWE(+46)</option>
                    <option value="CHE(+41)">CHE(+41)</option>
                    <option value="SYR(+963)">SYR(+963)</option>
                    <option value="TWN(+886)">TWN(+886)</option>
                    <option value="TJK(+992)">TJK(+992)</option>
                    <option value="TZA(+255)">TZA(+255)</option>
                    <option value="THA(+66)">THA(+66)</option>
                    <option value="TGO(+228)">TGO(+228)</option>
                    <option value="TON(+676)">TON(+676)</option>
                    <option value="TTO(+1-868)">TTO(+1-868)</option>
                    <option value="TUN(+216)">TUN(+216)</option>
                    <option value="TUR(+90)">TUR(+90)</option>
                    <option value="TKM(+993)">TKM(+993)</option>
                    <option value="TUV(+688)">TUV(+688)</option>
                    <option value="UGA(+256)">UGA(+256)</option>
                    <option value="UKR(+380)">UKR(+380)</option>
                    <option value="ARE(+971)">ARE(+971)</option>
                    <option value="GBR(+44)">GBR(+44)</option>
                    <option value="USA(+1)">USA(+1)</option>
                    <option value="URY(+598)">URY(+598)</option>
                    <option value="UZB(+998)">UZB(+998)</option>
                    <option value="VUT(+678)">VUT(+678)</option>
                    <option value="VAT(+39)">VAT(+39)</option>
                    <option value="VEN(+58)">VEN(+58)</option>
                    <option value="VNM(+84)">VNM(+84)</option>
                    <option value="YEM(+967)">YEM(+967)</option>
                    <option value="ZMB(+260)">ZMB(+260)</option>
                    <option value="ZWE(+263)">ZWE(+263)</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 h-5 w-5 self-center justify-self-end text-gray-500"
                  />
                </div>
                <input
                  id="phone-number"
                  name="phoneNumber"
                  type="number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
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
                id="country"
                value={formData.country}
                onChange={handleChange}
                name="country"
                autoComplete="country"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600"
              >
                {/*<option value="" unselectable="">Sélectionnez un pays</option>*/}
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albanie">Albanie</option>
                <option value="Algérie">Algérie</option>
                <option value="Andorre">Andorre</option>
                <option value="Angola">Angola</option>
                <option value="Argentine">Argentine</option>
                <option value="Arménie">Arménie</option>
                <option value="Australie">Australie</option>
                <option value="Autriche">Autriche</option>
                <option value="Azerbaïdjan">Azerbaïdjan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahreïn">Bahreïn</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbade">Barbade</option>
                <option value="Bélarus">Bélarus</option>
                <option value="Belgique">Belgique</option>
                <option value="Belize">Belize</option>
                <option value="Bénin">Bénin</option>
                <option value="Bhoutan">Bhoutan</option>
                <option value="Bolivie">Bolivie</option>
                <option value="Bosnie-Herzégovine">Bosnie-Herzégovine</option>
                <option value="Botswana">Botswana</option>
                <option value="Brésil">Brésil</option>
                <option value="Brunéi">Brunéi</option>
                <option value="Bulgarie">Bulgarie</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cabo Verde">Cabo Verde</option>
                <option value="Cambodge">Cambodge</option>
                <option value="Cameroun">Cameroun</option>
                <option value="Canada">Canada</option>
                <option value="République centrafricaine">
                  République centrafricaine
                </option>
                <option value="Tchad">Tchad</option>
                <option value="Chili">Chili</option>
                <option value="Chine">Chine</option>
                <option value="Colombie">Colombie</option>
                <option value="Comores">Comores</option>
                <option value="Congo">Congo</option>
                <option value="République démocratique du Congo">
                  République démocratique du Congo
                </option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                <option value="Croatie">Croatie</option>
                <option value="Cuba">Cuba</option>
                <option value="Chypre">Chypre</option>
                <option value="République tchèque">République tchèque</option>
                <option value="Danemark">Danemark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominique">Dominique</option>
                <option value="République dominicaine">
                  République dominicaine
                </option>
                <option value="Équateur">Équateur</option>
                <option value="Égypte">Égypte</option>
                <option value="Salvador">Salvador</option>
                <option value="Guinée équatoriale">Guinée équatoriale</option>
                <option value="Érythrée">Érythrée</option>
                <option value="Estonie">Estonie</option>
                <option value="Eswatini">Eswatini</option>
                <option value="Éthiopie">Éthiopie</option>
                <option value="Fidji">Fidji</option>
                <option value="Finlande">Finlande</option>
                <option value="France">France</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambie">Gambie</option>
                <option value="Géorgie">Géorgie</option>
                <option value="Allemagne">Allemagne</option>
                <option value="Ghana">Ghana</option>
                <option value="Grèce">Grèce</option>
                <option value="Grenade">Grenade</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinée">Guinée</option>
                <option value="Guinée-Bissau">Guinée-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haïti">Haïti</option>
                <option value="Honduras">Honduras</option>
                <option value="Hongrie">Hongrie</option>
                <option value="Islande">Islande</option>
                <option value="Inde">Inde</option>
                <option value="Indonésie">Indonésie</option>
                <option value="Iran">Iran</option>
                <option value="Irak">Irak</option>
                <option value="Irlande">Irlande</option>
                <option value="Israël">Israël</option>
                <option value="Italie">Italie</option>
                <option value="Jamaïque">Jamaïque</option>
                <option value="Japon">Japon</option>
                <option value="Jordanie">Jordanie</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Corée du Nord">Corée du Nord</option>
                <option value="Corée du Sud">Corée du Sud</option>
                <option value="Koweït">Koweït</option>
                <option value="Kirghizistan">Kirghizistan</option>
                <option value="Laos">Laos</option>
                <option value="Lettonie">Lettonie</option>
                <option value="Liban">Liban</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Libéria">Libéria</option>
                <option value="Libye">Libye</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lituanie">Lituanie</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaisie">Malaisie</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malte">Malte</option>
                <option value="Îles Marshall">Îles Marshall</option>
                <option value="Mauritanie">Mauritanie</option>
                <option value="Maurice">Maurice</option>
                <option value="Mexique">Mexique</option>
                <option value="Micronésie">Micronésie</option>
                <option value="Moldavie">Moldavie</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolie">Mongolie</option>
                <option value="Monténégro">Monténégro</option>
                <option value="Maroc">Maroc</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibie">Namibie</option>
                <option value="Nauru">Nauru</option>
                <option value="Népal">Népal</option>
                <option value="Pays-Bas">Pays-Bas</option>
                <option value="Nouvelle-Zélande">Nouvelle-Zélande</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Norvège">Norvège</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palaos">Palaos</option>
                <option value="Panama">Panama</option>
                <option value="Papouasie-Nouvelle-Guinée">
                  Papouasie-Nouvelle-Guinée
                </option>
                <option value="Paraguay">Paraguay</option>
                <option value="Pérou">Pérou</option>
                <option value="Philippines">Philippines</option>
                <option value="Pologne">Pologne</option>
                <option value="Portugal">Portugal</option>
                <option value="Qatar">Qatar</option>
                <option value="Roumanie">Roumanie</option>
                <option value="Russie">Russie</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint-Kitts-et-Nevis">
                  Saint-Kitts-et-Nevis
                </option>
                <option value="Sainte-Lucie">Sainte-Lucie</option>
                <option value="Saint-Vincent-et-les Grenadines">
                  Saint-Vincent-et-les Grenadines
                </option>
                <option value="Samoa">Samoa</option>
                <option value="Saint-Marin">Saint-Marin</option>
                <option value="Sao Tomé-et-Principe">
                  Sao Tomé-et-Principe
                </option>
                <option value="Arabie Saoudite">Arabie Saoudite</option>
                <option value="Sénégal">Sénégal</option>
                <option value="Serbie">Serbie</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapour">Singapour</option>
                <option value="Slovaquie">Slovaquie</option>
                <option value="Slovénie">Slovénie</option>
                <option value="Îles Salomon">Îles Salomon</option>
                <option value="Somalie">Somalie</option>
                <option value="Afrique du Sud">Afrique du Sud</option>
                <option value="Espagne">Espagne</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Soudan">Soudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Suède">Suède</option>
                <option value="Suisse">Suisse</option>
                <option value="Syrie">Syrie</option>
                <option value="Taïwan">Taïwan</option>
                <option value="Tadjikistan">Tadjikistan</option>
                <option value="Tanzanie">Tanzanie</option>
                <option value="Thaïlande">Thaïlande</option>
                <option value="Togo">Togo</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinité-et-Tobago">Trinité-et-Tobago</option>
                <option value="Tunisie">Tunisie</option>
                <option value="Turquie">Turquie</option>
                <option value="Turkménistan">Turkménistan</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Ouganda">Ouganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="Émirats Arabes Unis">Émirats Arabes Unis</option>
                <option value="Royaume-Uni">Royaume-Uni</option>
                <option value="États-Unis">États-Unis</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Ouzbékistan">Ouzbékistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Vatican">Vatican</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Yémen">Yémen</option>
                <option value="Zambie">Zambie</option>
                <option value="Zimbabwe">Zimbabwe</option>
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
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-blue-500"
                
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
