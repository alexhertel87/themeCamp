'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Camps', [{
        userId: '1',
        campName: 'Syncytium!',
        address: '3:00 & Hallowed',
        description: "Syncytium is a large Michigan based theme camp that actively participates at Burning Man as well as Lakes of Fire, the Great Lakes Regional burn and The Mosaic Experiment in SE Ohio. Syncytium consists of people who 'do'. Artists, Engineers, Scientists, Flow Artists, Seekers, Builders, Makers, Musicians and Circus performers. We come together with our varied talents to push our own limits. We are never exactly the same from year to year. We strive to bring the Burning Man principles, art and culture to the regular world. We engage our community through fundraisers and parties, classes on the Ten Principles, as well as participating in Michigan events intended to acculturate people into the Burning Man community. 'What could possibly go wrong?'",
        latitude: 40.777455,
        longitude: -119.194709
      },
      {
        userId: '2',
        campName: 'Artica',
        address: '3:00 & Hallowed',
        description: "Located at 3 o’clock, 9 o’clock, and Center Camp, Arctica sells ice to the Burning Masses, with all proceeds going to benefit local Gerlach-area charities and community groups. The gift economy keeps on giving!",
        latitude: 40.77773,
        longitude: -119.19480
      },
      {
        userId: '3',
        campName: 'Transfoamation',
        address: '2:00 & Eulogy',
        description: "About 20 at a time, they take their clothes off, get in line, and go into a huge glass box to shower together, foam jets of Dr. Bronner’s magic soap is sprayed all over them, they either wash themselves or each other, then get hosed off. It’s like a carwash for people and sooo much fun. Transfoamation! Afterwards they come out, and there are DJs playing music. They have coconut oil and other body oils to apply and then you can dance for as long as you like. I’ve never seen that many dancing naked people. --Alex Grey (artist)",
        latitude: 40.78325,
        longitude: -119.19277
      },
      {
        userId: '4',
        campName: 'Camp )?(',
        address: '2:30 & Esplanade',
        description: "Camp Questionmark is a community of people that come together to celebrate life through music. Music to feel. Music to provide low end fulfillment and vibrate your 3rd eye permanently open. The balance between sacred & rage. And the love for both. Transcend through complete audio bliss. We do as much as we can to facilitate this & the camp's existence. Working all year to do a large week long free event in Black Rock City. Doing it for the love of doing it. And put everything & then some, back into it for growth. 100% of everything [and more] go directly into the project, and couldn't happen without all of the help and hard work given by everyone involved. Come experience what passion built!",
        latitude: 40.78333,
        longitude: -119.19827
      },
      {
        userId: '5',
        campName: 'DeMentha',
        address: '3:00 & Eulogy',
        description: "a Burning Man theme camp that hosts daytime on-playa dance parties serving up mojitos, shade, mist, beats and a warm welcome in just the right combination. Been at 3 & E forever :-)",
        latitude: 40.77957,
        longitude: -119.19787
      },
      {
        userId: '6',
        campName: 'Center Camp',
        address: '6:00 & Esplanade',
        description: "The Center Camp Café rises each year as one of the biggest and brightest stars in the Vault of Heaven that is Black Rock City. The Café offers an acre of art in the cool shade, hot and cold drinks, and some of the finest entertainment available. This beautifully decorated structure is the largest intergalactic convergence at Burning Man. A favorite stop for every participant, parade, mutant vehicle, marching band, and green alien, a visit to the Café is a great initiation to the event as a participant or a volunteer.",
        latitude: 40.78067,
        longitude: -119.21418
      },
      {
        userId: '7',
        campName: 'Bubbles & Bass',
        address: '8:30 & Esplanade',
        description: "BUBBLY WITH LOTS OF BASS!!! We'll be rockin' you out from 5am til noon with bubbly bass-tastic house music as you watch the sunrise over the playa and dance the AM hours away... and drink some bubbly while you boogie!",
        latitude: 40.78983,
        longitude: -119.21481
      },
      {
        userId: '8',
        campName: 'DISTRIKT',
        address: '9:00 & Fire',
        description: "DISTRIKT was founded in 2010 based on the ethos of the Ten Principles of Burning Man, and over the past decade has evolved into globally recognized philanthropic organization. While DISTRIKT is originally known for producing dance music events, we are an ever-evolving organization with a core believe that it is important for us to have a strong connection and experience with the community that we celebrate. DISTRIKT regularly partners with other community organizations and over the past decade has donated thousands of dollars of event proceeds to local and national non-profit organizations, such as Make-A-Wish Foundation and the San Francisco-Marin Food Bank. Beginning in 2020, DISTRIKT will leverage our wide community reach and launch a new volunteer effort focused on helping the community, the country and the planet.",
        latitude: 40.79487,
        longitude: -119.21731
      },
      {
        userId: '9',
        campName: 'Arctic Cowboys',
        address: '8:30 & Hallowed',
        description: "Fresh barbecue and pickle-back whiskey shots every day from 1-4pm",
        latitude: 40.78631,
        longitude: -119.22355
      },
      {
        userId: '10',
        campName: 'Mayan Warrior',
        address: '10:00 & Dance',
        description: "WARRIORMayan Warrior is the result of a collaborative project that has united artists, craftsmen, photographers, designers, technologists, architects and musicians from Mexico City and Northern California. The project’s original intent was to present to the world the incredible ascent of contemporary Mexican electronic music while paying respect to the deep and ancient sources from which that visual and auditory culture had grown. Both light and sound are curated by some of the world’s most prominent artists to transport participants to the very origins of the culture – and to a new understanding of contemporary electronic expression.",
        latitude: 40.79619,
        longitude: -119.20990
      },
      {
        userId: '11',
        campName: 'Play Alchemist',
        address: '9:30 & Esplanade',
        description: "The illuminated focal gathering place of PlayAlchemist is the Grand Pyramid, where one can experience a spectrum of solitude, raised awareness and transformation. Once inside, find peace and tranquility, commune with others or embark on a personal journey of discovery. After dark, reflect, connect, and find new experiences in heightened presence where music, lights and atmosphere converge to challenge your perception of what’s possible. PlayAlchemist. Discover your innate connection to the cosmos, elevate your consciousness and come alive with us.",
        latitude: 40.79288,
        longitude: -119.21053
      },
      {
        userId: '12',
        campName: 'Incendia',
        address: '8:00 & Esplanade',
        description: "Incendia is a concept borne of the love, appreciation for, and possibilities that lay within the nature of a simple flame. Marrying the worlds of design, art, and science, a breathtaking environment has been created, thanks to the mathematical grace and precision of the geodesic concept coupled with the application of a proprietary fire-capturing technique. The essence of Incendia lies in a unique manipulation of flame near it's zenith. Combusting gas is trapped beneath a fire-proof ceiling to cast a warm, illuminating glow downwards, captivating the fascination of all those below.  This effect provides an unparalleled ambience for gatherings large and small, while maintaining a level of safety greater than that offered by the typical palm-tree style heaters ubiquitous at many restaurants and nightclubs.",
        latitude: 40.78899,
        longitude: -119.21541
      },
      {
        userId: '13',
        campName: 'The Man',
        address: 'Center',
        description: "The focal point of the entire festival.",
        latitude: 40.78637,
        longitude: -119.20663
      },
      {
        userId: '14',
        campName: 'Temple',
        address: '12:00 & Deep Playa',
        description: 'The form of the Temple begins with life out of balance. Throughout the Sierra Nevada, species of pine trees are dying, compromised by a bark beetle which has proliferated due to human interruption of the cycle of forest fires, and climate change. The material of these trees, donated to our project, harvested and milled, becomes the basic building block of the Temple. Interlocking timber pieces in formation become a Temple that is both cloud and spire; inverted pyramidal columns suggest the negative-space of a forest canopy, simultaneously supporting a vast pagoda-like ‘cloud’ framework which in turn supports a central spire. In this way disorder gives way to harmony, and a group of dying trees is re-ordered into a cathedral of timbers stretching toward the sky; filtered sun rays will illuminate the intricate work of hundreds of hands building in unison; a collaboration that knits together a community as roots intertwine to give a healthy forest stability.',
        latitude: 40.79130,
        longitude: -119.20031
      },
      {
        userId: '15',
        campName: 'Illumina',
        address: '12:00 & Playa',
        description: 'ILUMINA is the experience where a group of people connect to a giant interactive sculpture creating a communal coherence vibration where all participants vibrate in the same frequency along with mother earth. As members reach personal and communal coherence, it will be reflected on the sculpture, sounds and lights will follow through the whole process rising harmoniously as their frequency does. Delighted visually by mystical sounds, musical chords and magical lights.',
        latitude: 40.78914,
        longitude: -119.20279
      },
      {
        userId: '16',
        campName: 'The Tree of Téneré',
        address: 'Deep Playa',
        description: 'An enormous lifelike tree, Ténéré offers shade to wanderers, adventure to climbers, and transcendent community to those gathered beneath its 15,000 LED leaves. Like its namesake – considered the most isolated tree on Earth until its destruction in 1973 – Ténéré serves as a place of refuge and ritual for desert wanderers. Standing more than three stories tall, it beckons to passersby with the promise of shade and adventure, conjuring spontaneous communities out of desert sand and sun. At night, LEDs hidden within each leaf begin to glow. The 15,000 leaves form a dome-shaped “canvas of light” that towers over the playa, spanning more than a thousand square feet. Participants lying under the tree experience sublime light shows set to ambient music or live performance. And they directly influence the canopy lights through their sounds and biorhythms, creating moments of transcendent oneness with each other and with nature.',
        latitude: 40.78962,
        longitude: -119.19619
      },
      {
        userId: '17',
        campName: 'Temple of Gravity (The Hippy Crusher)',
        address: 'Deep Playa',
        description: 'Gravity is a central component of all of Zachary Coffin’s massive, larger-than-life interactive kinetic sculptures and the only force that he believes he can truly have faith in. In 2003, Zachary Coffin built the Temple of Gravity as an expression of the year’s Burning Man theme – Beyond Belief – and this year, we’re bringing the massive 180,000 pound sculpture back for Radical Ritual. The Temple of Gravity is a 60-foot diameter steel dome with 5 arms, each arm supports a suspended granite stone slab (which weighs ~15,000 pounds) and is anchored by a granite base slab.',
        latitude: 40.79813,
        longitude: -119.18888
      },
      {
        userId: '18',
        campName: 'Aqueous',
        address: 'Deep Playa',
        description: 'Aqueous in an interactive landscape of meandering pathways of light. During the day Aqueous will shift in color and reflection, mirroring the sky within a walkable dichroic surface. At night, Aqueous will flow and glow in full illuminated interactivity, engaging large groups in collaborative play.',
        latitude: 40.79504,
        longitude: -119.20207
      },
      {
        userId: '19',
        campName: 'Bloom',
        address: '6:00 & Esplanade',
        description: 'Peter Hazel and a team of highly skilled professional artists from multiple realms is creating a forty foot tall sculpture of a “Bloom” of jellyfish. From a distance, this piece will look like a single large creature, but upon arriving one will realize it is comprised of thousands of smaller jellyfish, swimming in a sea of tentacles and lights. This piece is interactive and climbable with a large viewing platform in the “belly of the jelly,” thirty feet in the air, where one can look out on the playa, viewing art and Burning Man from a bird’s eye view. The sculpture seeks to challenge the visitor’s sense of perception, and how things are not always what they seem.',
        latitude: 40.78202,
        longitude: -119.21255
      },
      {
        userId: '20',
        campName: 'Death Guild Thunderdome',
        address: '4:30 & Esplanade',
        description: "Originally established in 1999 as a Theme Camp at Burning Man in the Nevada Black Rock Desert, Death Guild Thunderdome grew out of one of the longest running gothic night clubs (Death Guild) in San Francisco. DGTD was intended to “provide a place for some good music” at the Burning Man event, primarily as an alternative to the rave culture at the time. Taking its cue from the famous Mad Max series of post-apocalyptic films, Death Guild Thunderdome erects a geodesic dome as an arena for “fights” to take place, hangs bungees from the top with harnesses for participants to be strapped into, and provides foam boffer “weapons” to each “fighter.” Participants swing through the Dome, pummeling each other while the music blares and camp members provide a post-apocalyptic ambiance and theatrical experience.",
        latitude: 40.77987,
        longitude: -119.20550
      },
      {
        userId: '21',
        campName: 'The Flower Tower',
        address: 'Deep Playa',
        description: 'The Flower Tower is a 70 foot tall metal structure ornately decorated by thousands of painted metal flowers, some of which will blow fire.',
        latitude: 40.79369,
        longitude: -119.19710
      },
      {
        userId: '22',
        campName: 'The Temple of Awareness',
        address: 'Deep Playa',
        description: 'Temples offer environments for us to immerse ourselves into an unworldly place of harmony and peace. The Temple of Awareness is an organic form, similar to a pine cone. Seen from above, it evokes aspects of a bloomed lotus. The Temple is a 13-sided dome structure that is 35 ft. in diameter at the base. It has seven levels that reach 35 ft. high, each level with projecting decorative wings encircling it.',
        latitude: 40.78798,
        longitude: -119.19999
      },
      {
        userId: '23',
        campName: 'Firmament',
        address: 'Deep Playa',
        description: 'Firmament is a 52-foot wide, canopy of 21,600 LED lights, suspended from a 42-foot high aluminum tower. The tower is elevated on six legs forming huge equilateral triangles with the ground. At its pinnacle, a 21” diameter LED ball serves as a beacon and is visible from long distances. Visitors can gather under the structure as the LED lights display celestial, playful, psychedelic and brightly abstract images. A continually changing musical element engages visitors’ senses creating an enveloping, comforting, communal environment below.',
        latitude: 40.79203,
        longitude: -119.20421
      },
      {
        userId: '24',
        campName: 'Sonic Soul Tribe',
        address: '2:00 & Awe',
        description: 'The love of music is in our hearts, top notch sound and production is our soul. Join us on our journey to bring both to Burning Man 2019.',
        latitude: 40.78426,
        longitude: -119.19610
      },
      {
        userId: '25',
        campName: 'White Ocean',
        address: '2:00 & Dance',
        description: "White Ocean, co-founded by entrepreneurs Timur Sardarov, the son of a Russian oil magnate, and Oliver Ripley, and involving the trance DJ Paul Oakenfold, is viewed as one such camp, although it provides one of Burning Man's biggest stages and claims to “feed hundreds of non-White Ocean burners a day”. White Ocean was valdalized and ransacked by community members in 2016 for not upholding community values of inclusiveness and gifting.",
        latitude: 40.78390,
        longitude: -119.19337
      },
      {
        userId: '26',
        campName: 'Opulent Temple',
        address: '3:30 & Esplanade',
        description: "Welcome to Opulent Temple, a leading not-for-profit electronic music stage production emerging from Burning Man and based in San Francisco. We operate by volunteer effort and are funded solely by supporter donation in large part through fundraiser events all year round. The trademark DJ booth known as the O-pod is comprised of artfully twisted steel details, designed and welded by the OT resident DJ's themselves. The stage is illuminated mainly by firelight from DJ controlled flame thrower effects. The sound is raw, unexpected, full-bodied and visceral. The iconic symbol of the Dancing Shiva has been emblazoned at a wide array of events across North America and Europe. What they find at Opulent Temple is a peak experience of sacred dance to world class music.",
        latitude: 40.78305,
        longitude: -119.18983
      },
      {
        userId: '27',
        campName: 'The Kazbah',
        address: '9:30 & Esplanade',
        description: "The Kazbah is an oasis of light, sound and undeniable energy at Burning Man and beyond.  The centerpiece is the 48' tall Kazbah Pyramid measuring 12'×12′ at the base with the DJ connecting to the crowd through the Eye of Horus (or 3rd eye) at it's base. Last year the Kazbah went for it and changed the skyline of Burning Man once again with the highly anticipated addition of 3D projection mapping to the entire structure for thousands to enjoy and even interact with. This year it's all about the CONTENT now that we proved we could keep 4 massive laser projectors cool and dust free.  This year we will have 50,000 lumens of Epson Laser Projectors illuminating all 4 sides of the structure. The Kazbah has teamed up with 'State Of The Art' (SOTA) collaborators Joe Crossley (Epson) and Ryan Uzilevsky (Light Harvest) to bring a projection mapping display to run for the duration of the event featuring a SOTA Epson Laser Projection system. The vast blank canvas that is Black Rock City is what has truly inspired and enabled us design, fabricate and deliver something new and BIG every year. This year, the towering Kazbah pyramid becomes YOUR canvas.",
        latitude: 40.79188,
        longitude:-119.21045
      },
      {
        userId: '28',
        campName: 'Robot Heart',
        address: '10:00 & Esplanade',
        description: "Robot Heart is a collective of doers and dreamers, artists and entrepreneurs. Our home is in the desert dust of Burning Man, and the streets of New York City, Detroit, San Francisco and Hong Kong. Home is wherever the Heart is. Robot Heart is a community and a family, and our events at Burning Man, in New York and around the world are an extension and celebration of that community, bound together by shared values of inclusion, giving, environmental responsibility and mutual respect. Music is our first language, and our mission is to bring love and beats to the world. We work with and support artists, technologists and visionaries of all types in order to create incredible experiences and connected moments. To create love and beats, for you.",
        latitude: 40.79325,
        longitude: -119.20881
      }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Camps', null, {});
  }
};
