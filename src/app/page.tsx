export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch('https://api.github.com/users/jovemcleb');

  const user = await response.json();

  return (
    <>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
}
