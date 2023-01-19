/*
This is an example snippet - you should consider tailoring it
to your service.
*/

async function fetchGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch(process.env.NEXT_PUBLIC_HASURA_URL, {
    method: "POST",
    headers: {
      "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET_KEY,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });

  return await result.json();
}

const operationsDoc = `
  query MyQueries {
    users {
      id
    }
  }
  
  mutation MyMutation {
    insert_users_one(object: {id: 10}) {
      id
    }
  }
`;

function fetchMyQueries() {
  return fetchGraphQL(operationsDoc, "MyQueries", {});
}

function executeMyMutation() {
  return fetchGraphQL(operationsDoc, "MyMutation", {});
}

export async function startFetchMyQueries() {
  const { errors, data } = await fetchMyQueries();

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}

startFetchMyQueries();

export async function startExecuteMyMutation() {
  const { errors, data } = await executeMyMutation();

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}
