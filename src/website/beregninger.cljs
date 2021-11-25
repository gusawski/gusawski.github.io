(ns website.beregninger
  (:require [reagent.core :as reagent :refer [atom]]))

(defonce hundreds (atom 0))
(defonce ones (atom 0))
(defonce thousands (atom 0))

(defn min-funktion []
  (swap! ones inc)
  (when (> @ones 99)
    (swap! hundreds inc)
    (reset! ones 0))
  (when (> @hundreds 9)
    (swap! thousands inc)
    (reset! hundreds 0)))

(def old-high (atom 0))

(defn current-score
  ([]
   (current-score nil))
  ([_]
   (+ @ones (* @hundreds 100) (* @thousands 1000))))

(defn high-funktion []
  (if (> (current-score) @old-high)
    (swap! old-high current-score)
    @old-high))

(do
  (high-funktion)
  (println "highscore" @old-high))


