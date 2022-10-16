const products = {
    33: {
      name: "Pochete",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
      images: [
        "https://i.pinimg.com/originals/c6/b5/00/c6b50012141eac6a909b099e39d3ade5.jpg",
      ],
      price: 59.90,
      percent: '',
      categories: [1, 2],
    },
    1: {
      name: "Caneca",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
      images: [
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSBqQy85dK_3G6KP3ytfvGQIWJ3r5MkrYOXseMbLyTc-xcItfWjpdyQaKlHtMaLDj_Bu2ONdgzcwmiiAQv5p_fIvIrdzcOKENc6pcogENXc&usqp=CAE",
      ],
      price: 39.90,
      promo_price: 35.90,
      percent: '10%',
      categories: [3],
    },
    4: {
      name: "Papel",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
      images: [
        "https://i.ebayimg.com/images/g/oFcAAOSwnvpdbZbO/s-l500.jpg",
      ],
      price: 50.00,
      percent: '',
      categories: [4],
    },
    2: {
      name: "Dundie Award",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
      images: [
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSpPB57K1oAUog7UDVNKyYn5XyaBMG5bfFn0cd7uxgTr0fU1PjePrhYMuvooopkNjhUA32VjZrUN7KvYj6F5A_3qS5J4RspLvW1-n2jJn_rcITeh5f4uIkGnw",
      ],
      price: 299.99,
      promo_price: 199.99,
      percent: '15%',
      categories: [5],
    },
  };
  
  const categories = {
    1: { name: "Roupas" },
    2: { name: "Acessórios" },
    3: { name: "Canecas" },
    4: { name: "Papéis" },
    5: { name: "Troféus" }
  };
  
  module.exports = {
    products,
    categories,
  };