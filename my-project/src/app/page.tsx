'use client';

import CardList from "./components/CardList";

export default function cardsPage() {
  return (
    <div className="flex flex-wrap gap-6 p-8 justify-center">
      <CardList/>
    </div>
  )
}