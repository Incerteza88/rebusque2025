export const initialStore = () => {
  return {
    authState: localStorage.getItem("authState") == null ? 0 : parseInt(localStorage.getItem("authState")), // 0 = no logueado, 1 = user, 2 = worker
    searching: "",
    // "workers" y "categories" son simplemente para hacer pruebas con las card y los filtros, cuando el back esté completo, se deben eliminar
    categories: [],
    workers: [
      {
        id: 1,
        name: "Carlos",
        surname: "Lorenzo Moreno",
        email: "carlos@email.com",
        phone: "+34678912345",
        works: [3, 2, 1],
        image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
        rating: 4.3,
        distance: 2,
      },
      {
        id: 2,
        name: "Judith",
        surname: "Ramírez Pachón",
        email: "judith@email.com",
        phone: "+34654321987",
        works: [5, 4, 6],
        image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
        rating: 4.9,
        distance: 4,
      },
      {
        id: 3,
        name: "Luis",
        surname: "Guilarte",
        email: "luis@email.com",
        phone: "+34639528417",
        works: [7, 6, 1],
        image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
        rating: 4.6,
        distance: 6,
      },
      {
        id: 4,
        name: "Eduardo",
        surname: "Incerteza",
        email: "edu@email.com",
        phone: "+3639852147",
        works: [8, 2],
        image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
        rating: 4.8,
        distance: 3,
      },
      {
        id: 5,
        name: "Daniela",
        surname: "Eula",
        email: "danieula@email.com",
        phone: "+34624895173",
        works: [9, 6],
        image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
        rating: 4.2,
        distance: 7,
      },
      {
        id: 6,
        name: "Maria Fernanda",
        surname: "Duarte",
        email: "mafeduarte@email.com",
        phone: "+34684235719",
        works: [1, 0],
        image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
        rating: 4.4,
        distance: 15,
      },
      {
        id: 7,
        name: "Rosinni",
        surname: "Rodríguez Milano",
        email: "rosinni@email.com",
        phone: "+34645978312",
        works: [8, 4, 3],
        image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
        rating: 4.7,
        distance: 12,
      },
      {
        id: 8,
        name: "Pepito",
        surname: "Palotes",
        email: "pepito@email.com",
        phone: "+34632145789",
        works: [5, 10],
        image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
        rating: 3.0,
        distance: 1,
      },
    ],
    services: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case "setCategories":
      return {
        ...store,
        categories: action.payload,
      };

    case "setServices":
      return {
        ...store,
        services: action.payload,
      };

    case "LOGIN_USER":
      localStorage.setItem("authState", 1)
      return {
        ...store,
        authState: 1,
      };

    case "LOGIN_WORKER":
      localStorage.setItem("authState", 2)
      return {
        ...store,
        authState: 2,
      };

    case "LOGOUT":
      localStorage.removeItem("authState")
      localStorage.removeItem("token")
      return {
        ...store,
        authState: 0,
      };

    case "searchThis":
      return {
        ...store,
        searching: action.payload,
      };


    default:
      throw Error('Unknown action.');
  }
}