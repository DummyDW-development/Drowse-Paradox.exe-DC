const characterAbilities = {
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
           },
          {
               name: "Slateskin Potion",
               icon: "",
               description: "Gain the Slateskin II effect for 8s, getting 80 overheal and slowness. If the effect comes off naturally gain Speed II for 3s, if you end it early you get Speed I instead."
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

