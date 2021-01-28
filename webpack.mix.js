const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'js')
	.react()
	.postCss('resources/css/app.css', 'css', [require('tailwindcss')])
	.disableSuccessNotifications()
	.setPublicPath('public');
