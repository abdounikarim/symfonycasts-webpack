'use strict';

const $ = require ('jquery');
require ('bootstrap');

require('../css/main.css');

// make sure the polyfill library is loaded in this main entry
require ('babel-polyfill');

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
