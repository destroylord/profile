
let mix = require('laravel-mix');

const tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

mix.sass('dist/sass/app.scss', 'css/')

    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ]
    })
    .purgeCss()
    .setPublicPath('dist');