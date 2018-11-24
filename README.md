
# Paxos from the ground up

This repo contains an exposition to the Paxos protocol which introduces the protocol starting from a simple but incorrect protocol and making gradual refinements several times till we finally reach the complete protocol. The goal is for the reader to understand the protocol at a deeper level by undertaking this journey instead of trying to understand it with all its subtle details from the get go.

You can see a live version at http://imnaseer.net/paxos-from-the-ground-up.html

## Enhancing the exposition

The exposition is written using [pollen](https://docs.racket-lang.org/pollen/). Please follow these steps if you want to modify it.

1. Install Racket and pollen by following the instructions [here](https://docs.racket-lang.org/pollen/Installation.html#%28part._.How_to_install%29)

2. Navigate to the folder where you cloned this repo and type

  ```
  raco pollen start
  ```

3. Navigate to the pollen dashboard url, typically http://localhost:8080/index.ptree and click on paxos-from-the-ground-up.html.pm

4. Modify paxos-from-the-ground-up.html.pm and refresh the browser window to see your changes reflected in the presentation

## Tour of the files

* The presentation content is contained in paxos-from-the-ground-up.html.pm

* The interactive diagrams are defined in PaxosDiagrams.js

* The diagramming framework is defined in Diagram.js

* The framework to convert the content into a slideshow is defined in Slideshow.js