import { createStore } from 'vuex'

export default createStore({
   state: {
      navigator: [
         {
            id: 1,
            name: "home",
            src: "home.svg",
            href: "/Profil/Home",
         },
         {
            id: 2,
            name: "history",
            src: "history.svg",
            href: "/Profil/History",
         },
         {
            id: 3,
            name: "basket",
            src: "basket.svg",
            href: "/Profil/Basket",
         },
         {
            id: 4,
            name: "account",
            src: "account.svg",
            href: "/Profil/Account",
         },
      ],
      category: [
         {
            id: 1,
            name: "Ғилдираклар",
            imgSrc: "categ1.jpg",
         },
         {
            id: 2,
            name: "Акустика",
            imgSrc: "categ2.jpg",
         },
         {
            id: 3,
            name: "Гаджетлар",
            imgSrc: "categ3.jpg",
         },
         {
            id: 4,
            name: "Қурилмалар",
            imgSrc: "categ4.jpg",
         },
         {
            id: 5,
            name: "Электроника",
            imgSrc: "categ5.jpg",
         },
      ],
      products: [
         { id: 0, imgSrc: "product1.jpg", name: "Advan RT whel R18", category: "Ғилдираклар бўлими", price: "47 450 000 cўм", info: "Диски Yokohama ADVAN Racing RT разработаны специально для компактных спортивных автомобилей Mini, Audi и VW. ", },
         { id: 1, imgSrc: "product2.jpg", name: "Pioneer FH-X380UB", category: "Акустикалар бўлими", price: "1 250 000 cўм", info: "Откройте для себя Pioneer FH-X380UB автомобиль Автомобильные ресиверы. ...", },
         { id: 2, imgSrc: "product3.jpg", name: "Pride Junior PRO 12", category: "Акустика бўлими", price: "1 400 000 cўм", info: "Классический дизайн и качественные комплектующие от лучших мировых производителей, позволили создать легендарный Pride Junior Pro.", },
         { id: 3, imgSrc: "product4.jpg", name: "Rays gram 57 (R19)", category: "Ғилдираклар бўлими", price: "32 690 000 cўм", info: "Но выбор пал снова на RAYS GRAM LIGHTS 57Xtreme STD Spec в цвете — Matt Graphite Диаметр R19 ширина 9,5 вылет 35", },
         { id: 4, imgSrc: "product5.jpg", name: "Rays gram extreme (R19)", category: "Ғилдираклар бўлими", price: "35 450 000 cўм", info: "Суперские, в лимитированном цвете candy red Rays Gram Light 57Xtreme R19 5/100 8,5J ET43 9,5J ET44", },
         { id: 5, imgSrc: "product6.jpg", name: "Makston Classic (R22)", category: "Ғилдираклар бўлими", price: "51 690 000 cўм", info: "Диски авомобильные Makstton. Makstton Wheels — сильный игрок на рынке Китая, Европы и стран СНГ. ", },
      ],
      account: [
         { id: 0, value: "Cагатов Жахонгир", },
         { id: 1, value: "998 (33) 510-95-95", },
         { id: 2, value: "Фарғона вилояти", },
         { id: 3, value: "Олтиариқ тумани, Турон 39", },
      ]
   },
   getters: {
      /* plusFunc() {
         ++this.count
      },
      minusFunc() {
         if (this.count > 0) {
            --this.count
         }
      }*/
   },
   mutations: {
   },
   actions: {
   },
   modules: {
   }
})
