import React, { createContext, useEffect, useState } from "react";
import GetRestaurantsData, {
  NewRestaurantsDataType,
} from "../helpers/GetRestaurantsData";
interface RestaurantsDataContextType {
  Restaurants: NewRestaurantsDataType[] | null;
  AddedRestaurants: addedRestaurantsDataType[] | null;
  AddToRestaurants: (obj: addedRestaurantsDataType) => void;
  EditAddedRestaurants: (state: addedRestaurantsDataType[]) => void;
}
interface addedRestaurantsDataType {
  Id: string;
  Name: string;
  Bookmarked: boolean;
}
let RestaurantsDataContext = createContext<RestaurantsDataContextType>({
  Restaurants: [{ label: "Hello" }],
  AddedRestaurants: [{ Id: "124", Name: "Hello", Bookmarked: true }],
  AddToRestaurants: () => {},
  EditAddedRestaurants: () => {},
});
function RestaurantsData({ children }: { children: React.ReactNode }) {
  const [RestaurantsData, setRestaurantsData] = useState<
    NewRestaurantsDataType[] | null
  >(null);
  const [addedRestaurants, setAddedRestaurants] = useState<
    addedRestaurantsDataType[] | null
  >(null);
  function AddToRestaurants(obj: addedRestaurantsDataType) {
    setAddedRestaurants((prev) => {
      if (prev === null) {
        return [obj];
      } else {
        return [...prev, obj];
      }
    });
  }
  function EditAddedRestaurants(array: addedRestaurantsDataType[]) {
    setAddedRestaurants([...array]);
  }
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
    AddedRestaurants: addedRestaurants,
    AddToRestaurants: AddToRestaurants,
    EditAddedRestaurants: EditAddedRestaurants,
  };
  return (
    <RestaurantsDataContext.Provider value={ContextObj}>
      {children}
    </RestaurantsDataContext.Provider>
  );
}

export { RestaurantsData, RestaurantsDataContext };
