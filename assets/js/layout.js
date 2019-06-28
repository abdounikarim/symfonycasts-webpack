'use strict';

import $ from 'jquery';
import 'bootstrap-sass';
import '../css/main.scss';

// make sure the polyfill library is loaded in this main entry
import 'babel-polyfill';

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
