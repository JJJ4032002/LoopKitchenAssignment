interface RestaurantDataType {
  id: string;
  createdTime: string;
  fields: {
    Name: string;
  };
}
interface NewRestaurantsDataType {
  label: string;
}
async function GetRestaurantsData(): Promise<NewRestaurantsDataType[]> {
  let result = await fetch(
    "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/restaurants?view=Grid%20view",
    {
      headers: {
        Authorization: "Bearer keyfXgn8PL6pB3x32",
      },
    }
  );
  let resultFromJson = await result.json();
  let newData = resultFromJson.records.map((element: RestaurantDataType) => {
    return { label: element.fields.Name };
  });
  return newData;
}
export default GetRestaurantsData;
export type { NewRestaurantsDataType };
