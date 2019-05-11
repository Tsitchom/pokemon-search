# Search UI [![Build Status](https://travis-ci.org/coveo/search-ui.svg?branch=master)](https://travis-ci.org/coveo/search-ui) [![Coverage Status](https://coveralls.io/repos/github/coveo/search-ui/badge.svg?branch=master)](https://coveralls.io/github/coveo/search-ui?branch=master) [![CodeFactor](https://www.codefactor.io/repository/github/coveo/search-ui/badge)](https://www.codefactor.io/repository/github/coveo/search-ui) [![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)

# Coveo Pokemon Search UI

This Github contains a demo variant of the Coveo Search UI product that scrapes through https://pokemondb.net/ to render a searchable UI that enables the user to search for Pokemon with different search tools.

The app is deployed on Heroku. Access it by clicking the following path : https://pokemondb-search-ui.herokuapp.com/#t=All&sort=relevancy

The deliverables that Coveo asked for that were completed will be in **bold** :

# Essential
● **Index (A.K.A Crawl) pokemondb.net using your Cloud Platform Organization
either with a Web or Push source
○ Use https://pokemondb.net/pokedex/national as your starting point.
○ Include only the actual Pokemon pages while crawling and exclude
everything else (Moves, Types, etc.)
● Install the JS Search Framework locally.
● Connect your local search page to the cloud endpoint to get results when
searching.
● Host your search page on a web server of your choosing. (There are
numerous ways of doing this for 0$!)
Basic - (Metadata : Pokemon Type, Generation, Picture)
● Create a facet to filter search results by Pokemon Type.
○ Add an option to switch between the “AND” or “OR” operators on the
facet**

● **Create a facet to filter search results by Pokemon Generation.
● Display the Pokemon’s picture directly in their search result.
● Add a ranking expression to boost Ghost Pokemon with a modifier of 100,
but only if they are a first generation Pokemon.**

# Intermediary - (Metadata : Pokemon Name, Number, Weight, Description)
● **Create a facet slider to filter results by Pokemon Number.**
● Create a facet slider to filter results by Pokemon Weight.
● **Add Pokemon name suggestions to the search box.
● Change the result excerpt to a small description of each Pokemon.**

# Bonus (Advanced)
● **Extract other special forms (Mega, Alola, etc.) from Pokemon which have
them and display them in your result template under the regular Pokemon.
(See examples of special forms below)
○ https://pokemondb.net/pokedex/charizard
○ https://pokemondb.net/pokedex/rotom**

● Got web design skills? Customize your Search Page UI to give it a unique
look and show off your style.
● Anything else past this point is a testament to your creativity. Feel
free to extract other Pokemon attributes and use them to improve your
search page.
