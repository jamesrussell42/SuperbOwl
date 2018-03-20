'use strict';

var audioData = [
            {
                title: 'Barn Owl',
                subtitle: 'Barn Owl',
                cardContent: "A medium sized owl, with a heart-shaped face.\n This owl lives in every continent except Antarctica. They are nocturnal, and hunt at night using sight and hearing. They have the best hearing of any animal. Superb rating: 6/10 Too common.",
                url: 'https://s3-eu-west-1.amazonaws.com/superbowls/BarnOwl.mp3',
                image: {
                    smallImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/BarnOwl.png',
                    largeImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/BarnOwl.png'
                }
            },
            {
                title: 'Long Eared Owl',
                subtitle: 'Long Eared Owl',
                cardContent: "A medium sized brown and yellow owl. The distinctive long ears are actually just feathers. When hunting it will disguise itself as a tree by spreading its wings.\n Superb rating: 8/10 Cool headgear.",
                url: 'https://s3-eu-west-1.amazonaws.com/superbowls/LongEaredOwl.mp3',
                image: {
                    smallImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/LongEaredOwl.png',
                    largeImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/LongEaredOwl.png'
                }
            },
            {
                title: 'Northern Hawk Owl',
                subtitle: 'Northern Hawk Owl',
                cardContent: "A medium sized dappled owl. They have false eyes on the backs of their heads, and long tails for in-flight stability. Mostly found in Northern Europe.  They hunt small mammals and fish.\n Superb rating: 7/10 Nice tail but otherwise boring.",
                url: 'https://s3-eu-west-1.amazonaws.com/superbowls/NHawkOwl.mp3',
                image: {
                    smallImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/NHawkOwl.png',
                    largeImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/NHawkOwl.png'
                }
            },
            {
                title: 'Burrowing Owl',
                subtitle: 'Burrowing Owl',
                cardContent: "A small, round, brown owl. Active at dawn and dusk. They are found in Western America and South America. They nest in abandoned burrows, leaving them at risk from predators. They are now listed as endangered in some areas.\n Superb rating: 6/10 Cute but dumb.",
                url: 'https://s3-eu-west-1.amazonaws.com/superbowls/BurrowingOwl.mp3',
                image: {
                    smallImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/BurrowingOwl.png',
                    largeImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/BurrowingOwl.png'
                }
            },
            {
                title: 'Barred Owl',
                subtitle: 'Barred Owl',
                cardContent: "A medium grey-brown owl. They are nocturnal and hunt just before dark. They often use nests abandoned by hawks, and are opportunistic feeders. Mostly found in North America.\n Superb rating: 7/10 Nice coloured owl.",
                url: 'https://s3-eu-west-1.amazonaws.com/superbowls/BarredOwl.mp3',
                image: {
                    smallImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/BarredOwl.png',
                    largeImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/BarredOwl.png'
                }
            },
            {
                title: 'Northern Saw-whet Owl',
                subtitle: 'Northern Saw-whet Owl',
                cardContent: "A small owl with a giant head. They have brown, grey and white streaks. They are covered in fluffy feathers, even on their feet. They migrate a lot. They also kill more prey than they need, and preserve their food in snow.\n Superb rating: 11/10 Best owl.",
                url: 'https://s3-eu-west-1.amazonaws.com/superbowls/NSawwhetOwl.mp3',
                image: {
                    smallImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/NSawwhetOwl.png',
                    largeImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/NSawwhetOwl.png'
                }
            },
            {
                title: 'Eagle Owl',
                subtitle: 'Eagle Owl',
                cardContent: "The heaviest owl in the world. Mottled brown plumage with judgemental orange eyes. Found in North America, Europe, and Asia. It can even live in deserts. It preys upon mice, reptiles, rabbits, and smaller owls. Basically, if you’re smaller than it, you’re lunch.\n Superb rating: 10/10 Please donít eat me.",
                url: 'https://s3-eu-west-1.amazonaws.com/superbowls/EagleOwl.mp3',
                image: {
                    smallImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/EagleOwl.png',
                    largeImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/EagleOwl.png'
                }
            },
            {
                title: 'Short Eared Owls',
                subtitle: 'Short Eared Owls',
                cardContent: "A medium owl with brown camouflage plumage. When camouflage doesnít work, it plays dead to avoid being eaten. Found in Iceland, North America and South America. Most likely owl to accidentally fly into planes. Hunts at dusk and dawn.\n Superb rating: 6/10 Stealth too good, gets hit by planes",
                url: 'https://s3-eu-west-1.amazonaws.com/superbowls/SEarOwl.mp3',
                image: {
                    smallImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/SEarOwl.png',
                    largeImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/SEarOwl.png'
                }
            },
            {
                title: 'Elf Owl',
                subtitle: 'Elf Owl',
                cardContent: "A very small owl with light grey plumage and no ear tufts. It live in Southern America and sleeps in trees or cacti. The males incubate the eggs while the females hunt. They eat insects, and in turn are eaten by the many many things bigger than them.\n Superb rating: 8/10 Sympathy vote",
                url: 'https://s3-eu-west-1.amazonaws.com/superbowls/ElfOwl.mp3',
                image: {
                    smallImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/ElfOwl.png',
                    largeImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/ElfOwl.png'
                }
            },
            {
                title: 'Snowy Owl',
                subtitle: 'Snowy Owl',
                cardContent: "A large white owl with very feathery legs and feet. It is the second biggest and heaviest owl. They live in the Arctic tundra, or in grasslands. They hunt hares, which they can swallow whole. They also know how to steal food from traps.\n Superb rating: 9/10 Pretty hardcore",
                url: 'https://s3-eu-west-1.amazonaws.com/superbowls/SnowyOwl.mp3',
                image: {
                    smallImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/SnowyOwl.png',
                    largeImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/SnowyOwl.png'
                }
            },
            {
                title: 'Great Grey Owl',
                subtitle: 'Great Grey Owl',
                cardContent: "A giant, grey owl with a puffy head. They are found in Alaska and Canada. As daytime owls, they hunt mostly in the late morning to late afternoon. They breed in woodland but migrate to estuaries to hunt.\n Superb rating: 8/10 Nice moustache",
                url: 'https://s3-eu-west-1.amazonaws.com/superbowls/GGreyOwl.mp3',
                image: {
                    smallImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/GGreyOwl.png',
                    largeImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/GGreyOwl.png'
                }
            },
            {
                title: 'Spectacled Owl',
                subtitle: 'Spectacled Owl',
                cardContent: "A medium sized owl with brown backs and yellow-ish bellies. They are nocturnal, and hunt small mammals and frogs. They are found in South America and especially in rainforest.\n Superb rating: 7/10 Quite pretty",
                url: 'https://s3-eu-west-1.amazonaws.com/superbowls/SpectacleOwl.mp3',
                image: {
                    smallImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/SpectacleOwl.png',
                    largeImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/SpectacleOwl.png'
                }
            },
            {
                title: 'Great Horned Owl',
                subtitle: 'Great Horned Owl',
                cardContent: "A large reddish-brown owl. Their 'horns' are really tufts of feathers. Their talons and curved upper beaks can reach 1.5 inches long. They are found throughout America. They become aggressive when threatened.\n Superb rating: 9/10 Do not anger",
                url: 'https://s3-eu-west-1.amazonaws.com/superbowls/GHornedOwl.mp3',
                image: {
                    smallImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/GHornedOwl.png',
                    largeImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/GHornedOwl.png'
                }
            },
            {
                title: 'Spotted Owl',
                subtitle: 'Spotted Owl',
                cardContent: "A medium sized owl. Their brown plumage is soft and fluffy and has white spots. It is found in Northern America. The young and old are preyed upon by Great Horned owls. It has been listed as endangered.\n Superb rating: 8/10 FLUFFY",
                url: 'https://s3-eu-west-1.amazonaws.com/superbowls/NSpottedOwl.mp3',
                image: {
                    smallImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/NSpottedOwl.png',
                    largeImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/NSpottedOwl.png'
                }
            },
            {
                title: 'Western Screech Owl',
                subtitle: 'Western Screech Owl',
                cardContent: "A small grey owl which stays well camouflaged in trees. They are nocturnal, and eat small mammals. They live in Western America and South America. During mating season they preen each otherís heads and beaks.\n They are very good at looking offended.\n Superb rating: 8/10 Sorry for whatever I said that insulted you, Owl.",
                url: 'https://s3-eu-west-1.amazonaws.com/superbowls/ScreechOwl.mp3',
                image: {
                    smallImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/ScreechOwl.png',
                    largeImageUrl: 'https://s3-eu-west-1.amazonaws.com/superbowls/ScreechOwl.png'
                }
            }
                            ];

module.exports = audioData;