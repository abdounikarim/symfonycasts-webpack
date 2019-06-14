'use strict';

const $ = require ('jquery');
require ('bootstrap');

// make sure the polyfill library is loaded in this main entry
require ('babel-polyfill');

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
