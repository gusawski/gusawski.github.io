(ns website.komponenter
  (:require [reagent.core :as r]
            [website.beregninger :as beregninger]))

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text " Click-counter!"}))

(defn knap []
  [:input {:type "bottom " :value ""
           :style {:height 150
                   :width 500
                   :background-color :black
                   :color :white
                   :font-size 30}
           :on-click beregninger/min-funktion}])

(defn copyright []
  [:div [:p {:style {:font-size 13}} "Copyright © gusawski 2021"]])

(defn indhold []
  [:div {:style {:font-size 20}}
   [:p "Your highscore is: " (beregninger/high-funktion)]
   [:p "Current Score is: " (beregninger/current-score)]
   [:p {:style {:font-size 30}}
    " Ones: " @beregninger/ones "   Hundreds: " @beregninger/hundreds "   Thousands: " @beregninger/thousands]
   [knap]
   [copyright]]) 

(defn start-komponent []
  [:div
   [:h1 (:text @app-state)]
   [indhold]])

(defn tastelyt [e]
  (when (= 32 (.-keyCode e)) 
    (beregninger/min-funktion)))

(defn add-listeners []
  (js/document.body.addEventListener "keyup" tastelyt))

(defonce initialize
  (do (add-listeners)
      true))   