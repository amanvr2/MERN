import React from "react";
import { useState } from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const UserPlaces = () => {
  const { userId } = useParams();
  let [userPlaces, setUserPlaces] = useState([
    {
      id: "p1",
      title: "Empire State Building",
      description: "A tall skyscraper in New York City.",
      imageUrl: "https://example.com/empire-state-building.jpg",
      address: "20 W 34th St, New York, NY 10001",
      location: {
        lat: 40.748817,
        lng: -73.985428,
      },
      creator: "u1",
    },
    {
      id: "p2",
      title: "Eiffel Tower",
      description: "An iconic landmark in Paris, France.",
      imageUrl: "https://example.com/eiffel-tower.jpg",
      address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
      location: {
        lat: 48.858844,
        lng: 2.294351,
      },
      creator: "u2",
    },
    {
      id: "p3",
      title: "Colosseum",
      description: "An ancient amphitheater located in Rome, Italy.",
      imageUrl: "https://example.com/colosseum.jpg",
      address: "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
      location: {
        lat: 41.890251,
        lng: 12.492373,
      },
      creator: "u3",
    },
  ]);
  userPlaces = userPlaces.filter((place) => place.creator === userId);
  return <PlaceList items={userPlaces} />;
};

export default UserPlaces;
