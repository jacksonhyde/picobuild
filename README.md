# PicoBuild
PicoBuild is a simple build system for [Pico-8](https://www.lexaloffle.com/pico-8.php) cartridges. It uses [Node.js](https://nodejs.org/en/) and [gulp](https://gulpjs.com/). If your prefered task runner is [grunt](https://gruntjs.com/]), check out [pico8grunt](https://github.com/TeamNoComplyGames/pico8Grunt).

If you fork this repo on GitHub, PicoBuild also provides an easy way to upload your games to [Github pages](https://pages.github.com/). 

## Why do I need a Pico-8 build system?
The simplicity of Pico-8's cartridge system is one of it's shining features, but for more ambitious Pico-8 projects or projects with multiple collaborators, you may experience frustrations working in a single file. 

## Installation  

1. Install [Node.js](https://nodejs.org/en/)
2. Clone this repo to your Pico-8 `carts` directory (for more info see the Filesystem section of the Pico-8 manual).
3. Open a shell and run `npm install`
4. Run `npm start`

**NOTE:**
By default, PicoBuild is configured to look for `example.p8` cartridge in the `build` folder. If you change the name of the `p8` cart you're working with, you'll need to update the `CART_NAME` variable on line 11 of `gulpfile.js`

## Usage

#### `npm start` 
Injects your code into the p8 cart and watches for changes to `.lua` files in `.src`.

#### `npm run publish` 
Upload an exported cart to Github pages (see below)

#### Workflow

- Pico-8 code should be written using an external editor and saved with the '.lua' extension in the `src` directory.
- Pico-8 graphics and audio should be edited as normal from your `.p8` Pico-8 file
- PicoBuild runs in Nodejs command prompt, listening for changes to your code
- When changes are detected, it concatenates your code and inserts it into your `p8 cart`.
- A minified version of your cart is also generated in the `build` folder.

## Publishing to GH Pages

You'll need a Github account and a forked version of this repo to publish to Github pages.

1. From Pico-8, export your cart into a web format by running `EXPORT YOUR_CARTNAME.HTML`. Ensure that `YOUR_CARTNAME` matches `CART_NAME` in your gulpfile.
2. Run `npm run publish` to push your files to Github pages.
3. View your game at http://your-github-user.github.io/your-repository-name

## License

The MIT License (MIT)

Copyright (c) 2017 Jackson Hyde

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
