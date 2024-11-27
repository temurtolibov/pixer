let elHeader = document.createElement("header");
let elHeaderContainer = document.createElement("div");
let elHeaderLogo = document.createElement("img");
let elHeaderInfoWrapper = document.createElement("div");
let elNavbar = document.createElement("nav");
let elHeaderButton = document.createElement("button");
let navbar = [
  "Bosh sahifa",
  "Xizmatlar",
  "Portfolio",
  "Jamoa",
  "Blog",
  "Kontaktlar",
];

navbar.forEach((item) => {
  let elLink = document.createElement("a");
  elLink.textContent = item;
  elNavbar.appendChild(elLink);
});
elHeaderLogo.src = "./images/pixer-logo.svg";
elHeaderContainer.className =
  "w-[1100px] mx-auto flex justify-between items-center ";
elHeaderButton.textContent = "+998 90 921 37 11";
elHeaderButton.className =
  "w-[159px] py-2 bg-[#00BAFC] ml-2 text-center text-white rounded-md hover:bg-[#009ad6] transition";
elHeaderInfoWrapper.className = "flex items-center";
elNavbar.className = "flex gap-8 cursor-pointer";
elHeader.className = "shadow-md py-2";
document.body.appendChild(elHeader);
elHeader.appendChild(elHeaderContainer);
elHeaderContainer.appendChild(elHeaderLogo);
elHeaderContainer.appendChild(elHeaderInfoWrapper);
elHeaderInfoWrapper.appendChild(elNavbar);
elHeaderInfoWrapper.appendChild(elHeaderButton);
let elSection = document.createElement("section");
let elContainer = document.createElement("div");
let elHero = document.createElement("div");
let elHeroWrapper = document.createElement("div");
let elTextWrapper = document.createElement("div");
let elHeroH1 = document.createElement("h1");
let elHeroP = document.createElement("p");
let elButton = document.createElement("button");
let elHeroImg = document.createElement("img");
elHeroH1.textContent = "Biznesingizni keyingi bosqichga olib chiqing";
elHeroP.textContent =
  "Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar";
elButton.textContent = "Xizmatlar bilan tanishish";
elHeroImg.src = "./images/hero-img.png";
elHeroImg.alt = "Hero Image";
elContainer.className = "w-[1100px] mx-auto py-20";
elHero.className = "flex justify-between items-center";
elTextWrapper.className = "max-w-[500px]";
elHeroH1.className = "font-bold text-3xl leading-[39px] mb-4";
elHeroP.className = "text-gray-600 text-base leading-[24px] mb-6";
elButton.className =
  "w-[232px] py-2 bg-[#00BAFC] text-white rounded-md hover:bg-[#009ad6] transition";
elHeroImg.className = "w-[458px] h-[258px]";
document.body.appendChild(elSection);
elSection.appendChild(elContainer);
elContainer.appendChild(elHero);
elHero.appendChild(elTextWrapper);
elTextWrapper.appendChild(elHeroH1);
elTextWrapper.appendChild(elHeroP);
elTextWrapper.appendChild(elButton);
elHero.appendChild(elHeroImg);
let elXizmatSection = document.createElement("section");
let elXizmatContainer = document.createElement("div");
let elXizmatH2 = document.createElement("h2");
let elXizmatP = document.createElement("p");
let elXizmatBoxWrapper = document.createElement("div");
let elXizmatLinkWrapper = document.createElement("div");
let elXizmatButton = document.createElement("button");
let elXizmatAhref = document.createElement("a");
elXizmatButton.textContent = "Buyurtma berish";
elXizmatAhref.textContent = "Xizmatlar sahifasiga o’tish";
elXizmatH2.textContent = "Xizmatlar";
elXizmatP.textContent =
  "Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar";
elXizmatLinkWrapper.className = "pt-10";
elXizmatAhref.className = "pl-4 text-[#00BAFC] cursor-pointer ";
elXizmatAhref.href = "#";
elXizmatButton.className =
  "w-[167px] py-2 text-center bg-[#00BAFC] text-white rounded-md hover:bg-[#009ad6] transition";
elXizmatContainer.className =
  "w-[1100px] mx-auto text-center py-16 flex flex-col items-center";
elXizmatH2.className = "text-xl font-bold mb-4";
elXizmatP.className = "max-w-[710px] text-gray-600 mb-8";
elXizmatBoxWrapper.className = "flex justify-between flex-wrap gap-20";
document.body.appendChild(elXizmatSection);
elXizmatSection.appendChild(elXizmatContainer);
elXizmatContainer.appendChild(elXizmatH2);
elXizmatContainer.appendChild(elXizmatP);
elXizmatContainer.appendChild(elXizmatBoxWrapper);
elXizmatContainer.appendChild(elXizmatLinkWrapper);
elXizmatLinkWrapper.appendChild(elXizmatButton);
elXizmatLinkWrapper.appendChild(elXizmatAhref);

let services = [
  {
    img: "./images/vebsayt-tuzish.png",
    title: "Vebsayt tuzish",
    desc: "lorem ipsum",
  },
  {
    img: "./images/tg-bot.png",
    title: "Telegram bot",
    desc: "lorem ipsum",
  },
  { img: "./images/smm.png", title: "SMM", desc: "lorem ipsum" },
  {
    img: "./images/grafik.png",
    title: "Mobil ilovalar",
    desc: "lorem ipsum",
  },
  {
    img: "./images/crm.png",
    title: "CRM tizimlar",
    desc: "lorem ipsum",
  },
];

services.forEach((service) => {
  let elXizmatBox = document.createElement("div");
  let elXizmatBoxImg = document.createElement("img");
  let elXizmatBoxH4 = document.createElement("h4");
  let elXizmatBoxP = document.createElement("p");
  elXizmatBoxImg.src = service.img;
  elXizmatBoxImg.alt = service.title;
  elXizmatBoxH4.textContent = service.title;
  elXizmatBoxP.textContent = service.desc;
  elXizmatBox.className =
    "bg-white shadow-md rounded-lg py-6 px-[60px] text-center hover:shadow-xl transition-shadow";
  elXizmatBoxImg.className = "mx-auto w-[150px] h-[100px] mb-4";
  elXizmatBoxH4.className = "text-lg font-bold mb-2";
  elXizmatBoxP.className = "text-gray-600 text-sm";
  elXizmatBox.appendChild(elXizmatBoxImg);
  elXizmatBox.appendChild(elXizmatBoxH4);
  elXizmatBox.appendChild(elXizmatBoxP);
  elXizmatBoxWrapper.appendChild(elXizmatBox);
});
