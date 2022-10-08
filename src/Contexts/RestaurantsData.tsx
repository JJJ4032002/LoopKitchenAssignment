import React, { createContext, useEffect, useState } from "react";
import GetRestaurantsData, {
  NewRestaurantsDataType,
} from "../helpers/GetRestaurantsData";
interface RestaurantsDataContextType {
  Restaurants: NewRestaurantsDataType[] | null;
}
let RestaurantsDataContext = createContext<RestaurantsDataContextType>({
  Restaurants: [{ Name: "Hello" }],
});
function RestaurantsData({ children }: { children: React.ReactNode }) {
  const [RestaurantsData, setRestaurantsData] = useState<
    NewRestaurantsDataType[] | null
  >(null);
  useEffect(() => {
    let ignore = false;
    GetRestaurantsData()
      .then((element) => {
        if (!ignore) {
          setRestaurantsData(element);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      ignore = true;
    };
  }, []);
  let ContextObj = {
    Restaurants: RestaurantsData,
  };
  return (
    <RestaurantsDataContext.Provider value={ContextObj}>
      {children}
    </RestaurantsDataContext.Provider>
  );
}

export { RestaurantsData, RestaurantsDataContext };
