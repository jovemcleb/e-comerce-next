import React from 'react';

export default async function Search() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>Search</div>;
}
