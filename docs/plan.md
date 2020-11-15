# MojiPic

A fun app for making emoji pics.

## Given

* People enjoy combining emoji to express ideas
* Simple emoji expressions can gain wide interest (🥺 👉 👈 )
  https://supermaker.com/articles/tiktok-imshy-meme-emojis-new-meaning-coronavirus-social-distancing
  https://www.popbuzz.com/internet/viral/two-fingers-touching-meaning-emoji-meme/
* Current apps only allow creating emoji sequences

## Assumed

* People would enjoy making 2D emoji expressions
* Mixing and sharing 2D expressions would create new ways to use existing apps (text, Twitter, etc)

## Solution

Create a mobile-compatible web app for creating and sharing emoji 'pics'.

## Ideas

* Browser extension to design inline for textareas
* Browser extension to recognize and capture expressions
* Expression search/matching

## Releases

### v1.0 - Released Nov 10

Basic set of drawing features to allow seamless pic creation and sharing.
* Instrumented so we can learn from usage

- [x] Undo, with undo stack limit
- [x] Recent emoji
- [x] Find any emoji
- [x] Analytics wiring
- [x] Greeting message, prompt to tap the canvas
- [x] Help button w/screenshot and feeback link
- [x] Debug logging
- [x] Enforce minimum size when trimming drawing
- [x] Enforce minimum size when loading drawing
- [x] Keep app on single screen

### v1.1

Animations to make interaction more fun.
Keep record of pics users create. 

- [ ] Animation for tile flip
- [ ] Animation for drawing reset (staggered tile flip?)
- [ ] Improve button appearance
- [ ] Animation for button state change
- [ ] Save to server when sharing
- [ ] Swipe through your drawing history
- [ ] Delete history entry
- [ ] Add URL link to share
- [ ] Hover text for buttons
- [ ] Help mode: Show hover text for all buttons 

### v1.2
