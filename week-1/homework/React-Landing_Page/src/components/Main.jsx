import {Card} from './CardComponent.jsx';
import {TopicComponent} from './TopicComponent.jsx';
import {QrComponent} from './QR-Component.jsx';

export const MainSection = () => {
const cardItems = [
  { cardTitle: "Fahdescription",
    description: "Uber bringt dich überall hin. Fahrt bestellen, einsteigen und losfahren.",
    icon: "https://mobile-content.uber.com/launch-experience/ride.png"
  }, 
  { cardTitle: "Reserviere",
    description: "Reserviere deine Fahrt im Voraus, damit du dich am Tag deiner Fahrt entspannt zurücklehnen kannst.",
    icon: "https://mobile-content.uber.com/uber_reserve/reserve_clock.png"
  },
  { cardTitle: "Kurier*in",
    description: "Uber macht die Lieferung von Artikeln noch am selben Tag jetzt einfacher als je zuvor.",
    icon: "https://cn-geo1.uber.com/static/mobile-content/Courier.png"
  },
  { cardTitle: "Essen",
    description: "Nutze die Uber Eats App und lasse dir Essen von lokalen Restaurants liefern.",
    icon: "https://mobile-content.uber.com/eats/ub_mode_nav_eats.png"
  }
];

const topicItems = [
  {
    title: "Melde dich an, um deine Kontodaten einzusehen.",
    description: "Sieh dir vergangene Fahrten, personalisierte Vorschläge, Support-Ressourcen und vieles mehr an.",
    buttonText: "Bei deinem Konto anmelden",
    prompt: "Erstelle ein Konto"
  },
  {
    title: "Fahre nach deinem Zeitplan und erziele die Umsätze, die du brauchst",
    description: "Gestalte deinen Zeitplan effizienter durch Lieferungen, Fahrten oder beides zusammen. Du kannst deinen eigenen Wagen nutzen oder einen Mietwagen über die Uber App auswählen.",
    buttonText: "Erste Schritte",
    prompt: "Du hast bereits ein Konto? Anmelden"
  },
  {
    title: "Uber, wie Sie es kennen – neu erfunden für Unternehmen",
    description: "Uber for Business ist eine App zur Verwaltung von globalen Fahrten und Mahlzeiten sowie lokalen Lieferungen für Unternehmen jeder Größe.",
    buttonText: "Erste Schritte",
    prompt: "Lösungen ansehen"
  }
]

const qrItems = [
  {
    qrImage: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1690807720/assets/a5/9986ad-0d9f-4396-8539-389bce97f579/original/Final-Download-Uber-App.png",
    appDownloadText: "Lade die Uber App herunter"
  },
  {
    qrImage: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1690807720/assets/a5/9986ad-0d9f-4396-8539-389bce97f579/original/Final-Download-Uber-App.png",
    appDownloadText: "Fahrer-App herunterladen"
  }];

    return (
        <>
        <section id="main-section" className="px-16 w-full">
      <div className="px-16 h-auto w-full">
      <h2 className="text-[36px] font-bold mb-[30px]">Vorschläge</h2>
      <div className="flex flex-wrap gap-4 w-full h-auto items-center">
        {cardItems.map((cardItem, index) => {
         return (<Card
          key={index} 
          {...cardItem}
          ></Card> 
        )}
        )}
      </div>
      </div>
    </section>
    <section className="p-16 w-full">
      <div className="flex justify-between px-16 h-full w-full">
        <div className="h-auto">
          <TopicComponent {...topicItems[0]}></TopicComponent>
        </div>
        <img src="https://www.uber-assets.com/image/upload/v1753139368/assets/85/0e6b6d-a29e-4960-bcab-46de99547d24/original/Signup-roundededge-1.svg" alt="" />
        </div>
        <div className="flex justify-between p-16 h-full w-full">
          <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1684855112/assets/96/4dd3d1-94e7-481e-b28c-08d59353b9e0/original/earner-illustra.png" alt="" />
        <div className="h-auto">
          <TopicComponent {...topicItems[1]}></TopicComponent>
        </div>
        </div>
        <div className="flex justify-between p-16 h-full w-full">
        <div className="h-auto">
          <TopicComponent {...topicItems[2]}></TopicComponent>
        </div>
        <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1684887108/assets/76/baf1ea-385a-408c-846b-59211086196c/original/u4b-square.png" alt="" />
        </div>
    </section >
    <section className="p-16 w-full bg-[#f3f3f3]">
      <div className="px-16 h-full w-full">
        <h3 className="text-[36px] font-bold mb-[32px]">In den Apps ist es einfacher</h3>
        <div className="flex justify-between flex-wrap h-full w-full">
        <QrComponent {...qrItems[0]}></QrComponent>
        <QrComponent {...qrItems[1]}></QrComponent>
        </div>
      </div>
    </section>
    </>
    )
}