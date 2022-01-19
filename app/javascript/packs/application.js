// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import "@fortawesome/fontawesome-free/js/all";
import '../stylesheets/application';
import 'bootstrap';

// window.$ = $;
global.$ = global.jQuery = jQuery;
window.$ = window.jQuery = jQuery;

require('admin-lte');
require("packs/custom/jquery.vmap.min");
require("packs/custom/jquery.vmap.usa");
require("packs/custom/Chart.min");
require("packs/dashboard.js");
require("packs/custom/sparkline.js");
require("packs/custom/daterangepicker.js");
require("packs/custom/moment.min");
require("packs/dashboard2.js");
document.addEventListener("turbolinks:load", () => {
  $('[data-toggle="tooltip"]').tooltip()
});

Rails.start()
Turbolinks.start()
ActiveStorage.start()
