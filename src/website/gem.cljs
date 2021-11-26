(ns website.gem
  (:require [reagent.cookies :as cookies]))

(defn gem-highscore [highscore]
  (cookies/set! :highscore highscore))

(defn hent-highscore []
  (cookies/get :highscore 0))

