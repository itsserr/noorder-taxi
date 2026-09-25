export type Region = {
  slug: string;
  name: string;
  title: string;
  h1: string;
  metaDescription: string;
  intro: string[];
  places: string[];
  sections: { heading: string; body: string }[];
};

export const REGIONS: Region[] = [
  {
    slug: "groningen",
    name: "Groningen",
    title: "Taxi Groningen",
    h1: "Taxi in Groningen en omgeving",
    metaDescription:
      "Taxi nodig in Groningen? Noorder Taxi rijdt dag en nacht door stad en provincie. Luchthavenvervoer naar Schiphol en Groningen Airport Eelde, zakelijk en particulier vervoer. Bel of app 06-31304241.",
    intro: [
      "Noorder Taxi is uw vaste taxi in de stad en provincie Groningen. Dag en nacht, op afspraak, brengen wij u van deur tot deur — een vroege vlucht, een zakelijke afspraak of een avond in de binnenstad.",
      "Elke rit wordt telefonisch bevestigd, zodat u nooit voor verrassingen komt te staan. U rijdt mee met een vaste, ervaren chauffeur die de regio door en door kent.",
    ],
    places: [
      "Groningen (stad)",
      "Haren",
      "Ten Boer",
      "Zuidhorn",
      "Bedum",
      "Winsum",
      "Leek",
      "Hoogezand-Sappemeer",
      "Veendam",
      "Delfzijl",
    ],
    sections: [
      {
        heading: "Luchthavenvervoer vanuit Groningen",
        body: "Groningen Airport Eelde ligt op ongeveer een kwartier rijden vanuit de stad. Vertrekt of landt u op Schiphol, dan rekent u op circa twee uur (ongeveer 195 kilometer). Wij vertrekken ruim op tijd en houden uw vlucht in de gaten, zodat we bij vertraging automatisch meebewegen met uw aankomsttijd.",
      },
      {
        heading: "Zakelijk vervoer en een avond uit",
        body: "Van directievervoer en het ophalen van gasten tot een avond rond de Grote Markt: u wordt representatief en op tijd gebracht. Ook voor het station, Martiniplaza of een evenement in de stad staan wij voor u klaar.",
      },
      {
        heading: "Overal in de provincie",
        body: "Ook buiten de stad bent u bij ons aan het juiste adres. Van Haren en Ten Boer tot Winsum, Leek en Delfzijl: wij rijden door de hele provincie, dag en nacht op afspraak.",
      },
    ],
  },
  {
    slug: "friesland",
    name: "Friesland",
    title: "Taxi Friesland",
    h1: "Taxi in Friesland",
    metaDescription:
      "Taxi in Friesland nodig? Noorder Taxi rijdt vanuit Groningen door heel Friesland — naar de veerhaven van Harlingen, Leeuwarden en Schiphol. Dag en nacht op afspraak. Bel of app 06-31304241.",
    intro: [
      "Vanuit onze basis in Groningen rijden wij heel Friesland. Of u nu in Leeuwarden woont, naar de boot in Harlingen moet of een transfer naar Schiphol nodig heeft: wij brengen u er rustig en op tijd naartoe.",
      "Elke rit wordt telefonisch bevestigd. U reist met een vaste chauffeur, van deur tot deur.",
    ],
    places: [
      "Leeuwarden",
      "Drachten",
      "Heerenveen",
      "Sneek",
      "Harlingen",
      "Dokkum",
      "Franeker",
      "Burgum",
    ],
    sections: [
      {
        heading: "Op tijd naar de Waddeneilanden",
        body: "Op weg naar Terschelling of Vlieland? Wij brengen u naar de veerhaven van Harlingen, waar Rederij Doeksen vaart. We houden rekening met de vertrektijden van de veerboot, zodat u de overtocht nooit mist — en staan bij terugkomst weer voor u klaar.",
      },
      {
        heading: "Luchthavenvervoer vanuit Friesland",
        body: "Voor een vlucht vanaf Schiphol vertrekken wij ruim op tijd; vanuit Friesland rekent u afhankelijk van uw vertrekplaats op ongeveer twee uur. Ook naar Groningen Airport Eelde rijden wij dagelijks.",
      },
      {
        heading: "Steden en dorpen in Friesland",
        body: "Van Leeuwarden, Drachten en Heerenveen tot Sneek, Dokkum en Franeker: waar u ook opgehaald wilt worden, wij plannen de rit nauwkeurig in.",
      },
    ],
  },
  {
    slug: "drenthe",
    name: "Drenthe",
    title: "Taxi Drenthe",
    h1: "Taxi in Drenthe",
    metaDescription:
      "Taxi in Drenthe nodig? Noorder Taxi rijdt door heel Drenthe — Assen, Emmen, Hoogeveen — en naar Groningen Airport Eelde en Schiphol. Dag en nacht op afspraak. Bel of app 06-31304241.",
    intro: [
      "Noorder Taxi rijdt door heel Drenthe. Van een luchthaventransfer tot een avond uit of een vaste rit: wij brengen u veilig en op tijd van deur tot deur.",
      "Elke reservering wordt telefonisch bevestigd, en u rijdt mee met een vaste, ervaren chauffeur.",
    ],
    places: [
      "Assen",
      "Emmen",
      "Hoogeveen",
      "Meppel",
      "Coevorden",
      "Roden",
      "Eelde",
      "Beilen",
    ],
    sections: [
      {
        heading: "Groningen Airport Eelde ligt in Drenthe",
        body: "Het vliegveld van het noorden ligt in Eelde, op een kwartier van de stad Groningen. Wij brengen en halen u hier dagelijks, en volgen uw vlucht zodat we ook bij vertraging op tijd klaarstaan.",
      },
      {
        heading: "Evenementen en dagjes uit",
        body: "Naar de TT in Assen, een concert of Wildlands in Emmen? Wij brengen uw gezelschap veilig heen en weer terug, zodat niemand hoeft te rijden of te zoeken naar een parkeerplaats.",
      },
      {
        heading: "Naar Schiphol en verder",
        body: "Voor een vlucht vanaf Schiphol vertrekken wij ruim op tijd; vanuit Drenthe rekent u op ongeveer twee uur. Van Assen en Emmen tot Hoogeveen en Meppel: wij plannen de rit nauwkeurig in.",
      },
    ],
  },
];

export function getRegion(slug: string): Region | undefined {
  return REGIONS.find((r) => r.slug === slug);
}
