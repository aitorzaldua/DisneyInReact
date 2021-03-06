import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const disneyData = {
        'user': {},
        'playing': {},
        "Top": [
          {
            "id": 1,
            "slug": "Disney",
            "title": "Frozen",
            "type": "Animated Adventure",
            "language": "English",
            "year": 2017,
            "contentRating": "EveryBody",
            "duration": 164,
            "cover": "src/assets/static/frozen.png",
            "description": " Three years after her coronation,[b] Elsa celebrates autumn in the kingdom with Anna, Olaf the snowman, Kristoff the ice harvester, and Kristoff's reindeer Sven. One night, when Elsa hears a mysterious voice calling out to her, she follows it and unintentionally awakens the elemental spirits, which forces everyone in the kingdom to evacuate. ",
            "source": " https://www.youtube.com/watch?v=Zi4LMpSDccc&t=2s"
          },
          {
            "id": 2,
            "slug": "Pixar",
            "title": "Monster Inc",
            "type": "Animated Comedy",
            "language": "English",
            "year": 2001,
            "contentRating": "16+",
            "duration": 137,
            "cover": "src/assets/static/monster4.png",
            "description": "In a world inhabited by monsters, the city of Monstropolis is powered by energy from the screams of human children. At the Monsters, Inc. factory, skilled monsters employed as scarers venture into the human world to scare children and harvest their screams, through doors that activate portals to children's bedroom closets.",
            "source": "https://www.youtube.com/watch?v=CGbgaHoapFM&t=27s"
          },
          {
              "id": 3,
              "slug": "Marvel",
              "title": "Avengers: End Game",
              "type": "Superheroes Opera",
              "language": "English",
              "year": 2019,
              "contentRating": "16+",
              "duration": 181,
              "cover": "src/assets/static/avengers.png",
              "description": "n 2018, twenty-three days after Thanos killed half of all life in the universe,[N 1] Carol Danvers rescues Tony Stark and Nebula from deep space and they reunite with the remaining Avengers???Bruce Banner, Steve Rogers, Thor, Natasha Romanoff, and James Rhodes???and Rocket on Earth. Locating Thanos on an uninhabited planet, they plan to use the Infinity Stones to reverse his actions, but discover Thanos has already destroyed them to prevent further use. Enraged, Thor decapitates Thanos.",
              "source": "https://www.youtube.com/watch?v=CGbgaHoapFM&t=27s"
          }
        ],
        "Channels": [
          {
            "id": 1,
            "slug": "Disney",
            "title": "Frozen",
            "type": "Animated Adventure",
            "language": "English",
            "year": 2017,
            "contentRating": "EveryBody",
            "duration": 164,
            "cover": "src/assets/static/SymbolDisney.jpg",
            "description": " Three years after her coronation,[b] Elsa celebrates autumn in the kingdom with Anna, Olaf the snowman, Kristoff the ice harvester, and Kristoff's reindeer Sven. One night, when Elsa hears a mysterious voice calling out to her, she follows it and unintentionally awakens the elemental spirits, which forces everyone in the kingdom to evacuate. ",
            "source": " https://www.youtube.com/watch?v=Zi4LMpSDccc&t=2s"
          },
          {
            "id": 2,
            "slug": "Pixar",
            "title": "Monster Inc",
            "type": "Animated Comedy",
            "language": "English",
            "year": 2001,
            "contentRating": "16+",
            "duration": 137,
            "cover": "src/assets/static/SymbolPixar.png",
            "description": "In a world inhabited by monsters, the city of Monstropolis is powered by energy from the screams of human children. At the Monsters, Inc. factory, skilled monsters employed as scarers venture into the human world to scare children and harvest their screams, through doors that activate portals to children's bedroom closets.",
            "source": "https://www.youtube.com/watch?v=CGbgaHoapFM&t=27s"
          },
          {
              "id": 3,
              "slug": "Marvel",
              "title": "Avengers: End Game",
              "type": "Superheroes Opera",
              "language": "English",
              "year": 2019,
              "contentRating": "16+",
              "duration": 181,
              "cover": "src/assets/static/SymbolMarvel.jfif",
              "description": "n 2018, twenty-three days after Thanos killed half of all life in the universe,[N 1] Carol Danvers rescues Tony Stark and Nebula from deep space and they reunite with the remaining Avengers???Bruce Banner, Steve Rogers, Thor, Natasha Romanoff, and James Rhodes???and Rocket on Earth. Locating Thanos on an uninhabited planet, they plan to use the Infinity Stones to reverse his actions, but discover Thanos has already destroyed them to prevent further use. Enraged, Thor decapitates Thanos.",
              "source": "https://www.youtube.com/watch?v=CGbgaHoapFM&t=27s"
          },
          {
            "id": 4,
            "slug": "Star Wars",
            "title": "The Mandalorian",
            "type": "Space Serie",
            "language": "English",
            "year": 2019,
            "contentRating": "16+",
            "duration": "32-54",
            "cover": "src/assets/static/SymbolNG.jfif",
            "description": "The Mandalorian follows Din Djarin, a lone Mandalorian bounty hunter in the outer reaches of the galaxy.[2] He is hired by remnant Imperial forces to retrieve the child Grogu, but instead goes on the run to protect the infant.[3][4] While looking to reunite Grogu with his kind, they are pursued by Moff Gideon, who wants to use Grogu's connection to the Force.[5][4]",
            "source": "https://www.youtube.com/watch?v=CGbgaHoapFM&t=27s"
        }
  
        ],
        "Movies": [
          {
            "id": 1,
            "slug": "Disney",
            "title": "Frozen",
            "type": "Animated Adventure",
            "language": "English",
            "year": 2017,
            "contentRating": "EveryBody", 
            "duration": 164,
            "cover": "src/assets/static/frozen.png",
            "description": " Three years after her coronation,[b] Elsa celebrates autumn in the kingdom with Anna, Olaf the snowman, Kristoff the ice harvester, and Kristoff's reindeer Sven. One night, when Elsa hears a mysterious voice calling out to her, she follows it and unintentionally awakens the elemental spirits, which forces everyone in the kingdom to evacuate. ",
            "source": " https://www.youtube.com/watch?v=Zi4LMpSDccc&t=2s"
          },
          {
            "id": 2,
            "slug": "Pixar",
            "title": "Monster Inc",
            "type": "Animated Comedy",
            "language": "English",
            "year": 2001,
            "contentRating": "16+",
            "duration": 137,
            "cover": "src/assets/static/monster4.png",
            "description": "In a world inhabited by monsters, the city of Monstropolis is powered by energy from the screams of human children. At the Monsters, Inc. factory, skilled monsters employed as scarers venture into the human world to scare children and harvest their screams, through doors that activate portals to children's bedroom closets.",
            "source": "https://www.youtube.com/watch?v=CGbgaHoapFM&t=27s"
          },
          {
              "id": 3,
              "slug": "Marvel",
              "title": "Avengers: End Game",
              "type": "Superheroes Opera",
              "language": "English",
              "year": 2019,
              "contentRating": "16+",
              "duration": 181,
              "cover": "src/assets/static/avengers.png",
              "description": "n 2018, twenty-three days after Thanos killed half of all life in the universe,[N 1] Carol Danvers rescues Tony Stark and Nebula from deep space and they reunite with the remaining Avengers???Bruce Banner, Steve Rogers, Thor, Natasha Romanoff, and James Rhodes???and Rocket on Earth. Locating Thanos on an uninhabited planet, they plan to use the Infinity Stones to reverse his actions, but discover Thanos has already destroyed them to prevent further use. Enraged, Thor decapitates Thanos.",
              "source": "https://www.youtube.com/watch?v=CGbgaHoapFM&t=27s"
          },
          {
              "id": 4,
              "slug": "Star Wars",
              "title": "The Mandalorian",
              "type": "Space Serie",
              "language": "English",
              "year": 2019,
              "contentRating": "16+",
              "duration": "32-54",
              "cover": "src/assets/static/mandalorian.png",
              "description": "The Mandalorian follows Din Djarin, a lone Mandalorian bounty hunter in the outer reaches of the galaxy.[2] He is hired by remnant Imperial forces to retrieve the child Grogu, but instead goes on the run to protect the infant.[3][4] While looking to reunite Grogu with his kind, they are pursued by Moff Gideon, who wants to use Grogu's connection to the Force.[5][4]",
              "source": "https://www.youtube.com/watch?v=CGbgaHoapFM&t=27s"
          }
  
        ],
  
  
        "Series": [
          {
            "id": 1,
            "slug": "Disney",
            "title": "Frozen",
            "type": "Animated Adventure",
            "language": "English",
            "year": 2017,
            "contentRating": "EveryBody", 
            "duration": 164,
            "cover": "src/assets/static/frozen.png",
            "description": " Three years after her coronation,[b] Elsa celebrates autumn in the kingdom with Anna, Olaf the snowman, Kristoff the ice harvester, and Kristoff's reindeer Sven. One night, when Elsa hears a mysterious voice calling out to her, she follows it and unintentionally awakens the elemental spirits, which forces everyone in the kingdom to evacuate. ",
            "source": " https://www.youtube.com/watch?v=Zi4LMpSDccc&t=2s"
          },
          {
            "id": 2,
            "slug": "Pixar",
            "title": "Monster Inc",
            "type": "Animated Comedy",
            "language": "English",
            "year": 2001,
            "contentRating": "16+",
            "duration": 137,
            "cover": "src/assets/static/monster4.png",
            "description": "In a world inhabited by monsters, the city of Monstropolis is powered by energy from the screams of human children. At the Monsters, Inc. factory, skilled monsters employed as scarers venture into the human world to scare children and harvest their screams, through doors that activate portals to children's bedroom closets.",
            "source": "https://www.youtube.com/watch?v=CGbgaHoapFM&t=27s"
          },
          {
              "id": 3,
              "slug": "Marvel",
              "title": "Avengers: End Game",
              "type": "Superheroes Opera",
              "language": "English",
              "year": 2019,
              "contentRating": "16+",
              "duration": 181,
              "cover": "src/assets/static/avengers.png",
              "description": "n 2018, twenty-three days after Thanos killed half of all life in the universe,[N 1] Carol Danvers rescues Tony Stark and Nebula from deep space and they reunite with the remaining Avengers???Bruce Banner, Steve Rogers, Thor, Natasha Romanoff, and James Rhodes???and Rocket on Earth. Locating Thanos on an uninhabited planet, they plan to use the Infinity Stones to reverse his actions, but discover Thanos has already destroyed them to prevent further use. Enraged, Thor decapitates Thanos.",
              "source": "https://www.youtube.com/watch?v=CGbgaHoapFM&t=27s"
          },
          {
              "id": 4,
              "slug": "Star Wars",
              "title": "The Mandalorian",
              "type": "Space Serie",
              "language": "English",
              "year": 2019,
              "contentRating": "16+",
              "duration": "32-54",
              "cover": "src/assets/static/mandalorian.png",
              "description": "The Mandalorian follows Din Djarin, a lone Mandalorian bounty hunter in the outer reaches of the galaxy.[2] He is hired by remnant Imperial forces to retrieve the child Grogu, but instead goes on the run to protect the infant.[3][4] While looking to reunite Grogu with his kind, they are pursued by Moff Gideon, who wants to use Grogu's connection to the Force.[5][4]",
              "source": "https://www.youtube.com/watch?v=CGbgaHoapFM&t=27s"
          }
      ]

};

const store = createStore(reducer, disneyData); 

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('app'),
  );

