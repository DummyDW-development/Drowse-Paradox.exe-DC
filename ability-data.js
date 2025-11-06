const characterAbilities = {
   "Veronica": {
       passives: [
           {
               name: "Robotic Resilience",
               description: "Veronica takes 15% less damage from all sources and recovers from stuns 25% faster."
           },
           {
               name: "Energy Core",
               description: "Regenerates 1% of max health every 3 seconds when out of combat."
           }
       ],
       abilities: [
           {
               name: "Rapid Retreat",
               icon: "https://example.com/veronica-ability1.png",
               description: "Quickly dash forward, becoming invulnerable for 0.5 seconds. 15 second cooldown."
           },
           {
               name: "System Overdrive",
               icon: "https://example.com/veronica-ability2.png",
               description: "Increase movement speed by 30% and damage by 20% for 6 seconds. 45 second cooldown."
           }
       ]
   },
   "Guest 666": {
       passives: [
           {
               name: "Blood Frenzy",
               description: "Deal 10% more damage for each injured survivor within 20 meters."
           },
           {
               name: "Unholy Presence",
               description: "Survivors within your terror radius have their action speeds reduced by 15%."
           }
       ],
       abilities: [
           {
               name: "Demonic Charge",
               icon: "https://example.com/guest666-ability1.png",
               description: "Lunge forward, dealing damage to the first survivor hit. 12 second cooldown."
           },
           {
               name: "Soul Harvest",
               icon: "https://example.com/guest666-ability2.png",
               description: "Consume the souls of downed survivors to permanently increase your movement speed by 5%. 60 second cooldown."
           }
       ]
   },
   "Noob": {
       passives: [
           {
               name: "None",
               description: "Sorry, no passives."
           }
       ],
       abilities: [
           {
               name: "Ghost Burger",
               icon: "https://example.com/noob-ability1.png",
               description: "Become invisible to killer detection for 8 seconds. 90 second cooldown."
           },
           {
               name: "Cola Rush",
               icon: "https://example.com/noob-ability2.png",
               description: "Increase movement speed by 25% for 4 seconds. 30 second cooldown."
           }
       ]
   },
   "Shedletsky": {
       passives: [
           {
               name: "None",
               description: "Sorry, no passives."
           }
       ],
       abilities: [
           {
               name: "Slash",
               icon: "icons/Shedletsky_slash.webp",
               description: "Shedletsky slashes forward, dealing 30 damage and stunning the Killer for 3 seconds if it hits. Upon activation, Shedletsky is given Resistance II for 0.75 seconds, alongside being slowed down by 75% for 1.575 seconds."
           }
       ]
   },
   "Drowsey": {
       passives: [
           {
               name: "Tune It Out",
               description: "Drowsey always has his headphones on, giving him the natural affect of tuning other things out. Drowsey is resistant to many affects. (Bleeding I, Glitched I, Poisoned I, ect...)"
           },
           {
               name: "Hyperfixated",
               description: "Drowsey will naturally use items faster, medkit from 10s -> 8s. cola from 5s -> 2s"
           }
       ],
       abilities: [
           {
               name: "Upbeat Tune 45s",
               icon: "",
               description: "Upon activation Drowsey will turn his headphones up to focus for 8s. During this his stamina gain is 22 per second, while stamina loss stays the same."
           },
           {
               name: "Good Vibes 60s",
               icon: "",
               description: "Drowsey will place down a boombox that gives off the 'Tuned In affect' until broken(2-hits) or overheated after 15s; this affect will make any survivor, within the 10 stud radius, stamina gain a bit higher. 'Tuned In' can vary depending on music volume. Volume goes up to 5. (1-2 = 'Tuned In' I, 3-4 = 'Tuned In' II, 5 = 'Tuned In' III) Each stack of the affect adds 1 more stamina gain. (Ex: Tuned In II = (Base Gain) 20 + 2)"
           },
           {
               name: "Tune Change",
               icon: "",
               description: " Drowsey will change the music in his headphones, refreshing his mood and giving him a time period of 1s (If hit) he will both get +1 music volume and dodge, taking away 20 stamina for the dodge. if this is used without being hit Drowsey will just get Tuned In 1 for 3s."
           }
       ]
   }
   // Add abilities for other characters as needed
};

