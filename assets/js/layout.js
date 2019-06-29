'use strict';

import $ from 'jquery';
import 'bootstrap-sass';
import '../css/main.scss';

// make sure the polyfill library is loaded in this main entry
import 'core-js/library/es6/promise';

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
