export interface Work {
    name: string,
    img: string | null,
    date?: string | null
    description?: string
}

export interface Artist {
    artist: string,
    lifePeriod: {
        start: number,
        end?: number | null
    },
    img: string,
    description: string,
    works: Work[]
}

export class Catalog {
    public static painters: Artist[] = [
        {
            artist: "Pablo Picasso",
            lifePeriod: {
                start: 1881,
                end: 1973
            },
            img: "./painters/Pablo_picasso.jpg",
            description: "Developpe le cubisme en 1907 avec les peintres Georges Braque et dans une certaine mesure Auguste Herbin. The Blue Period (1901–1904), the Rose Period (1904–1906), the African-influenced Period (1907–1909), Analytic Cubism (1909–1912), and Synthetic Cubism (1912–1919)",
            works: [
                {
                    name: "Guernica",
                    img: "./painters/picasso/guernica.jpg",
                    date: "1937"
                },
                {
                    name: "Les Demoiselles d'Avignon",
                    img: "./painters/picasso/122634980_o.jpg",
                    date: "1907"
                },
                {
                    name: "La Femme qui pleure",
                    img: "./painters/picasso/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg",
                    date: "1937"
                },
                {
                    name: "Don Quixote",
                    img: "./painters/picasso/lithographie-don-quixote-par-pablo-picasso-1955-6.jpg",
                    date: "1955"
                },
            ]
        },
        {
            artist: "Salvador Dali",
            lifePeriod: {
                start: 1904,
                end: 1989
            },
            img: "../painters/Salvador_Dali.jpg",
            description: "L'un des principaux représentants du surréalisme",
            works: [
                {
                    name: "Le grand masturbateur",
                    img: "../painters/dali/le-grand-masturbateur-salvador-dali.jpg",
                    date: "1929"
                },
                {
                    name: "Persistance de la memoire",
                    img: "../painters/dali/persistance-de-la-memoire.jpg",
                    date: "1931"
                },
                {
                    name: "Rêve causé par le vol d'une abeille autour d'une grenade",
                    img: "../painters/dali/SOMNI-CAUSAT-PEL-VOL-D_UNA-ABELLA-AL-VOLTANT-D_UNA-MAGRANA-UN-SEGON-ABANS-DE-DESPERTAR_2.jpg",
                    date: "1944"
                },
                {
                    name: "Les éléphants",
                    img: "../painters/dali/les-elephants.jpg",
                    date: "1948"
                },

            ]

        },
        {
            artist: "Francis Bacon",
            lifePeriod: {
                start: 1909,
                end: 1992
            },
            img: "../painters/Francis_Bacon_by_John_Dekin.jpg",
            description: "Peintre britanique. Réputé pour ses triptyques. Peintre de la violence, de la cruauté et de la tragédie, son esprit est hanté, selon ses dires, par le vers d'Eschyle « l'odeur du sang humain ne me quitte pas des yeux »",
            works: [
                {
                    name: "Le Pape Innocent X",
                    img: "../painters/bacon/francis-bacon-pape-innocent-X.jpg",
                    date: "1953"
                },
                {
                    name: "Personnage avec quartiers de viande",
                    img: "../painters/bacon/francis-bacon-personnage-avec-quartiers-viande.jpg",
                    date: "1954"
                },
                {
                    name: "Corrida",
                    img: "../painters/bacon/francis-bacon-corrida.jpg",
                    date: "1969"
                },
                {
                    name: "Triptyque Lucian Freud",
                    img: "../painters/bacon/cover-r4x3w1000-57912d0f52a92-three-studies-of-lucian-freud-par-francis-bacon.jpg",
                    date: "1969",
                    description: "Oeuvre la plus chere au monde, vendu 142,4 millions de dollars"
                },
            ]
        },
        {
            artist: "Edouard Manet",
            lifePeriod: {
                start: 1832,
                end: 1883
            },
            img: "../painters/Edouard_Manet.jpg",
            description: "Peintre et graveur français. Précurseur de la peinture moderne, impressionisme et réalisme",
            works: [
                {
                    name: "Olympia",
                    img: "../painters/manet/fat7_manet_001f.jpg",
                    date: "1863",
                    description: "Cette œuvre a choqué par son sujet comme par son traitement. Le sujet s’inscrit pourtant dans la tradition du nu féminin cultivée par Titien, Vélasquez ou Goya, entre autres, ainsi que par des peintres académiques de l’époque de Manet. Mais tandis que ces nus-là trouvaient leur légitimité sous un couvert mythologique, allégorique ou symbolique, Manet peint le portrait d’une prostituée mise en scène comme telle. Le titre lui-même explicite le sujet (Olympia était un surnom courant chez les courtisanes de l’époque), de même que le petit chat noir à droite, allusion érotique évidente, ou le bouquet de fleurs tendu vers le premier plan par la servante noire. Ce bouquet, certainement envoyé par un amant, a été ressenti à l’époque comme une suprême provocation de la part de Manet."
                },
                {
                    name: "Le Déjeuner sur l'herbe",
                    img: "../painters/manet/Édouard_Manet_-_Le_Déjeuner_sur_l'herbe.jpg",
                    date: "1863"
                },
                {
                    name: "Le Joueur de fifre",
                    img: "../painters/manet/The_Fifer.jpg",
                    date: "1866"
                },
            ]
        },
        {
            artist: "Claude Monet",
            lifePeriod: {
                start: 1840,
                end: 1926
            },
            img: "../painters/Claude_Monet.jpg",
            description: "Peintre francais. Un des fondateurs de l'impressionnisme.",
            works: [
                {
                    name: "Impression soleil levant",
                    img: "../painters/monet/impression_soleil_levant.jpg",
                    date: "1872"
                },
                {
                    name: "La Promenade",
                    img: "../painters/monet/Monet_Umbrella.jpg",
                    date: "1875"
                },
                {
                    name: "Le bassin aux nymphéas",
                    img: "../painters/monet/Claude_Monet-Waterlilies.jpg",
                    date: "1899"
                },
            ]
        },
        {
            artist: "Vassily Kandinsky",
            lifePeriod: {
                start: 1866,
                end: 1944
            },
            img: "../painters/Vassily-Kandinsky.jpeg",
            description: "Peintre, graveur, théoricien de l’art, poète et dramaturge russe. Un des fondateurs de l'art abstrait",
            works: [
                {
                    name: "Couple riding",
                    img: "../painters/kandinsky/couple-riding.jpg",
                    date: "1906"
                },
                {
                    name: "Composition 8",
                    img: "../painters/kandinsky/composition8.jpg",
                    date: "1923"
                },
                {
                    name: "Plusieurs cercles",
                    img: "../painters/kandinsky/plusieurs cercles.jpg",
                    date: "1923"
                }
            ]
        },
        {
            artist: "Paul Klee",
            lifePeriod: {
                start: 1879,
                end: 1940
            },
            img: "../painters/Paul_Klee_1911.jpg",
            description: "Peintre Alemand d'identité culturelle suisse. Faisant partie du mouvement expressionniste et surréaliste",
            works: [
                {
                    name: "La machine à gazouiller",
                    img: "../painters/klee/Twittering_Machine.jpg",
                    date: "1922",
                    description: "A inspiré les shadoks"
                },
                {
                    name: "Magie des poissons",
                    img: "../painters/klee/492e7092a25dc6969f595b2f1485aca6.jpg",
                    date: "1925",
                },
                {
                    name: "Castle and sun",
                    img: "../painters/klee/3a314fe8bfcb353c61c9e73b001edc7b.jpg",
                    date: "1928",
                },
                {
                    name: "Ad Parnassum",
                    img: "../painters/klee/1024px-Paul_Klee_-_Ad_Parnassum.jpg",
                    date: "1932",
                },

            ]
        },
        {
            artist: "Vincent Van Gogh",
            lifePeriod: {
                start: 1853,
                end: 1890
            },
            img: "../painters/Vincent_van_Gogh.jpg",
            description: "Peintre et dessinateur néerlandais. Son œuvre pleine de naturalisme, inspirée par l'impressionnisme et le pointillisme, annonce le fauvisme et l'expressionnisme.",
            works: [
                {
                    name: "La Nuit étoilée",
                    img: "../painters/gogh/la_nuit_etoilee.jpg",
                    date: "1889"
                },
                {
                    name: "Auto portrait",
                    img: "../painters/gogh/self-portrait.jpg",
                    date: "1889"
                },
                {
                    name: "Nuit étoilée sur le Rhône",
                    img: "../painters/gogh/van-gogh-nuit-etoilee-sur-le-rhone.jpg",
                    date: "1888"
                },
                {
                    name: "Le café de nuit",
                    img: "../painters/gogh/776px-Vincent_Willem_van_Gogh_076.jpg",
                    date: "1888"
                },
                {
                    name: "Les tournesols (extrait série)",
                    img: "../painters/gogh/799px-Tournesols_van_gogh_echantillon.jpg",
                    date: "1888"
                },

            ]
        },
        {
            artist: "Edvard Munch",
            lifePeriod: {
                start: 1863,
                end: 1944
            },
            img: "../painters/Edvard_Munch_1933.jpg",
            description: "Peintre et graveur expressionniste norvégien.",
            works: [{
                name: "Le cri",
                img: "../painters/munch/edvard-munch-cri.jpg",
                date: "1893"
            }]
        },
        {
            artist: "Léonard de Vinci",
            lifePeriod: {
                start: 1452,
                end: 1519
            },
            img: "../painters/Leonardo_self.jpg",
            description: "Peintre italien et un homme d'esprit universel, à la fois artiste, organisateur de spectacles et de fêtes, scientifique, ingénieur, inventeur, anatomiste, peintre, sculpteur, architecte, urbaniste, botaniste, musicien, poète, philosophe et écrivain.",
            works: [
                {
                    name: "Homme de Vitruve",
                    img: "../painters/da-vinci/HommedeVitruve.jpg",
                    date: "1490"
                },
                {
                    name: "La Dame à l'hermine",
                    img: "../painters/da-vinci/1200px-Dama_z_gronostajem.jpg",
                    date: "1490"
                },
                {
                    name: "La Cène",
                    img: "../painters/da-vinci/1200px-Last_Supper_by_Leonardo_da_Vinci.jpg",
                    date: "1498"
                },
                {
                    name: "Salvator Mundi",
                    img: "../painters/da-vinci/salvator-mundi.jpg",
                    date: "1500"
                },
                {
                    name: "La Joconde",
                    img: "../painters/da-vinci/mona-lisa.jpg",
                    date: "1503"
                },
                {
                    name: "Saint Jean-Baptiste",
                    img: "../painters/da-vinci/st-jean-baptiste.jpg",
                    date: "1513"
                },
            ]
        },
        {
            artist: "Michel-Ange",
            lifePeriod: {
                start: 1475,
                end: 1564
            },
            img: "../painters/Miguel_Angel.jpg",
            description: "Sculpteur, peintre, architecte, poète et urbaniste florentin de la Haute Renaissance.",
            works: [
                {
                    name: "David",
                    img: "../painters/michael-ange/david.jpg",
                    date: "1504"
                },
                {
                    name: "Plafond de la chapelle Sixtine",
                    img: "../painters/michael-ange/sixtine.jpg",
                    date: "1512"
                },
                {
                    name: "Le Jugement dernier (Chapelle Sixtine)",
                    img: "../painters/michael-ange/jugement-dernier.jpeg",
                    date: "1541"
                },
                {
                    name: "La Création d'Adam (Chapelle Sixtine)",
                    img: "../painters/michael-ange/Creation-d-adam.jpg",
                    date: "1504"
                },
            ]
        },
        {
            artist: "Gustav Klimt",
            lifePeriod: {
                start: 1862,
                end: 1918
            },
            img: "../painters/Klimt.jpg",
            description: "Peintre symboliste autrichien. Un des membres les plus en vue du mouvement Art nouveau et de la Sécession de Vienne",
            works: [
                {
                    name: "Le Baisée",
                    img: "../painters/klimt/le-baisee.jpg",
                    date: "1908"
                },
                {
                    name: "Judith et Holopherne",
                    img: "../painters/klimt/Gustav_Klimt_039.jpg",
                    date: "1901"
                },
            ]
        },
        {
            artist: "Auguste Renoir",
            lifePeriod: {
                start: 1841,
                end: 1919
            },
            img: "../painters/Pierre-Auguste_Renoir.jpg",
            description: "Peintre Francais figuratif. Membre à part entière du groupe impressionniste",
            works: [
                {
                    name: "Bal du moulin de la Galette",
                    img: "../painters/renoir/Pierre-Auguste_Renoir,_Le_Moulin_de_la_Galette.jpg",
                    date: "1876"
                },
                {
                    name: "Le Déjeuner des canotiers",
                    img: "../painters/renoir/Le_Déjeuner_des_canotiers.jpg",
                    date: "1881"
                },
            ]
        },
        {
            artist: "Auguste Rodin",
            lifePeriod: {
                start: 1840,
                end: 1917
            },
            img: "../painters/Auguste_Rodin.jpg",
            description: "L'un des plus importants sculpteurs français de la seconde moitié du XIXᵉ siècle, considéré comme un des pères de la sculpture moderne.Héritier des siècles de l'humanisme, l'art réaliste de Rodin est un aboutissement, croisement de romantisme et d'impressionnisme dont la sculpture est modelée par la lutte entre la forme et la lumière.",
            works: [
                {
                    name: "Le penseur",
                    img: "../painters/rodin/le-penseur.jpg",
                    date: "1902"
                },
            ]
        },
        {
            artist: "Sandro Botticelli",
            lifePeriod: {
                start: 1445,
                end: 1510
            },
            img: "../painters/Sandro_Botticelli_083.jpg",
            description: "Peintre italien. Un des peintre les plus importants de la Renaissance italienne et de l'histoire de l'art.",
            works: [{
                name: "La naissance de Venus",
                img: "../painters/botticelli/botticelli-naissance-de-venus.jpg",
                date: "1485"
            },
            {
                name: "Le printemps",
                img: "../painters/botticelli/primavera.jpg",
                date: "1480"
            }]
        },
        {
            artist: "Johannes Vermeer",
            lifePeriod: {
                start: 1632,
                end: 1675
            },
            img: "../painters/Jan_Vermeer_van_Delft_002.jpg",
            description: "Peintre baroque néerlandais.",
            works: [
                {
                    name: "La laitière",
                    img: "../painters/Johannes-Vermeer/la-laitiere.jpg",
                    date: "1658"
                },
                {
                    name: "La jeune fille à la perle",
                    img: "../painters/Johannes-Vermeer/la-jeune-fille-a-la-perle.jpg",
                    date: "1664"
                }
            ]
        },
        {
            artist: "Paul Cézanne",
            lifePeriod: {
                start: 1839,
                end: 1906
            },
            img: "../painters/Cezanne.jpg",
            description: "Considéré comme le « père de l'art moderne »",
            works: [
                {
                    name: "Les grandes baigneuses",
                    img: "../painters/cezanne/baigneuses.jpg",
                    date: "1898"
                }
            ]
        },
        {
            artist: "Paul Gauguin",
            lifePeriod: {
                start: 1848,
                end: 1903
            },
            img: "../painters/Paul_Gauguin.jpg",
            description: "Un des plus importants précurseurs de l'art moderne avec Klimt, Cézanne, Munch, Seurat et van Gogh",
            works: [
                {
                    name: "Arearea",
                    img: "../painters/gauguin/arearea.jpg",
                    date: "1892"
                }
            ]
        },
        {
            artist: "Frida Kahlo",
            lifePeriod: {
                start: 1907,
                end: 1954
            },
            img: "../painters/Frida_Kahlo.jpg",
            description: "Mexicaine, mondialement connu pour ses peintures murales.",
            works: [
                {
                    name: "Les deux fridas",
                    img: "../painters/kahlo/lesdeuxfridas.jpg",
                    date: "1939"
                },
                {
                    name: "La colonne brisée",
                    img: "../painters/kahlo/la-colonne-brisee.jpg",
                    date: "1944"
                },
            ]
        },
        {
            artist: "Banksy",
            lifePeriod: {
                start: 1974,
                end: 0
            },
            img: "../painters/banksy.jpg",
            description: "",
            works: []
        },
        {
            artist: "Fernando Botero",
            lifePeriod: {
                start: 1932,
                end: 0
            },
            img: "../painters/Fernando_Botero.jpg",
            description: "Réputé pour ses personnages aux formes rondes et voluptueuses inspirés de l'art précolombien.",
            works: [{
                name: "la mort de Pablo Escobar",
                img: "../painters/botero/death-of-pablo-escobar.jpg",
                date: "1999"
            },
            {
                name: "Mona Lisa à 12 ans",
                img: "../painters/botero/mona-lis-a-12-ans.jpg",
                date: "1959"
            }
        ]
        },
        {
            artist: "Georges Seurat",
            lifePeriod: {
                start: 1859,
                end: 1891
            },
            img: "../painters/Georges_Seurat_1888.jpg",
            description: "Inventeur de la technique dite divisionniste.  Considéré avec Cézanne, Gauguin et Van Gogh, comme un des quatre grands peintres du post-impressionnisme.",
            works: [
                {
                    name: "Un dimanche après-midi à l'Île de la Grande Jatte",
                    img: "../painters/seurat/dimanche-apres-midi.jpg",
                    date: "1886"
                },
                {
                    name: "Une baignade à Asnières",
                    img: "../painters/seurat/baignde-a-asnieres.jpg",
                    date: "1884"
                }
            ]
        },
        {
            artist: "Juan Gris",
            lifePeriod: {
                start: 1887,
                end: 1927
            },
            img: "../painters/Juan_Gris.jpg",
            description: "Peintre espagnol proche du cubisme",
            works: [
                {
                    name: "Homme dans un café",
                    img: "../painters/juan-gris/homme-dans-un-cafe.jpg",
                    date: "1912"
                },
                {
                    name: "Poires et raisins sur une table",
                    img: "../painters/juan-gris/Pears_and_Grapes_on_a_Table.jpg",
                    date: "1913"
                },
                {
                    name: "Le Canigou",
                    img: "../painters/juan-gris/Le_Canigou_Juan_Gris.jpeg",
                    date: "1921"
                },
            ]
        },
        {
            artist: "Andy Warhol",
            lifePeriod: {
                start: 1928,
                end: 1987
            },
            img: "../painters/Andy_Warhol.jpg",
            description: "Un des principaux représentants du pop art",
            works: [
                {
                    name: "Campbell's Soup Cans",
                    img: "../painters/warhol/soup.jpg",
                    date: "1962"
                },
                {
                    name: "Shoot of Marilyns",
                    img: "../painters/warhol/AW003-andy-warhol-shot-marilyns-1000x1000.jpg",
                    date: "1964"
                },
            ]
        },
        {
            artist: "Le Douanier Rousseau",
            lifePeriod: {
                start: 1844,
                end: 1910
            },
            img: "../painters/Douanier_Rousseau_Dornac.jpg",
            description: "Un représentant majeur de l'art naïf",
            works: [
                {
                    name: "Surpris!",
                    img: "../painters/rousseau/1024px-Surprised-Rousseau.jpg",
                    date: "1891"
                },
                {
                    name: "La Bohémienne endormie",
                    img: "../painters/rousseau/1200px-Henri_Rousseau_-_La_zingara_addormentata.jpg",
                    date: "1897"
                },
                {
                    name: "Le Rêve",
                    img: "../painters/rousseau/henri-rousseau-le-reve-1200x675.jpg",
                    date: "1910"
                },

            ]
        },
        {
            artist: "Joan Miró",
            lifePeriod: {
                start: 1893,
                end: 1983
            },
            img: "../painters/Joan_Miro.jpg",
            description: "L'un des principaux représentants du mouvement surréaliste",
            works: [
                {
                    name: "La Ferme",
                    img: "../painters/miro/la-ferme-1922.jpg",
                    date: "1922"
                },
                {
                    name: "Paysage Catalan",
                    img: "../painters/miro/catalan-landscape-1024x660.jpg",
                    date: "1923"
                },
                {
                    name: "Le Carnaval d’Arlequin",
                    img: "../painters/miro/joan-miro-carnaval-darlequin-e1492686880229-1024x733.jpg",
                    date: "1924"
                },
                {
                    name: "Intérieur hollandais I",
                    img: "../painters/miro/jdutch-interior-i-1928.jpg",
                    date: "1928"
                },
                {
                    name: "Woman in front of the sun",
                    img: "../painters/miro/woman-in-front-of-the-sun.jpg",
                    date: "1950"
                },
            ]
        },
        {
            artist: "Jean-Michel Basquiat",
            lifePeriod: {
                start: 1960,
                end: 1988
            },
            img: "../painters/basquiat.jpg",
            description: "",
            works: [
                {
                    name: "Untitled Skull",
                    img: "../painters/basquiat/basquiat_untitled-1981.jpg",
                    date: "1981"
                },
                {
                    name: "Irony of a negro policeman",
                    img: "../painters/basquiat/basquiat-irony-1981.jpg",
                    date: "1981"
                },
                {
                    name: "King Alphonso",
                    img: "../painters/basquiat/king-alphonso-basquiat-1983.jpg",
                    date: "1983"
                },
                {
                    name: "Win $ 1’000’000",
                    img: "../painters/basquiat/warhol-Basquiat-WIN-s-1984.jpg",
                    date: "1984"
                },
                {
                    name: "Riding with death",
                    img: "../painters/basquiat/basquiat-riding-with-death-1988.jpg",
                    date: "1988"
                },
            ]
        },

    ]

    public static photographers: Artist[] = [
        {
            artist: "Les frère becher",
            lifePeriod: {
                start: 1931,
                end: 2007
            },
            img: "../photographers/becher.jpg",
            description: "Le travail photographique du couple Becher porte sur des bâtiments industriels (les « typologies ») photographiés selon un protocole extrêmement rigoureux (vue frontale, centrage du sujet, etc.).",
            works: [
                {
                    name: "Photographie 8",
                    img: "../photographers/becher/Bernd-Hilla-Becher-01.jpg",
                },
                {
                    name: "Photographie 9",
                    img: "../photographers/becher/Bernd-Hilla-Becher-02.jpg",
                },
            ]
        },
    ]

    public static filmmakers: Artist[] = [
        {
            artist: "Tarantino",
            lifePeriod: {
                start: 1963,
                end: null
            },
            img: "../filmmakers/tarantino.jpg",
            description: "",
            works: [
                {
                    name: "Reservoir Dogs",
                    img: "../filmmakers/tarantino/reservoir-dogs.jpeg",
                    date: "1992"
                },
                {
                    name: "Pulp Fiction",
                    img: "../filmmakers/tarantino/pulp-fiction.jpg",
                    date: "1994"
                },
                {
                    name: "Kill Bill Vol 1 & 2",
                    img: "../filmmakers/tarantino/kill-bill.jpeg",
                    date: "2003"
                },
                {
                    name: "Inglourious Basterds",
                    img: "../filmmakers/tarantino/Inglorious-Basterds.jpg",
                    date: "2009"
                },
                {
                    name: "Once Upon a Time in Hollywood",
                    img: "../filmmakers/tarantino/once-apon-a-time-in-hollywood.jpg",
                    date: "2019"
                },
            ]
        },
        {
            artist: "Steven Spielberg",
            lifePeriod: {
                start: 1946,
                end: null
            },
            img: "../filmmakers/steven-spielberg.jpg",
            description: "",
            works: [
                {
                    name: "E.T",
                    img: "../filmmakers/steven-spielberg/et-extra-terrestrial.jpg",
                    date: "1982"
                },
                {
                    name: "Jurassic Park",
                    img: "../filmmakers/steven-spielberg/jurassic-park.jpg",
                    date: "1993"
                },
                {
                    name: "Saving Private Ryan",
                    img: "../filmmakers/steven-spielberg/saving-private-ryan.jpg",
                    date: "1998"
                },
                {
                    name: "Raiders of the Lost Ark",
                    img: "../filmmakers/steven-spielberg/raiders-of-the-lost-ark.jpg",
                    date: "1981"
                },
                {
                    name: "Minority Report",
                    img: "../filmmakers/steven-spielberg/minority-report.jpg",
                    date: "2002"
                },
                {
                    name: "Catch Me If You Can",
                    img: "../filmmakers/steven-spielberg/catch-me-if-you-can.jpg",
                    date: "2002"
                },
            ]
        },
        {
            artist: "Martin Scorsese",
            lifePeriod: {
                start: 1942,
                end: null
            },
            img: "../filmmakers/Martin_Scorsese.jpg",
            description: "",
            works: [
                {
                    name: "Taxi Driver",
                    img: "../filmmakers/martin-scorsese/taxi-driver.jpg",
                    date: "1976"
                },
                {
                    name: "Les Affranchis",
                    img: "../filmmakers/martin-scorsese/les-affranchis.png",
                    date: "1990"
                },
                {
                    name: "Le Loup de Wall Street",
                    img: "../filmmakers/martin-scorsese/wolf-of-wall-street.jpg",
                    date: "2013"
                },
                {
                    name: "Shutter Island",
                    img: "../filmmakers/martin-scorsese/shutter-island.png",
                    date: "2010"
                },
                {
                    name: "Les Infiltrés",
                    img: "../filmmakers/martin-scorsese/les-infiltrés.png",
                    date: "2006"
                },
            ]
        },
        {
            artist: "Alfred Hitchcock",
            lifePeriod: {
                start: 1899,
                end: 1980,
            },
            img: "../filmmakers/hitchcock.jpg",
            description: "",
            works: [
                {
                    name: "Vertigo",
                    img: "../filmmakers/alfred-hitchcock/vertigo.png",
                    date: "1958"
                },
                {
                    name: "North by North-West (La Mort aux trousses)",
                    img: "../filmmakers/alfred-hitchcock/north-by-northwest.png",
                    date: "1959"
                },
                {
                    name: "Psychose",
                    img: "../filmmakers/alfred-hitchcock/psychose.jpg",
                    date: "1960"
                },
                {
                    name: "birds",
                    img: "../filmmakers/alfred-hitchcock/birds.jpg",
                    date: "1963"
                },
            ]
        },
        {
            artist: "Orson Welles",
            lifePeriod: {
                start: 1915,
                end: 1985
            },
            img: "../filmmakers/Orson_Welles_1937.jpg",
            description: "Citizen Kane",
            works: [
                {
                    name: "Citizen Kane",
                    img: "../filmmakers/orson-welles/citizen-kane.jpg",
                    date: "1941"
                },
            ]
        },
        {
            artist: "Stanley Kubrick",
            lifePeriod: {
                start: 1928,
                end: 1999
            },
            img: "../filmmakers/Kubrick.jpg",
            description: "",
            works: [
                {
                    name: "Docteur Folamour",
                    img: "../filmmakers/stanley-kubrick/docteur-folamour.jpg",
                    date: "1964"
                },
                {
                    name: "2001 Space odyssey",
                    img: "../filmmakers/stanley-kubrick/2001.jpg",
                    date: "1968"
                },
                {
                    name: "Orange mécanique",
                    img: "../filmmakers/stanley-kubrick/orange-mecanique.jpg",
                    date: "1971"
                },
                {
                    name: "Shining",
                    img: "../filmmakers/stanley-kubrick/shining.jpg",
                    date: "1980"
                },
                {
                    name: "Full Metal Jacket",
                    img: "../filmmakers/stanley-kubrick/full-metal-jacket.jpg",
                    date: "1987"
                },
            ]
        },
        {
            artist: "Francis Ford Coppola",
            lifePeriod: {
                start: 1939,
                end: null
            },
            img: "../filmmakers/Francis_Ford_Coppola_2011_CC.jpg",
            description: "",
            works: [
                {
                    name: "Apocalypse Now",
                    img: "../filmmakers/francis-ford-coppola/apocalypse-now.jpg",
                    date: "1979"
                },
            ]
        },
        {
            artist: "Sergio Leone",
            lifePeriod: {
                start: 1929,
                end: 1989
            },
            img: "../filmmakers/1419367.jpg",
            description: "",
            works: [
                {
                    name: "Et pour quelques dollars de plus",
                    img: "../filmmakers/sergio-leone/et-pr-qlq-dollars-de-plus.jpg",
                    date: "1965"
                },
                {
                    name: "Le Bon, la Brute et le Truand",
                    img: "../filmmakers/sergio-leone/le-bon-la-brute-et-le-truand.jpg",
                    date: "1966"
                },
                {
                    name: "Mon nom est Personne",
                    img: "../filmmakers/sergio-leone/mon-nom-est-personne.jpg",
                    date: "1973"
                },
            ]
        },
        {
            artist: "Woody Allen",
            lifePeriod: {
                start: 1935,
                end: null
            },
            img: "../filmmakers/woody.jpg",
            description: "",
            works: [
                {
                    name: "Escrocs mais pas trop",
                    img: "../filmmakers/woody-allen/escrocs_mais_pas_trop.jpg",
                    date: "2000"
                },
                {
                    name: "Match Point",
                    img: "../filmmakers/woody-allen/match_point.png",
                    date: "2005"
                },
                {
                    name: "Vicky Cristina Barcelona",
                    img: "../filmmakers/woody-allen/vicky-cristina-barcelona.jpg",
                    date: "2008"
                },
                {
                    name: "Whatever Works",
                    img: "../filmmakers/woody-allen/whatever-works.jpg",
                    date: "2009"
                },

            ]
        },
        {
            artist: "Christopher Nolan",
            lifePeriod: {
                start: 1970,
                end: null
            },
            img: "../filmmakers/Christopher_Nolan_Cannes_2018.jpg",
            description: "",
            works: [
                {
                    name: "Memento",
                    img: "../filmmakers/nolan/memento.jpg",
                    date: "2000"
                },
                {
                    name: "Batman Begins",
                    img: "../filmmakers/nolan/batman-begin.jpg",
                    date: "2005"
                },
                {
                    name: "Le Prestige",
                    img: "../filmmakers/nolan/le-prestige.jpg",
                    date: "2006"
                },
                {
                    name: "Inception",
                    img: "../filmmakers/nolan/inception.jpg",
                    date: "2010"
                },
                {
                    name: "Interstellar",
                    img: "../filmmakers/nolan/interstellar.jpg",
                    date: "2014"
                },
            ]
        },
        {
            artist: "Charles Chaplin",
            lifePeriod: {
                start: 1889,
                end: 1977,
            },
            img: "../filmmakers/Charlie_Chaplin.jpg",
            description: "",
            works: [
                {
                    name: "Le kid",
                    img: "../filmmakers/charlie-chaplin/le-kid.jpg",
                    date: "1921"
                },
                {
                    name: "Les temps modernes",
                    img: "../filmmakers/charlie-chaplin/temps-modernes.jpg",
                    date: "1936"
                },
            ]
        },
        {
            artist: "Les freres coen",
            lifePeriod: {
                start: 1954,
                end: null
            },
            img: "../filmmakers/les-coen-pas-tres-kasher,M32465.jpg",
            description: "",
            works: [
                {
                    name: "Fargo",
                    img: "../filmmakers/coen/fargo.jpg",
                    date: "1996"
                },
                {
                    name: "The Big Lebowski",
                    img: "../filmmakers/coen/lebowski.png",
                    date: "1998"
                },
                {
                    name: "O'Brother",
                    img: "../filmmakers/coen/o-brother.jpg",
                    date: "2000"
                },
                {
                    name: "No Country for Old Men",
                    img: "../filmmakers/coen/no-country-for-old-men.jpg",
                    date: "2007"
                },
                {
                    name: "Burn After Reading",
                    img: "../filmmakers/coen/Burn-After-Reading-furyosa.jpeg",
                    date: "2008"
                },

            ]
        },
        {
            artist: "Les soeur Wachowski",
            lifePeriod: {
                start: 1954,
                end: null
            },
            img: "../filmmakers/Soeurs-Wachowski-620x350.jpg",
            description: "",
            works: [
                {
                    name: "Matrix",
                    img: "../filmmakers/wachowski/matrix.jpg",
                    date: "1999"
                },
            ]
        },
        {
            artist: "Roman Polanski",
            lifePeriod: {
                start: 1933,
                end: null
            },
            img: "../filmmakers/Roman_Polanski_Cannes_2013.jpg",
            description: "",
            works: [
                {
                    name: "Le pianiste",
                    img: "../filmmakers/polanski/the-pianist.jpeg",
                    date: "1999"
                },
                {
                    name: "The Ghost Writer",
                    img: "../filmmakers/polanski/the-ghost-writer.jpg",
                    date: "2010"
                },

            ]
        },
        {
            artist: "David Lynch",
            lifePeriod: {
                start: 1946,
                end: null
            },
            img: "../filmmakers/530483.jpg",
            description: "",
            works: [
                {
                    name: "Elephant Man",
                    img: "../filmmakers/lynch/elephant-man.jpg",
                    date: "2080"
                },
                {
                    name: "Blue Velvet",
                    img: "../filmmakers/lynch/blue-velvet.jpg",
                    date: "2086"
                },
                {
                    name: "Mulholland Drive",
                    img: "../filmmakers/lynch/mulholland-drive.jpg",
                    date: "2001"
                },

            ]
        },
        {
            artist: "Xavier Dolan",
            lifePeriod: {
                start: 1989,
                end: null
            },
            img: "../filmmakers/Xavier_Dolan_Cannes_2016.jpg",
            description: "",
            works: [
                {
                    name: "J'ai tué ma mère",
                    img: "../filmmakers/dolan/j-ai-tue-ma-mere.jpg",
                    date: "2009"
                },
                {
                    name: "Laurence Anyways",
                    img: "../filmmakers/dolan/laurence-anyways.jpeg",
                    date: "2012"
                },
                {
                    name: "Mommy",
                    img: "../filmmakers/dolan/mommy.jpg",
                    date: "2014"
                },
            ]
        },
        {
            artist: "David Fincher",
            lifePeriod: {
                start: 1962,
                end: null
            },
            img: "../filmmakers/fincher.jpg",
            description: "",
            works: [
                {
                    name: "Alien",
                    img: "../filmmakers/fincher/alien.jpg",
                    date: "1992"
                },
                {
                    name: "Seven",
                    img: "../filmmakers/fincher/seven.png",
                    date: "1995"
                },
                {
                    name: "The Game",
                    img: "../filmmakers/fincher/the-game.jpg",
                    date: "1997"
                },
                {
                    name: "Fight Club",
                    img: "../filmmakers/fincher/fight-club.jpg",
                    date: "1999"
                },
                {
                    name: "The Social Network",
                    img: "../filmmakers/fincher/social-network.jpg",
                    date: "2010"
                },
                {
                    name: "Gone Girl",
                    img: "../filmmakers/fincher/gone-girl.jpg",
                    date: "2014"
                },

            ]
        },
        {
            artist: "Tim Burton",
            lifePeriod: {
                start: 1958,
                end: null
            },
            img: "../filmmakers/tim-burton.jpg",
            description: "",
            works: [
                {
                    name: "Edward aux mains d'argent",
                    img: "../filmmakers/tim-burton/edward-scissorhands.jpg",
                    date: "1990"
                },
                {
                    name: "Mars Attacks!",
                    img: "../filmmakers/tim-burton/mars-attacks.jpg",
                    date: "1995"
                },
                {
                    name: "Charlie et la Chocolaterie",
                    img: "../filmmakers/tim-burton/charlie-et-la-chocolaterie.jpg",
                    date: "2005"
                },
            ]
        },
        {
            artist: "Terry Gilliam",
            lifePeriod: {
                start: 1958,
                end: null
            },
            img: "../filmmakers/terrygilliam.jpg",
            description: "",
            works: [
                {
                    name: "Monty Python : Sacré Graal !",
                    img: "../filmmakers/terrygilliam/galloping_knights.jpg",
                    date: "1975"
                },
                {
                    name: "Brazil",
                    img: "../filmmakers/terrygilliam/brazil.jpg",
                    date: "1985"
                },

            ]
        },
    ]
}