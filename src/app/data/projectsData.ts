import ProjectData from "../models/interfaces/project.interface";

const projectsData: ProjectData[] = [
  {
    title: "Stockdata",
    description:
      "Stockdata is a Next.js application optimized for smartwatches and mobile devices. It provides real-time data, price charts, and key financial figures for stocks. With smart search filters, pagination, and local data storage via localStorage, it offers a smooth experience on small screens, without unnecessary scrolling. The backend is built with Python/Flask.",
    images: [
      {
        src: "/stockData/stocks_home_page_part1.png",
        alt: "Startsidan i StockData, en webbapplikation för börsdata. Visar huvudvyn med en översikt av aktiemarknaden och användarens bevakningslista.",
      },
      {
        src: "/stockData/stocks_home_page_part2.png",
        alt: "Den nedre delen av startsidan",
      },
      {
        src: "/stockData/stocks_detail.png",
        alt: "Detaljvyn för en specifik aktie, som visar ett diagram över aktiens utveckling och nyckeltal.",
      },
      {
        src: "/stockData/stocks_explore_part1.png",
        alt: "Den övre delen av utforskarsidan där användaren kan söka efter aktier",
      },
      {
        src: "/stockData/stocks_explore_part2.png",
        alt: "Den nedre delen av utforskarsidan, som visar ytterligare sökresultat och filtrerade listor.",
      },
      {
        src: "/stockData/stocks_empty_list.png",
        alt: "Skärmbild som visar hur användarens bevakningslista ser ut när den är tom, med en uppmaning att lägga till aktier.",
      },
    ],
    url: "https://stockdata-k09z.onrender.com",
  },
  {
    title: "Tayo",
    description:
      "Tayo is a web application developed for the consulting company Tayo, which specializes in elevators and escalators. The application was built with a Next.js frontend with a strong focus on accessibility, and a Node.js backend with an Express API and a MongoDB database. A central feature is a contact form that automatically sends an email notification to the company's employees upon submission.",
    images: [
      {
        src: "/tayo/tayo_home_screen_part1.png",
        alt: "Hemsidans övre del, som visar startsidans huvudsektion med en stor rubrik och navigationsmeny för Tayo, ett konsultföretag inom hissar och rulltrappor.",
      },
      {
        src: "/tayo/tayo_home_screen_part2.png",
        alt: "Hemsidans mittsektion, som presenterar företagets tjänster och expertis inom hissar och rulltrappor.",
      },
      {
        src: "/tayo/tayo_home_screen_part3.png",
        alt: "Hemsidans nedre de och sidfoten med kontaktinformation.",
      },
      {
        src: "/tayo/tayo_contact_form.png",
        alt: "Kontaktformuläret där besökare kan fylla i sina uppgifter för att kontakta Tayo.",
      },
      {
        src: "/tayo/tayo_thank_you_page.png",
        alt: "Tack-sidan som visas efter att en besökare har skickat in kontaktformuläret, vilket bekräftar att deras meddelande har mottagits.",
      },
    ],
    url: "https://tayo.onrender.com",
  },
];

export default projectsData;
