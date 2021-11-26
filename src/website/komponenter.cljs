(ns website.komponenter
  (:require [reagent.core :as r :refer [atom]]
            [website.beregninger :as beregninger]))

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text " Click-counter!"
                          :view :welcome-view}))

(def view-cursor (r/cursor app-state [:view]))

(defn counter-btn []
  [:input {:type "button" :value "Press"
           :style {:height 150
                   :width 600
                   :background-color :black
                   :color :white
                   :font-size 40}
           :on-click beregninger/min-funktion}])

(defn counter-btn-2 []
  [:input {:type "button" :value "Press"
           :style {:height 150
                   :width 600
                   :background-color :black
                   :color :white
                   :font-size 40}
           :on-click beregninger/min-funktion-2}])

(defn change-view [new-view]
  (reset! view-cursor new-view))

(defn reset-timer-stuff []
  (reset! beregninger/ones-2 beregninger/start-count)
  (swap! beregninger/state assoc :start-time nil))

(defn goto-take-time-btn []
  [:input {:type "button" :value "Take time"
           :style {:height 100
                   :width 300
                   :background-color :black
                   :color :white
                   :font-size 20}
           :on-click #(do
                       (reset-timer-stuff)
                       (change-view :take-time))}])

(defn reset-btn []
  [:input {:type "button" :value "Reset"
           :style {:height 100
                   :width 300
                   :background-color :black
                   :color :white
                   :font-size 20}
           :on-click #(swap! beregninger/state merge
                            {:ones 0 :hundreds 0 :thousands 0})}])

(defn reset-btn-2 []
  [:input {:type "button"
           :id "rbtn2"
           :value "Reset"
           :style {:height 100
                   :width 300
                   :background-color :black
                   :color :white
                   :font-size 20}
           :on-click reset-timer-stuff}])

(defn copyright []
  [:div [:p {:style {:font-size 13}} "Copyright © gusawski 2021"]])

(defn welcome-view []
  [:div {:style {:font-size 20}}
   [:p "Your highscore is: " (beregninger/high-funktion)]
   [:p "Current Score is: " (beregninger/current-score)]
   [:p {:style {:font-size 40}}
    (let [{:keys [ones hundreds thousands]} @beregninger/state]
      (str " Ones: " ones "   Hundreds: " hundreds "   Thousands: " thousands))]
   [counter-btn]
   [:div [goto-take-time-btn] [reset-btn]]]) 

(defn take-time-view []
  [:div {:style {:font-size 20}}
   [:p "Your best time is: noget"]
   [:p "Your time: " (if-let [start-time (:start-time @beregninger/state)]
                       (/ (- (beregninger/now) start-time) 1000)
                       "")]
   [:p "Your best time: " (let [{:keys [best-time]} @beregninger/state]
                            (if best-time
                              (/ best-time 1000)
                              ""))]
   [:p {:style {:font-size 40}} @beregninger/ones-2]
   [counter-btn-2]
   [:div
    [:input {:type :button
             :value "Back"
             :style {:height 100
                     :width 300
                     :background-color :black
                     :color :white
                     :font-size 20}
             :on-click #(change-view :welcome-view)}]
    [reset-btn-2]]]) 

(defn start-komponent []
  [:div
   [:h1 (:text @app-state)]
   (case @view-cursor
     :take-time [take-time-view]
     [welcome-view])
   [copyright]])

(defn key-listener [e]
  (when (= 32 (.-keyCode e))
    (case @view-cursor
      :take-time (beregninger/min-funktion-2)
      (beregninger/min-funktion))))

(defn add-listeners []
  (js/document.body.addEventListener "keyup" key-listener))

(defonce initialize
  (do (add-listeners)
      true))   

