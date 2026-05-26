// ───────────────────────────────────────────────────────────────────────────
// Outside Work — editable data table
// ───────────────────────────────────────────────────────────────────────────
//
// Single source of truth for the polaroid gallery on the About → Outside Work
// tab. Edit any row below to change what shows on the page.
//
// HOW TO EDIT
//
//   • Change a caption:        edit the `caption` field
//   • Change a category chip:  edit the `category` field (must match the union)
//   • Swap a photo:            overwrite the file at the same path in
//                                /public/outside-work/ (e.g. drop a new 03.jpeg)
//   • Remove a moment:         delete its object from the array
//   • Reorder:                 reorder the array — display order = array order
//   • Add a new moment:        drop a new file in /public/outside-work/ and
//                                append a new object pointing to it
//
// The `id` should stay stable across edits (used as a React key and to derive
// each card's tilt angle, so changing it will move the rotation).
//
// Allowed categories — extend the union below if you need new ones, and add
// a matching icon/colour mapping in components/PolaroidGallery.tsx.

export type OutsideCategory =
  | 'Travel'
  | 'Family'
  | 'Hobbies'
  | 'Sport'
  | 'Food'
  | 'Places'
  | 'Likes'
  | 'Learning'

export type OutsideMoment = {
  id: number
  image: string
  caption: string
  category: OutsideCategory
}

export const outsideMoments: OutsideMoment[] = [
  { id: 1,  image: '/outside-work/01.jpeg', caption: "This is Moxi. Always so helpful :-)",                category: 'Family' },
  { id: 2,  image: '/outside-work/02.jpeg', caption: "Me and the fam",                                    category: 'Family' },
  { id: 3,  image: '/outside-work/03.jpeg', caption: "Eating or cooking, I'm a massive foodie",            category: 'Food' },
  { id: 4,  image: '/outside-work/04.jpeg', caption: "Love a music festival or gig",                       category: 'Hobbies' },
  { id: 5,  image: '/outside-work/05.jpeg', caption: "I'm a huge geek for wrestling",                      category: 'Hobbies' },
  { id: 6,  image: '/outside-work/06.jpeg', caption: "Sweet tooth for sure",                               category: 'Food' },
  { id: 7,  image: '/outside-work/07.jpeg', caption: "Croatia",                                            category: 'Travel' },
  { id: 8,  image: '/outside-work/08.jpeg', caption: "Also a geek for collectibles",                       category: 'Hobbies' },
  { id: 9,  image: '/outside-work/09.jpeg', caption: "Can't beat grilled seafood",                         category: 'Food' },
  { id: 10, image: '/outside-work/10.jpeg', caption: "Or Spanish tapas",                                   category: 'Food' },
  { id: 11, image: '/outside-work/11.jpeg', caption: "Yep, I'm a matcha drinker",                          category: 'Hobbies' },
  { id: 12, image: '/outside-work/12.jpeg', caption: "Prawn tacos. Homer drool face",                      category: 'Food' },
  { id: 13, image: '/outside-work/13.jpeg', caption: "When I'm travelling, I'm hunting street food stalls", category: 'Places' },
  { id: 14, image: '/outside-work/14.jpeg', caption: "I will always get surf and turf",                    category: 'Food' },
  { id: 15, image: '/outside-work/15.jpeg', caption: "Combined work & play at Inbound last year",          category: 'Hobbies' },
  { id: 16, image: '/outside-work/16.jpeg', caption: "I'm Marketing & AI community locked in",             category: 'Learning' },
  { id: 17, image: '/outside-work/17.jpeg', caption: "I like to run and take photos",                      category: 'Hobbies' },
  { id: 18, image: '/outside-work/18.jpeg', caption: "Love meeting marketers in real life",                category: 'Hobbies' },
  { id: 19, image: '/outside-work/19.jpeg', caption: "As I say, AI falls in hobbies for me",               category: 'Hobbies' },
  { id: 20, image: '/outside-work/20.jpeg', caption: "Love to be by the canal",                            category: 'Places' },
  { id: 21, image: '/outside-work/21.jpeg', caption: "Athens",                                             category: 'Travel' },
  { id: 22, image: '/outside-work/22.jpeg', caption: "Sardines for life",                                  category: 'Food' },
  { id: 23, image: '/outside-work/23.jpeg', caption: "Work travel and colleagues in real life :-)",        category: 'Travel' },
  { id: 24, image: '/outside-work/24.jpeg', caption: "Ask me what I think about UAPs",                     category: 'Hobbies' },
  { id: 25, image: '/outside-work/25.jpeg', caption: "London on Lime Bike",                                category: 'Hobbies' },
  { id: 26, image: '/outside-work/26.jpeg', caption: "London on a Saturday morning",                       category: 'Places' },
  { id: 27, image: '/outside-work/27.jpeg', caption: "Caesar salad obsession",                             category: 'Food' },
  { id: 28, image: '/outside-work/28.jpeg', caption: "Me and Emma",                                        category: 'Family' },
  { id: 29, image: '/outside-work/29.jpeg', caption: "Cold morning walks with Moxi!",                      category: 'Family' },
  { id: 30, image: '/outside-work/30.jpeg', caption: "She can be sweet sometimes",                         category: 'Family' },
  { id: 31, image: '/outside-work/31.jpeg', caption: "Our rooftop at sunset",                              category: 'Places' },
  { id: 32, image: '/outside-work/32.jpeg', caption: "This dog",                                           category: 'Family' },
  { id: 33, image: '/outside-work/33.jpeg', caption: "Slow moving water",                                  category: 'Places' },
  { id: 34, image: '/outside-work/34.jpeg', caption: "Beach walks",                                        category: 'Places' },
  { id: 35, image: '/outside-work/35.jpeg', caption: "Crazy golf connoisseur",                             category: 'Hobbies' },
  { id: 36, image: '/outside-work/36.jpeg', caption: "Pubs with Emma & Moxi",                              category: 'Places' },
  { id: 37, image: '/outside-work/37.jpeg', caption: "Evening strolls",                                    category: 'Places' },
  { id: 38, image: '/outside-work/38.jpeg', caption: "Gym regular",                                        category: 'Sport' },
  { id: 39, image: '/outside-work/39.jpeg', caption: "Tenerife sunset",                                    category: 'Travel' },
  { id: 40, image: '/outside-work/40.jpeg', caption: "Gran Canaria hiking",                                category: 'Travel' },
  { id: 41, image: '/outside-work/41.jpeg', caption: "Hiking crew",                                        category: 'Travel' },
  { id: 42, image: '/outside-work/42.jpeg', caption: "Awesome 4 day trip",                                 category: 'Travel' },
  { id: 43, image: '/outside-work/43.jpeg', caption: "Ad spotter",                                         category: 'Hobbies' },
  { id: 44, image: '/outside-work/44.jpeg', caption: "Thames morning walks",                               category: 'Places' },
  { id: 45, image: '/outside-work/45.jpeg', caption: "Summer evenings with Emma",                          category: 'Places' },
  { id: 46, image: '/outside-work/46.jpeg', caption: "City runs and photography",                          category: 'Hobbies' },
  { id: 47, image: '/outside-work/47.jpeg', caption: "Love to share",                                      category: 'Food' },
  { id: 48, image: '/outside-work/48.jpeg', caption: "Victoria Park",                                      category: 'Places' },
  { id: 49, image: '/outside-work/49.jpeg', caption: "Love to run",                                        category: 'Sport' },
  { id: 50, image: '/outside-work/50.jpeg', caption: "Love to run somewhere new",                          category: 'Sport' },
  { id: 51, image: '/outside-work/51.jpeg', caption: "Mindfulness and entrepreneurship",                   category: 'Learning' },
  { id: 52, image: '/outside-work/52.jpeg', caption: "British Scandal!",                                   category: 'Hobbies' },
  { id: 53, image: '/outside-work/53.jpeg', caption: "GTM & AI geek",                                      category: 'Learning' },
  { id: 54, image: '/outside-work/54.jpeg', caption: "Growth stories",                                     category: 'Learning' },
  { id: 55, image: '/outside-work/55.jpeg', caption: "Drum & Bass",                                        category: 'Hobbies' },
  { id: 56, image: '/outside-work/56.jpeg', caption: "Thailand touring",                                   category: 'Travel' },
  { id: 57, image: '/outside-work/57.jpeg', caption: "Blessed with great friends",                         category: 'Family' },
  { id: 58, image: '/outside-work/58.jpeg', caption: "Friends in Ibiza",                                   category: 'Family' },
  { id: 59, image: '/outside-work/59.jpeg', caption: "Koh Samui fitness camp",                             category: 'Travel' },
  { id: 60, image: '/outside-work/60.jpeg', caption: "Thames Path runs",                                   category: 'Places' },
  { id: 61, image: '/outside-work/61.jpeg', caption: "Street art spotting",                                category: 'Hobbies' },
]
