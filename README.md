# MojiPic

[mojipic.app](https://mojipic.app/)

![CI](https://github.com/RPisRyan/mojipic/actions/workflows/node.js.yml/badge.svg)

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
 
[Recoil](https://recoiljs.org/) is used for state management.
Basic `useState` at the root would have worked fine, as the app is small,
but I'm here to learn! 🤓
