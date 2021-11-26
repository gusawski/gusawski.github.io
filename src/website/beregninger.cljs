(ns website.beregninger
  (:require [reagent.core :as r :refer [atom]]
            [website.gem :as gem]))

(defonce start-count 10)
(defonce state (atom {:best-time nil
                      :hundreds 0
                      :ones 0
                      :thousands 0
                      :start-time nil}))

(def best-time-cursor (r/cursor state [:best-time]))

(defn now []
  (.getTime (js/Date.)))

(defn duration []
  (/ (- (now) (:start-time @state)) 1000))

(defn min-funktion []
  (swap! state update :ones inc)
  (when (> (:ones @state) 99)
    (swap! state update :hundreds inc)
    (swap! state assoc :ones 0))
  (when (> (:hundreds @state) 9)
    (swap! state update :thousands inc)
    (swap! state assoc :hundreds 0)))

(def ones-2 (atom start-count))

(defn best-time-updater [old-value new-value]
  (do
    (prn 'old-value old-value)
    (prn 'new-value new-value)
    (if (or (nil? old-value)
             (< new-value old-value))
      new-value
      old-value)))

(defn min-funktion-2 []
  (when-not (:start-time @state)
    (swap! state assoc :start-time (now)))
  (swap! ones-2 dec)
  (when (zero? @ones-2)
    (reset! ones-2 start-count)
    (swap! best-time-cursor best-time-updater (- (now) (:start-time @state)))
    (swap! state assoc :start-time nil)
    ))

(def old-high (atom (gem/hent-highscore)))

(defn current-score
  ([]
   (current-score nil))
  ([_]
   (let [{:keys [ones hundreds thousands]} @state]
     (+ ones (* hundreds 100) (* thousands 1000)))))

(defn high-funktion []
  (let [cs (current-score)]
    (if (> cs @old-high)
      (do
        (gem/gem-highscore cs)
        (reset! old-high cs))
      @old-high)))

(do
  (high-funktion)
  (println "highscore" @old-high))
