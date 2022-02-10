// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "../src/application.css"
import "./flashMessages.js"
import "./modal.js"
import "./likes.js"


Rails.start()
ActiveStorage.start()

require("trix")
require("@rails/actiontext")
require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")