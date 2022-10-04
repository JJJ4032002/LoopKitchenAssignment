type UserRecordsType = {
  id: string;
  createdTime: string;
  fields: { username: string; password: string };
};
async function GetUserData(): Promise<UserRecordsType[]> {
  let result = await fetch(
    "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals?maxRecords=3&view=Grid%20view",
    {
      headers: {
        Authorization: "Bearer keyfXgn8PL6pB3x32",
      },
    }
  );
  let resultFromJson = await result.json();
  return resultFromJson.records;
}

export { GetUserData };
export type { UserRecordsType };
