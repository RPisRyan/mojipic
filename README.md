# MojiPic

[mojipic.app](https://mojipic.app/)

An app for making emoji pics.

> ☁️☁️☁️🌈🌈  
> ☁️🌦️🌈👺☘️  
> 🌧️🌈🌳☘️☘️  
> 🌈🍀☘️🌳🦌  
> 💰🧝🏼🌳🌳🌳  


<img src="mojipic-v1-screen.jpg" height="500" title="App screen">

## Setup

```
cd web
yarn
```

## Run

```
# ./web
yarn start
```

## Test

```
# ./web
yarn test
```

## Design notes

The logic for the drawing canvas is in [drawing.ts](web/src/lib/emoji-drawing/drawing.ts).
The class is treated as immutable. Operations on the drawing return a new object, 
so they can be used for React state updates.

Some experimentation with reactive state stores is done in [lib/reactives](web/src/lib/reactives).
