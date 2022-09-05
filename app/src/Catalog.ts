export interface Work {
  name: string;
  img: string;
  date?: string;
  description?: string;
}

export interface Artist {
  artist: string;
  lifePeriod: {
    start: number;
    end?: number | null;
  };
  img: string;
  description: string;
  works: Work[];
}

export class Catalog {
  public static painters: Artist[] = [
    {
      artist: "Pablo Picasso",
      lifePeriod: {
        start: 1881,
        end: 1973,
      },
      img: "../painters/Pablo_picasso.jpg",
      description:
        "Developpe le cubisme en 1907 avec les peintres Georges Braque et dans une certaine mesure Auguste Herbin. The Blue Period (1901–1904), the Rose Period (1904–1906), the African-influenced Period (1907–1909), Analytic Cubism (1909–1912), and Synthetic Cubism (1912–1919)",
      works: [
        {
          name: "Guernica",
          img: "../painters/picasso/guernica.jpg",
          date: "1937",
        },
        {
          name: "Les Demoiselles d'Avignon",
          img: "../painters/picasso/122634980_o.jpg",
          date: "1907",
        },
        {
          name: "La Femme qui pleure",
          img: "../painters/picasso/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg",
          date: "1937",
        },
        {
          name: "Don Quixote",
          img: "../painters/picasso/lithographie-don-quixote-par-pablo-picasso-1955-6.jpg",
          date: "1955",
        },
      ],
    },
    {
      artist: "Georges Braque",
      lifePeriod: {
        start: 1882,
        end: 1963,
      },
      img: "../painters/braque.jpg",
      description:
        "Peintre, sculpteur et graveur français. Developpe le cubisme en 1907 avec Picasso. Il est chiant il a eut mille styles",
      works: [
        {
          name: "Man with a guitare",
          img: "../painters/braque/man-with-a-guitare.jpg",
          date: "1911",
        },
        {
          name: "Maisons à l'Estaque",
          img: "../painters/braque/Houses-At-L_estaque.jpg",
          date: "1908",
        },
        {
          name: "Boats on the beach at l'Estaque",
          img: "../painters/braque/boat-on-the-beach-at-l-estaque.jpg",
          date: "1906",
        },
        {
          name: "Still Life with Banderillas",
          img: "../painters/braque/still-life-with-banderillas.jpg",
          date: "1911",
        },
      ],
    },
    {
      artist: "Salvador Dali",
      lifePeriod: {
        start: 1904,
        end: 1989,
      },
      img: "../painters/Salvador_Dali.jpg",
      description: "L'un des principaux représentants du surréalisme",
      works: [
        {
          name: "Le grand masturbateur",
          img: "../painters/dali/le-grand-masturbateur-salvador-dali.jpg",
          date: "1929",
        },
        {
          name: "Persistance de la memoire",
          img: "../painters/dali/persistance-de-la-memoire.jpg",
          date: "1931",
        },
        {
          name: "Rêve causé par le vol d'une abeille autour d'une grenade",
          img: "../painters/dali/SOMNI-CAUSAT-PEL-VOL-D_UNA-ABELLA-AL-VOLTANT-D_UNA-MAGRANA-UN-SEGON-ABANS-DE-DESPERTAR_2.jpg",
          date: "1944",
        },
        {
          name: "Les éléphants",
          img: "../painters/dali/les-elephants.jpg",
          date: "1948",
        },
        {
          name: "Madonna",
          img: "../painters/dali/madonna.jpg",
          date: "1958",
        },
      ],
    },
    {
      artist: "Francis Bacon",
      lifePeriod: {
        start: 1909,
        end: 1992,
      },
      img: "../painters/Francis_Bacon_by_John_Dekin.jpg",
      description:
        "Peintre britanique. Réputé pour ses triptyques. Peintre de la violence, de la cruauté et de la tragédie, son esprit est hanté, selon ses dires, par le vers d'Eschyle « l'odeur du sang humain ne me quitte pas des yeux »",
      works: [
        {
          name: "Le Pape Innocent X",
          img: "../painters/bacon/francis-bacon-pape-innocent-X.jpg",
          date: "1953",
        },
        {
          name: "Personnage avec quartiers de viande",
          img: "../painters/bacon/francis-bacon-personnage-avec-quartiers-viande.jpg",
          date: "1954",
        },
        {
          name: "Corrida",
          img: "../painters/bacon/francis-bacon-corrida.jpg",
          date: "1969",
        },
        {
          name: "Triptyque Lucian Freud",
          img: "../painters/bacon/cover-r4x3w1000-57912d0f52a92-three-studies-of-lucian-freud-par-francis-bacon.jpg",
          date: "1969",
          description:
            "Oeuvre la plus chere au monde, vendu 142,4 millions de dollars",
        },
      ],
    },
    {
      artist: "Edouard Manet",
      lifePeriod: {
        start: 1832,
        end: 1883,
      },
      img: "../painters/Edouard_Manet.jpg",
      description:
        "Peintre et graveur français. Précurseur de la peinture moderne, impressionisme et réalisme",
      works: [
        {
          name: "Olympia",
          img: "../painters/manet/fat7_manet_001f.jpg",
          date: "1863",
          description:
            "Cette œuvre a choqué par son sujet comme par son traitement. Le sujet s’inscrit pourtant dans la tradition du nu féminin cultivée par Titien, Vélasquez ou Goya, entre autres, ainsi que par des peintres académiques de l’époque de Manet. Mais tandis que ces nus-là trouvaient leur légitimité sous un couvert mythologique, allégorique ou symbolique, Manet peint le portrait d’une prostituée mise en scène comme telle. Le titre lui-même explicite le sujet (Olympia était un surnom courant chez les courtisanes de l’époque), de même que le petit chat noir à droite, allusion érotique évidente, ou le bouquet de fleurs tendu vers le premier plan par la servante noire. Ce bouquet, certainement envoyé par un amant, a été ressenti à l’époque comme une suprême provocation de la part de Manet.",
        },
        {
          name: "Le Déjeuner sur l'herbe",
          img: "../painters/manet/Édouard_Manet_-_Le_Déjeuner_sur_l'herbe.jpg",
          date: "1863",
        },
        {
          name: "Le Joueur de fifre",
          img: "../painters/manet/The_Fifer.jpg",
          date: "1866",
        },
        {
          name: "La pie",
          img: "../painters/manet/La_pie.jpg",
          date: "1868",
        },
      ],
    },
    {
      artist: "Claude Monet",
      lifePeriod: {
        start: 1840,
        end: 1926,
      },
      img: "../painters/Claude_Monet.jpg",
      description: "Peintre francais. Un des fondateurs de l'impressionnisme.",
      works: [
        {
          name: "Impression soleil levant",
          img: "../painters/monet/impression_soleil_levant.jpg",
          date: "1872",
        },
        {
          name: "La Promenade",
          img: "../painters/monet/Monet_Umbrella.jpg",
          date: "1875",
        },
        {
          name: "Le bassin aux nymphéas",
          img: "../painters/monet/Claude_Monet-Waterlilies.jpg",
          date: "1899",
        },
        {
          name: "Ice Floes",
          img: "../painters/monet/ice-floes.jpg",
          date: "1893",
        },
        {
          name: "Les Coquelicots",
          img: "../painters/monet/les-coquelicots.jpg",
          date: "1873",
        },
      ],
    },
    {
      artist: "Vassily Kandinsky",
      lifePeriod: {
        start: 1866,
        end: 1944,
      },
      img: "../painters/Vassily-Kandinsky.jpeg",
      description:
        "Peintre, graveur, théoricien de l’art, poète et dramaturge russe. Un des fondateurs de l'art abstrait",
      works: [
        {
          name: "Couple riding",
          img: "../painters/kandinsky/couple-riding.jpg",
          date: "1906",
        },
        {
          name: "Composition 8",
          img: "../painters/kandinsky/composition8.jpg",
          date: "1923",
        },
        {
          name: "Plusieurs cercles",
          img: "../painters/kandinsky/plusieurs cercles.jpg",
          date: "1923",
        },
      ],
    },
    {
      artist: "Paul Klee",
      lifePeriod: {
        start: 1879,
        end: 1940,
      },
      img: "../painters/Paul_Klee_1911.jpg",
      description:
        "Peintre Alemand d'identité culturelle suisse. Faisant partie du mouvement expressionniste et surréaliste",
      works: [
        {
          name: "La machine à gazouiller",
          img: "../painters/klee/Twittering_Machine.jpg",
          date: "1922",
          description: "A inspiré les shadoks",
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
        {
          name: "Monuments at g",
          img: "../painters/klee/monuments-at-g.jpg",
          date: "1929",
        },
        {
          name: "May picture",
          img: "../painters/klee/may-picture.jpg",
          date: "1925",
        },
      ],
    },
    {
      artist: "Vincent Van Gogh",
      lifePeriod: {
        start: 1853,
        end: 1890,
      },
      img: "../painters/Vincent_van_Gogh.jpg",
      description:
        "Peintre et dessinateur néerlandais. Son œuvre pleine de naturalisme, inspirée par l'impressionnisme et le pointillisme, annonce le fauvisme et l'expressionnisme.",
      works: [
        {
          name: "La Nuit étoilée",
          img: "../painters/gogh/la_nuit_etoilee.jpg",
          date: "1889",
        },
        {
          name: "Auto portrait",
          img: "../painters/gogh/self-portrait.jpg",
          date: "1889",
        },
        {
          name: "Nuit étoilée sur le Rhône",
          img: "../painters/gogh/van-gogh-nuit-etoilee-sur-le-rhone.jpg",
          date: "1888",
        },
        {
          name: "Le café de nuit",
          img: "../painters/gogh/776px-Vincent_Willem_van_Gogh_076.jpg",
          date: "1888",
        },
        {
          name: "Les tournesols (extrait série)",
          img: "../painters/gogh/799px-Tournesols_van_gogh_echantillon.jpg",
          date: "1888",
        },
      ],
    },
    {
      artist: "Edvard Munch",
      lifePeriod: {
        start: 1863,
        end: 1944,
      },
      img: "../painters/Edvard_Munch_1933.jpg",
      description: "Peintre et graveur expressionniste norvégien.",
      works: [
        {
          name: "Le cri",
          img: "../painters/munch/edvard-munch-cri.jpg",
          date: "1893",
        },
      ],
    },
    {
      artist: "Léonard de Vinci",
      lifePeriod: {
        start: 1452,
        end: 1519,
      },
      img: "../painters/Leonardo_self.jpg",
      description:
        "Peintre italien et un homme d'esprit universel, à la fois artiste, organisateur de spectacles et de fêtes, scientifique, ingénieur, inventeur, anatomiste, peintre, sculpteur, architecte, urbaniste, botaniste, musicien, poète, philosophe et écrivain.",
      works: [
        {
          name: "Homme de Vitruve",
          img: "../painters/da-vinci/HommedeVitruve.jpg",
          date: "1490",
        },
        {
          name: "La Dame à l'hermine",
          img: "../painters/da-vinci/1200px-Dama_z_gronostajem.jpg",
          date: "1490",
        },
        {
          name: "La Cène",
          img: "../painters/da-vinci/1200px-Last_Supper_by_Leonardo_da_Vinci.jpg",
          date: "1498",
        },
        {
          name: "Salvator Mundi",
          img: "../painters/da-vinci/salvator-mundi.jpg",
          date: "1500",
        },
        {
          name: "La Joconde",
          img: "../painters/da-vinci/mona-lisa.jpg",
          date: "1503",
        },
        {
          name: "Saint Jean-Baptiste",
          img: "../painters/da-vinci/st-jean-baptiste.jpg",
          date: "1513",
        },
      ],
    },
    {
      artist: "Michel-Ange",
      lifePeriod: {
        start: 1475,
        end: 1564,
      },
      img: "../painters/Miguel_Angel.jpg",
      description:
        "Sculpteur, peintre, architecte, poète et urbaniste florentin de la Haute Renaissance.",
      works: [
        {
          name: "David",
          img: "../painters/michael-ange/david.jpg",
          date: "1504",
        },
        {
          name: "Plafond de la chapelle Sixtine",
          img: "../painters/michael-ange/sixtine.jpg",
          date: "1512",
        },
        {
          name: "Le Jugement dernier (Chapelle Sixtine)",
          img: "../painters/michael-ange/jugement-dernier.jpeg",
          date: "1541",
        },
        {
          name: "La Création d'Adam (Chapelle Sixtine)",
          img: "../painters/michael-ange/Creation-d-adam.jpg",
          date: "1504",
        },
      ],
    },
    {
      artist: "Gustav Klimt",
      lifePeriod: {
        start: 1862,
        end: 1918,
      },
      img: "../painters/Klimt.jpg",
      description:
        "Peintre symboliste autrichien. Un des membres les plus en vue du mouvement Art nouveau et de la Sécession de Vienne",
      works: [
        {
          name: "Le Baisée",
          img: "../painters/klimt/le-baisee.jpg",
          date: "1908",
        },
        {
          name: "Judith et Holopherne",
          img: "../painters/klimt/Gustav_Klimt_039.jpg",
          date: "1901",
        },
        {
          name: "L'espoir II",
          img: "../painters/klimt/l-espoir-2.jpg",
          date: "1907",
        },
      ],
    },
    {
      artist: "Auguste Renoir",
      lifePeriod: {
        start: 1841,
        end: 1919,
      },
      img: "../painters/Pierre-Auguste_Renoir.jpg",
      description:
        "Peintre Francais figuratif. Membre à part entière du groupe impressionniste",
      works: [
        {
          name: "Bal du moulin de la Galette",
          img: "../painters/renoir/Pierre-Auguste_Renoir,_Le_Moulin_de_la_Galette.jpg",
          date: "1876",
        },
        {
          name: "Le Déjeuner des canotiers",
          img: "../painters/renoir/Le_Déjeuner_des_canotiers.jpg",
          date: "1881",
        },
        {
          name: "In the Meadow",
          img: "../painters/renoir/in-the-meadow.jpg",
          date: "1888",
        },
      ],
    },
    {
      artist: "Auguste Rodin",
      lifePeriod: {
        start: 1840,
        end: 1917,
      },
      img: "../painters/Auguste_Rodin.jpg",
      description:
        "L'un des plus importants sculpteurs français de la seconde moitié du XIXᵉ siècle, considéré comme un des pères de la sculpture moderne.Héritier des siècles de l'humanisme, l'art réaliste de Rodin est un aboutissement, croisement de romantisme et d'impressionnisme dont la sculpture est modelée par la lutte entre la forme et la lumière.",
      works: [
        {
          name: "Le penseur",
          img: "../painters/rodin/le-penseur.jpg",
          date: "1902",
        },
      ],
    },
    {
      artist: "Sandro Botticelli",
      lifePeriod: {
        start: 1445,
        end: 1510,
      },
      img: "../painters/Sandro_Botticelli_083.jpg",
      description:
        "Peintre italien. Un des peintre les plus importants de la Renaissance italienne et de l'histoire de l'art.",
      works: [
        {
          name: "La naissance de Venus",
          img: "../painters/botticelli/botticelli-naissance-de-venus.jpg",
          date: "1485",
        },
        {
          name: "Le printemps",
          img: "../painters/botticelli/primavera.jpg",
          date: "1480",
        },
      ],
    },
    {
      artist: "Johannes Vermeer",
      lifePeriod: {
        start: 1632,
        end: 1675,
      },
      img: "../painters/Jan_Vermeer_van_Delft_002.jpg",
      description: "Peintre baroque néerlandais.",
      works: [
        {
          name: "La laitière",
          img: "../painters/Johannes-Vermeer/la-laitiere.jpg",
          date: "1658",
        },
        {
          name: "La jeune fille à la perle",
          img: "../painters/Johannes-Vermeer/la-jeune-fille-a-la-perle.jpg",
          date: "1664",
        },
      ],
    },
    {
      artist: "Paul Cézanne",
      lifePeriod: {
        start: 1839,
        end: 1906,
      },
      img: "../painters/Cezanne.jpg",
      description: "Considéré comme le « père de l'art moderne »",
      works: [
        {
          name: "Les grandes baigneuses",
          img: "../painters/cezanne/baigneuses.jpg",
          date: "1898",
        },
      ],
    },
    {
      artist: "Paul Gauguin",
      lifePeriod: {
        start: 1848,
        end: 1903,
      },
      img: "../painters/Paul_Gauguin.jpg",
      description:
        "Un des plus importants précurseurs de l'art moderne avec Klimt, Cézanne, Munch, Seurat et van Gogh. Synthetisme (Contour noir, aplats couleurs simples)",
      works: [
        {
          name: "Arearea",
          img: "../painters/gauguin/arearea.jpg",
          date: "1892",
        },
      ],
    },
    {
      artist: "Frida Kahlo",
      lifePeriod: {
        start: 1907,
        end: 1954,
      },
      img: "../painters/Frida_Kahlo.jpg",
      description: "Mexicaine, mondialement connu pour ses peintures murales.",
      works: [
        {
          name: "Les deux fridas",
          img: "../painters/kahlo/lesdeuxfridas.jpg",
          date: "1939",
        },
        {
          name: "La colonne brisée",
          img: "../painters/kahlo/la-colonne-brisee.jpg",
          date: "1944",
        },
      ],
    },
    {
      artist: "Fernando Botero",
      lifePeriod: {
        start: 1932,
        end: 0,
      },
      img: "../painters/Fernando_Botero.jpg",
      description:
        "Réputé pour ses personnages aux formes rondes et voluptueuses inspirés de l'art précolombien.",
      works: [
        {
          name: "la mort de Pablo Escobar",
          img: "../painters/botero/death-of-pablo-escobar.jpg",
          date: "1999",
        },
        {
          name: "Mona Lisa à 12 ans",
          img: "../painters/botero/mona-lis-a-12-ans.jpg",
          date: "1959",
        },
      ],
    },
    {
      artist: "Georges Seurat",
      lifePeriod: {
        start: 1859,
        end: 1891,
      },
      img: "../painters/Georges_Seurat_1888.jpg",
      description:
        "Inventeur de la technique dite divisionniste.  Considéré avec Cézanne, Gauguin et Van Gogh, comme un des quatre grands peintres du post-impressionnisme.",
      works: [
        {
          name: "Un dimanche après-midi à l'Île de la Grande Jatte",
          img: "../painters/seurat/dimanche-apres-midi.jpg",
          date: "1886",
        },
        {
          name: "Une baignade à Asnières",
          img: "../painters/seurat/baignde-a-asnieres.jpg",
          date: "1884",
        },
        {
          name: "Temps gris, Grande Jatte",
          img: "../painters/seurat/grey-weather-grande-jatte.jpg",
          date: "1886",
        },
      ],
    },
    {
      artist: "Juan Gris",
      lifePeriod: {
        start: 1887,
        end: 1927,
      },
      img: "../painters/Juan_Gris.jpg",
      description: "Peintre espagnol proche du cubisme",
      works: [
        {
          name: "Homme dans un café",
          img: "../painters/juan-gris/homme-dans-un-cafe.jpg",
          date: "1912",
        },
        {
          name: "Poires et raisins sur une table",
          img: "../painters/juan-gris/Pears_and_Grapes_on_a_Table.jpg",
          date: "1913",
        },
        {
          name: "Le Canigou",
          img: "../painters/juan-gris/Le_Canigou_Juan_Gris.jpeg",
          date: "1921",
        },
        {
          name: "Violin and Playing Cards on a Table",
          img: "../painters/juan-gris/Violin-and-Playing-Cards-on-a-Table.jpg",
          date: "1913",
        },
        {
          name: "Still life with checked tablecloth",
          img: "../painters/juan-gris/still-life-with-checked-tablecloth.jpg",
          date: "1915",
        },
      ],
    },
    {
      artist: "Andy Warhol",
      lifePeriod: {
        start: 1928,
        end: 1987,
      },
      img: "../painters/Andy_Warhol.jpg",
      description: "Un des principaux représentants du pop art",
      works: [
        {
          name: "Campbell's Soup Cans",
          img: "../painters/warhol/soup.jpg",
          date: "1962",
        },
        {
          name: "Shoot of Marilyns",
          img: "../painters/warhol/AW003-andy-warhol-shot-marilyns-1000x1000.jpg",
          date: "1964",
        },
      ],
    },
    {
      artist: "Le Douanier Rousseau",
      lifePeriod: {
        start: 1844,
        end: 1910,
      },
      img: "../painters/Douanier_Rousseau_Dornac.jpg",
      description: "Un représentant majeur de l'art naïf",
      works: [
        {
          name: "Surpris!",
          img: "../painters/rousseau/1024px-Surprised-Rousseau.jpg",
          date: "1891",
        },
        {
          name: "La Bohémienne endormie",
          img: "../painters/rousseau/1200px-Henri_Rousseau_-_La_zingara_addormentata.jpg",
          date: "1897",
        },
        {
          name: "Le Rêve",
          img: "../painters/rousseau/henri-rousseau-le-reve-1200x675.jpg",
          date: "1910",
        },
      ],
    },
    {
      artist: "Joan Miró",
      lifePeriod: {
        start: 1893,
        end: 1983,
      },
      img: "../painters/Joan_Miro.jpg",
      description: "L'un des principaux représentants du mouvement surréaliste",
      works: [
        {
          name: "La Ferme",
          img: "../painters/miro/la-ferme-1922.jpg",
          date: "1922",
        },
        {
          name: "Paysage Catalan",
          img: "../painters/miro/catalan-landscape-1024x660.jpg",
          date: "1923",
        },
        {
          name: "Le Carnaval d’Arlequin",
          img: "../painters/miro/joan-miro-carnaval-darlequin-e1492686880229-1024x733.jpg",
          date: "1924",
        },
        {
          name: "Intérieur hollandais I",
          img: "../painters/miro/dutch-interior-i-1928.jpg",
          date: "1928",
        },
        {
          name: "Woman in front of the sun",
          img: "../painters/miro/woman-in-front-of-the-sun.jpg",
          date: "1950",
        },
      ],
    },
    {
      artist: "Jean-Michel Basquiat",
      lifePeriod: {
        start: 1960,
        end: 1988,
      },
      img: "../painters/basquiat.jpg",
      description: "",
      works: [
        {
          name: "Untitled Skull",
          img: "../painters/basquiat/basquiat_untitled-1981.jpg",
          date: "1981",
        },
        {
          name: "Irony of a negro policeman",
          img: "../painters/basquiat/basquiat-irony-1981.jpg",
          date: "1981",
        },
        {
          name: "King Alphonso",
          img: "../painters/basquiat/king-alphonso-basquiat-1983.jpg",
          date: "1983",
        },
        {
          name: "Win $ 1’000’000",
          img: "../painters/basquiat/warhol-Basquiat-WIN-s-1984.jpg",
          date: "1984",
        },
        {
          name: "Riding with death",
          img: "../painters/basquiat/basquiat-riding-with-death-1988.jpg",
          date: "1988",
        },
      ],
    },
    {
      artist: "Rembrandt",
      lifePeriod: {
        start: 1606,
        end: 1669,
      },
      img: "../painters/Rembrandt.jpg",
      description:
        "Considéré comme l'un des plus grands peintres de l'histoire de la peinture, notamment de la peinture baroque, et l'un des plus importants peintres de l'École hollandaise du xviie siècle.",
      works: [
        {
          name: "La Leçon d'anatomie du docteur Tulp",
          img: "../painters/rembrandt/La-Lecon-d-anatomie-du-docteur-Tulp.jpg",
          date: "1632",
        },
        {
          name: "La ronde de nuit",
          img: "../painters/rembrandt/la-ronde-de-nuit.jpg",
          date: "1642",
        },
      ],
    },
    {
      artist: "Gustave Courbet",
      lifePeriod: {
        start: 1819,
        end: 1877,
      },
      img: "../painters/Gustave_Courbet.jpg",
      description:
        "Peintre et sculpteur français, chef de file du courant réaliste",
      works: [
        {
          name: "L'origine du monde",
          img: "../painters/courbet/origine-du-monde.jpg",
          date: "1866",
        },
      ],
    },
    {
      artist: "Eugène Delacroix",
      lifePeriod: {
        start: 1798,
        end: 1863,
      },
      img: "../painters/eugene-delacroix.jpg",
      description:
        "Peintre et sculpteur français, chef de file du courant réaliste",
      works: [
        {
          name: "La Liberté guidant le peuple",
          img: "../painters/delacroix/delacroix-liberte-guidant-peuple.jpg",
          date: "1830",
        },
      ],
    },
    {
      artist: "Maurice Denis",
      lifePeriod: {
        start: 1870,
        end: 1943,
      },
      img: "../painters/Maurice_Denis.jpg",
      description: "Postimpressionnisme",
      works: [
        {
          name: "Avril",
          img: "../painters/maurice-denis/traverse-de-la-passion.jpg",
          date: "1892",
        },
        {
          name: "The Offertory at Calvary",
          img: "../painters/maurice-denis/calvary.jpg",
          date: "1890",
        },
        {
          name: "Springtime",
          img: "../painters/maurice-denis/springtime.jpg",
          date: "1894",
        },
      ],
    },
    {
      artist: "Edgar Degas",
      lifePeriod: {
        start: 1834,
        end: 1917,
      },
      img: "../painters/Edgar_Degas.jpg",
      description:
        "Un artiste peintre, graveur, sculpteur et photographe, naturaliste et impressionniste français",
      works: [
        {
          name: "La classe de danse",
          img: "../painters/degas/la-classe-de-dance.jpg",
          date: "1874",
        },
        {
          name: "L'Absinthe",
          img: "../painters/degas/labsinthe.jpg",
          date: "1876",
        },
        {
          name: "La Petite Danseuse de quatorze ans",
          img: "../painters/degas/la-petite-danseuse.jpg",
          date: "1881",
        },
        {
          name: "A Woman Seated beside a Vase of Flowers (Madame Paul Valpinçon)",
          img: "../painters/degas/a-woman-sit-beside.jpg",
          date: "1865",
        },
      ],
    },
    {
      artist: "Camille Pissaro",
      lifePeriod: {
        start: 1830,
        end: 1903,
      },
      img: "../painters/Camille_Pissarro.jpg",
      description:
        "Peintre impressionniste puis néo-impressionniste franco-danois",
      works: [
        {
          name: "Boulevard Montmartre, Effet de nuit",
          img: "../painters/pissarro/montmartre_nuit.jpg",
          date: "1897",
        },
        {
          name: "Boulevard Montmartre, matinée de printemps",
          img: "../painters/pissarro/montmartre_printemps.jpg",
          date: "1897",
        },
        {
          name: "Maison de paysants",
          img: "../painters/pissarro/maison-paysants.jpg",
          date: "1887",
        },
      ],
    },
    {
      artist: "Paul Signac",
      lifePeriod: {
        start: 1863,
        end: 1935,
      },
      img: "../painters/Paul_Signac_1923.jpg",
      description:
        "Artiste peintre paysagiste français, proche du mouvement libertaire2, qui donna naissance au pointillisme, avec le peintre Seurat",
      works: [
        {
          name: "Le Port de La Rochelle",
          img: "../painters/signac/Entree_du_port_de_la_Rochelle.jpg",
          date: "1921",
        },
        {
          name: "Le Port de Saint-Tropez",
          img: "../painters/signac/port-saint-tropez.jpg",
          date: "1899",
        },
      ],
    },
    {
      artist: "Odilon Redon",
      lifePeriod: {
        start: 1840,
        end: 1916,
      },
      img: "../painters/Odilon_Redon.jpg",
      description:
        "peintre et graveur symboliste français. Son art explore les aspects de la pensée, la part sombre et ésotérique de l'âme humaine, empreinte des mécanismes du rêve",
      works: [
        {
          name: "Le cyclope",
          img: "../painters/redon/cyclops.jpg",
          date: "1914",
        },
        {
          name: "Parmis les fleurs",
          img: "../painters/redon/parmis-les-fleurs.jpg",
          date: "1905",
        },
      ],
    },
    {
      artist: "Pierre Bonnard",
      lifePeriod: {
        start: 1867,
        end: 1947,
      },
      img: "../painters/bonnard.jpg",
      description:
        "Issu de la petite bourgeoisie, esprit à la fois modeste et indépendant, il se met très tôt à dessiner et à peindre. Il participe à la fondation du groupe postimpressionniste des nabis, qui entendent exalter les couleurs dans des formes simplifiées. Vénérant toutefois les impressionnistes, Bonnard va tracer son chemin personnel à l'écart des avant-gardes qui suivront : fauvisme, cubisme, surréalisme.",
      works: [
        {
          name: "Après le bain",
          img: "../painters/bonnard/apres-le-bain.jpg",
          date: "1910",
        },
        {
          name: "La salle à manger à la campagne",
          img: "../painters/bonnard/la-salle-a-manger-a-la-campagne.jpg",
          date: "1913",
        },
      ],
    },
    {
      artist: "Alberto Giacometti",
      lifePeriod: {
        start: 1901,
        end: 1966,
      },
      img: "../painters/giacometti.jpg",
      description:
        "Giacometti est l'un des sculpteurs les plus importants du xxe siècle. Son travail est influencé par le cubisme, le surréalisme et les questions philosophiques sur la condition humaine, ainsi que par l'existentialisme et la phénoménologie1. Vers 1935, il abandonne son travail surréaliste pour se consacrer aux « compositions avec personnages ». Entre 1938 et 1944, ses personnages mesurent au maximum sept centimètres2 : ils doivent refléter la distance à laquelle il a vu le modèle.",
      works: [
        {
          name: "Three men walking II",
          img: "../painters/giacometti/three-men-walking-II.jpg",
          date: "1949",
        },
        {
          name: "L'homme au doigt",
          img: "../painters/giacometti/l-homme-au-doigt.jpg",
          date: "1947",
        },
      ],
    },
    {
      artist: "Henri Matisse",
      lifePeriod: {
        start: 1869,
        end: 1954,
      },
      img: "../painters/Henri_Matisse.jpg",
      description:
        "Figure majeure du xxe siècle, son influence sur l'art de la seconde partie de ce siècle est considérable par l'utilisation de la simplification, de la stylisation, de la synthèse et de la couleur comme seul sujet de la peinture, aussi bien pour les nombreux peintres figuratifs ou abstraits qui se réclameront de lui et de ses découvertes. Il fut le chef de file du fauvisme.",
      works: [
        {
          name: "La Joie de vivre",
          img: "../painters/matisse/matisse-bonheur-vivre.jpg",
          date: "1906",
        },
        {
          name: "Nu bleu II",
          img: "../painters/matisse/nu_bleu_2.jpg",
          date: "1952",
        },
        {
          name: "Femme au chapeau",
          img: "../painters/matisse/la_femme_au_chapeau.jpg",
          date: "1905",
        },
        {
          name: "Luxe, Calme et Volupté",
          img: "../painters/matisse/luxe_calme_et_volupte.jpg",
          date: "1904",
        },
        {
          name: "La Danse de Merion",
          img: "../painters/matisse/la_dance_de_merion.jpg",
          date: "1932",
        },
      ],
    },
    {
      artist: "Jackson Pollock",
      lifePeriod: {
        start: 1912,
        end: 1956,
      },
      img: "../painters/jackson-pollock.jpg",
      description:
        "Figure majeure du xxe siècle, son influence sur l'art de la seconde partie de ce siècle est considérable par l'utilisation de la simplification, de la stylisation, de la synthèse et de la couleur comme seul sujet de la peinture, aussi bien pour les nombreux peintres figuratifs ou abstraits qui se réclameront de lui et de ses découvertes. Il fut le chef de file du fauvisme.",
      works: [
        {
          name: "Authumn Rhythm",
          img: "../painters/pollock/autumn_rhythm.jpg",
          date: "1950",
        },
        {
          name: "Number 1",
          img: "../painters/pollock/number_1.jpg",
          date: "1950",
        },
        {
          name: "The Deep",
          img: "../painters/pollock/the_deep.jpg",
          date: "1953",
        },
      ],
    },
    {
      artist: "Piet Mondrian",
      lifePeriod: {
        start: 1872,
        end: 1944,
      },
      img: "../painters/Piet_Mondrian.jpg",
      description:
        "Peintre néerlandais reconnu comme l'un des pionniers de l’abstraction.",
      works: [
        {
          name: "Composition II en rouge, bleu et jaune",
          img: "../painters/mondrian/Composition_en_rouge_jaune_bleu_et_noir.jpg",
          date: "1939",
        },
        {
          name: "Trafalgar Square",
          img: "../painters/mondrian/trafalgar_square.jpg",
          date: "1943",
        },
        {
          name: "Broadway Boogie-Woogie",
          img: "../painters/mondrian/Broadway_Boogie_Woogie.jpg",
          date: "1943",
        },
      ],
    },
    {
      artist: "Joseph Mallord William Turner",
      lifePeriod: {
        start: 1775,
        end: 1851,
      },
      img: "../painters/William-Turner.jpg",
      description:
        "Initialement de la veine romantique anglaise, son œuvre est marquée par une recherche novatrice audacieuse qui le fait considérer, avec son contemporain John Constable, comme un précurseur de l'impressionnisme.",
      works: [
        {
          name: "Le negrier",
          img: "../painters/william-turner/le-negrier.jpg",
          date: "1840",
        },
        {
          name: "Plage calais à marée basse",
          img: "../painters/william-turner/plage-calais-a-maree-basse.jpg",
          date: "1830",
        },
        {
          name: "Pluie, vapeur et vitesse",
          img: "../painters/william-turner/pluie-vapeur-et-vitesse.jpg",
          date: "1844",
        },
        {
          name: "La 5e plaie d'égypte",
          img: "../painters/william-turner/la-cinquieme-plaie-d-egypte.jpg",
          date: "1800",
        },
      ],
    },
    {
      artist: "René Magritte",
      lifePeriod: {
        start: 1898,
        end: 1967,
      },
      img: "../painters/magritte.jpeg",
      description: "Peintre surréaliste belge.",
      works: [
        {
          name: "L'Assassin menacé",
          img: "../painters/magritte/l-assassin-manace.jpg",
          date: "1927",
        },
        {
          name: "La Trahison des images",
          img: "../painters/magritte/la-trahison-des-images.jpg",
          date: "1929",
        },
        {
          name: "Le fils de l'homme",
          img: "../painters/magritte/le-fils-de l-homme.jpg",
          date: "1964",
        },
      ],
    },
    {
      artist: "Fernand Léger",
      lifePeriod: {
        start: 1881,
        end: 1995,
      },
      img: "../painters/leger.jpg",
      description:
        "Peintre français, aussi créateur de cartons de tapisseries et de vitraux, décorateur, céramiste, sculpteur, dessinateur et illustrateur. Il a été l’un des premiers à exposer publiquement des travaux d’orientation cubiste, même si on a parfois qualifié son style de « tubiste ».",
      works: [
        {
          name: "Femme avec un chat",
          img: "../painters/leger/femme-avec-un-chat.jpg",
          date: "1921",
        },
        {
          name: "Les plongeurs",
          img: "../painters/leger/les-plongeurs.jpg",
          date: "1943",
        },
        {
          name: "Les plongeurs bleu et noir",
          img: "../painters/leger/plongeurs-bleu-et-noir.jpg",
          date: "1943",
        },
        {
          name: "Les loisirs sur fond rouge",
          img: "../painters/leger/Les-loisirs-sur-fond-rouge.webp",
          date: "1949",
        },
      ],
    },
    {
      artist: "Jean-Auguste-Dominique Ingres",
      lifePeriod: {
        start: 1780,
        end: 1867,
      },
      img: "../painters/Ingres.jpg",
      description:
        "Peintre français, champion de la doctrine du beau et de la primauté du dessin sur la couleur, en opposition successive aux courants romantiques et réalistes",
      works: [
        {
          name: "Napoléon Ier sur le trône impérial",
          img: "../painters/ingres/napoleone_I_sul_trono_imperiale.jpg",
          date: "1806",
        },
        {
          name: "La grande odalisque",
          img: "../painters/ingres/La_Grande_Odalisque.jpg",
          date: "1814",
        },
        {
          name: "La Vicomtesse d'Haussonville",
          img: "../painters/ingres/Louise_de_Broglie_by_Jean_Auguste_Dominique_Ingres.jpg",
          date: "1845",
        },
      ],
    },
    {
      artist: "Alphonse Mucha",
      lifePeriod: {
        start: 1860,
        end: 1939,
      },
      img: "../painters/mucha.jpg",
      description:
        "Affichiste, illustrateur, graphiste, peintre, et professeur d'art tchécoslovaque.",
      works: [
        {
          name: "Job",
          img: "../painters/mucha/job.jpg",
          date: "1896",
        },
        {
          name: "Daydream",
          img: "../painters/mucha/daydream.jpg",
          date: "1897",
        }
      ],
    },
    {
      artist: "Théodore Géricault",
      lifePeriod: {
        start: 1791,
        end: 1824,
      },
      img: "../painters/gericault.jpg",
      description:
        "Peintre, sculpteur, dessinateur et lithographe français. Incarnation de l’artiste romantique, il a eu une vie courte et tourmentée, qui a donné naissance à de nombreux mythes",
      works: [
        {
          name: "Le Radeau de La Méduse",
          img: "../painters/gericault/le-radeau-de-la-meduse.jpg",
          date: "1818",
        }
      ],
    },
  ];

  public static photographers: Artist[] = [
    {
      artist: "Le couple becher",
      lifePeriod: {
        start: 1931,
        end: 2007,
      },
      img: "../photographers/becher.jpg",
      description:
        "Le travail photographique du couple Becher porte sur des bâtiments industriels (les « typologies ») photographiés selon un protocole extrêmement rigoureux (vue frontale, centrage du sujet, etc.).",
      works: [
        {
          name: "Photographie 8",
          img: "../photographers/becher/Bernd-Hilla-Becher-01.jpg",
        },
        {
          name: "Photographie 9",
          img: "../photographers/becher/Bernd-Hilla-Becher-02.jpg",
        },
      ],
    },
  ];

  public static filmmakers: Artist[] = [
    {
      artist: "Tarantino",
      lifePeriod: {
        start: 1963,
        end: null,
      },
      img: "../filmmakers/tarantino.jpg",
      description: "",
      works: [
        {
          name: "Reservoir Dogs",
          img: "../filmmakers/tarantino/reservoir-dogs.jpeg",
          date: "1992",
        },
        {
          name: "Pulp Fiction",
          img: "../filmmakers/tarantino/pulp-fiction.jpg",
          date: "1994",
        },
        {
          name: "Kill Bill Vol 1 & 2",
          img: "../filmmakers/tarantino/kill-bill.jpeg",
          date: "2003",
        },
        {
          name: "Inglourious Basterds",
          img: "../filmmakers/tarantino/Inglorious-Basterds.jpg",
          date: "2009",
        },
        {
          name: "Once Upon a Time in Hollywood",
          img: "../filmmakers/tarantino/once-apon-a-time-in-hollywood.jpg",
          date: "2019",
        },
      ],
    },
    {
      artist: "Steven Spielberg",
      lifePeriod: {
        start: 1946,
        end: null,
      },
      img: "../filmmakers/steven-spielberg.jpg",
      description: "",
      works: [
        {
          name: "E.T",
          img: "../filmmakers/steven-spielberg/et-extra-terrestrial.jpg",
          date: "1982",
        },
        {
          name: "Jurassic Park",
          img: "../filmmakers/steven-spielberg/jurassic-park.jpg",
          date: "1993",
        },
        {
          name: "Saving Private Ryan",
          img: "../filmmakers/steven-spielberg/saving-private-ryan.jpg",
          date: "1998",
        },
        {
          name: "Raiders of the Lost Ark",
          img: "../filmmakers/steven-spielberg/raiders-of-the-lost-ark.jpg",
          date: "1981",
        },
        {
          name: "Minority Report",
          img: "../filmmakers/steven-spielberg/minority-report.jpg",
          date: "2002",
        },
        {
          name: "Catch Me If You Can",
          img: "../filmmakers/steven-spielberg/catch-me-if-you-can.jpg",
          date: "2002",
        },
      ],
    },
    {
      artist: "Martin Scorsese",
      lifePeriod: {
        start: 1942,
        end: null,
      },
      img: "../filmmakers/Martin_Scorsese.jpg",
      description: "",
      works: [
        {
          name: "Taxi Driver",
          img: "../filmmakers/martin-scorsese/taxi-driver.jpg",
          date: "1976",
        },
        {
          name: "Les Affranchis",
          img: "../filmmakers/martin-scorsese/les-affranchis.png",
          date: "1990",
        },
        {
          name: "Le Loup de Wall Street",
          img: "../filmmakers/martin-scorsese/wolf-of-wall-street.jpg",
          date: "2013",
        },
        {
          name: "Shutter Island",
          img: "../filmmakers/martin-scorsese/shutter-island.png",
          date: "2010",
        },
        {
          name: "Les Infiltrés",
          img: "../filmmakers/martin-scorsese/les-infiltrés.png",
          date: "2006",
        },
      ],
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
          date: "1958",
        },
        {
          name: "North by North-West (La Mort aux trousses)",
          img: "../filmmakers/alfred-hitchcock/north-by-northwest.png",
          date: "1959",
        },
        {
          name: "Psychose",
          img: "../filmmakers/alfred-hitchcock/psychose.jpg",
          date: "1960",
        },
        {
          name: "birds",
          img: "../filmmakers/alfred-hitchcock/birds.jpg",
          date: "1963",
        },
      ],
    },
    {
      artist: "Orson Welles",
      lifePeriod: {
        start: 1915,
        end: 1985,
      },
      img: "../filmmakers/Orson_Welles_1937.jpg",
      description: "Citizen Kane",
      works: [
        {
          name: "Citizen Kane",
          img: "../filmmakers/orson-welles/citizen-kane.jpg",
          date: "1941",
        },
      ],
    },
    {
      artist: "Stanley Kubrick",
      lifePeriod: {
        start: 1928,
        end: 1999,
      },
      img: "../filmmakers/Kubrick.jpg",
      description: "",
      works: [
        {
          name: "Docteur Folamour",
          img: "../filmmakers/stanley-kubrick/docteur-folamour.jpg",
          date: "1964",
        },
        {
          name: "2001 Space odyssey",
          img: "../filmmakers/stanley-kubrick/2001.jpg",
          date: "1968",
        },
        {
          name: "Orange mécanique",
          img: "../filmmakers/stanley-kubrick/orange-mecanique.jpg",
          date: "1971",
        },
        {
          name: "Shining",
          img: "../filmmakers/stanley-kubrick/shining.jpg",
          date: "1980",
        },
        {
          name: "Full Metal Jacket",
          img: "../filmmakers/stanley-kubrick/full-metal-jacket.jpg",
          date: "1987",
        },
      ],
    },
    {
      artist: "Francis Ford Coppola",
      lifePeriod: {
        start: 1939,
        end: null,
      },
      img: "../filmmakers/Francis_Ford_Coppola_2011_CC.jpg",
      description: "",
      works: [
        {
          name: "Apocalypse Now",
          img: "../filmmakers/francis-ford-coppola/apocalypse-now.jpg",
          date: "1979",
        },
      ],
    },
    {
      artist: "Sergio Leone",
      lifePeriod: {
        start: 1929,
        end: 1989,
      },
      img: "../filmmakers/1419367.jpg",
      description: "",
      works: [
        {
          name: "Et pour quelques dollars de plus",
          img: "../filmmakers/sergio-leone/et-pr-qlq-dollars-de-plus.jpg",
          date: "1965",
        },
        {
          name: "Le Bon, la Brute et le Truand",
          img: "../filmmakers/sergio-leone/le-bon-la-brute-et-le-truand.jpg",
          date: "1966",
        },
        {
          name: "Mon nom est Personne",
          img: "../filmmakers/sergio-leone/mon-nom-est-personne.jpg",
          date: "1973",
        },
      ],
    },
    {
      artist: "Woody Allen",
      lifePeriod: {
        start: 1935,
        end: null,
      },
      img: "../filmmakers/woody.jpg",
      description: "",
      works: [
        {
          name: "Escrocs mais pas trop",
          img: "../filmmakers/woody-allen/escrocs_mais_pas_trop.jpg",
          date: "2000",
        },
        {
          name: "Match Point",
          img: "../filmmakers/woody-allen/match_point.png",
          date: "2005",
        },
        {
          name: "Vicky Cristina Barcelona",
          img: "../filmmakers/woody-allen/vicky-cristina-barcelona.jpg",
          date: "2008",
        },
        {
          name: "Whatever Works",
          img: "../filmmakers/woody-allen/whatever-works.jpg",
          date: "2009",
        },
      ],
    },
    {
      artist: "Christopher Nolan",
      lifePeriod: {
        start: 1970,
        end: null,
      },
      img: "../filmmakers/Christopher_Nolan_Cannes_2018.jpg",
      description: "",
      works: [
        {
          name: "Memento",
          img: "../filmmakers/nolan/memento.jpg",
          date: "2000",
        },
        {
          name: "Batman Begins",
          img: "../filmmakers/nolan/batman-begin.jpg",
          date: "2005",
        },
        {
          name: "Le Prestige",
          img: "../filmmakers/nolan/le-prestige.jpg",
          date: "2006",
        },
        {
          name: "Inception",
          img: "../filmmakers/nolan/inception.jpg",
          date: "2010",
        },
        {
          name: "Interstellar",
          img: "../filmmakers/nolan/interstellar.jpg",
          date: "2014",
        },
      ],
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
          date: "1921",
        },
        {
          name: "Les temps modernes",
          img: "../filmmakers/charlie-chaplin/temps-modernes.jpg",
          date: "1936",
        },
      ],
    },
    {
      artist: "Les freres coen",
      lifePeriod: {
        start: 1954,
        end: null,
      },
      img: "../filmmakers/les-coen-pas-tres-kasher,M32465.jpg",
      description: "",
      works: [
        {
          name: "Fargo",
          img: "../filmmakers/coen/fargo.jpg",
          date: "1996",
        },
        {
          name: "The Big Lebowski",
          img: "../filmmakers/coen/lebowski.png",
          date: "1998",
        },
        {
          name: "O'Brother",
          img: "../filmmakers/coen/o-brother.jpg",
          date: "2000",
        },
        {
          name: "No Country for Old Men",
          img: "../filmmakers/coen/no-country-for-old-men.jpg",
          date: "2007",
        },
        {
          name: "Burn After Reading",
          img: "../filmmakers/coen/Burn-After-Reading-furyosa.jpeg",
          date: "2008",
        },
      ],
    },
    {
      artist: "Les soeur Wachowski",
      lifePeriod: {
        start: 1954,
        end: null,
      },
      img: "../filmmakers/Soeurs-Wachowski-620x350.jpg",
      description: "",
      works: [
        {
          name: "Matrix",
          img: "../filmmakers/wachowski/matrix.jpg",
          date: "1999",
        },
      ],
    },
    {
      artist: "Roman Polanski",
      lifePeriod: {
        start: 1933,
        end: null,
      },
      img: "../filmmakers/Roman_Polanski_Cannes_2013.jpg",
      description: "",
      works: [
        {
          name: "Le pianiste",
          img: "../filmmakers/polanski/the-pianist.jpeg",
          date: "1999",
        },
        {
          name: "The Ghost Writer",
          img: "../filmmakers/polanski/the-ghost-writer.jpg",
          date: "2010",
        },
      ],
    },
    {
      artist: "David Lynch",
      lifePeriod: {
        start: 1946,
        end: null,
      },
      img: "../filmmakers/530483.jpg",
      description: "",
      works: [
        {
          name: "Elephant Man",
          img: "../filmmakers/lynch/elephant-man.jpg",
          date: "2080",
        },
        {
          name: "Blue Velvet",
          img: "../filmmakers/lynch/blue-velvet.jpg",
          date: "2086",
        },
        {
          name: "Mulholland Drive",
          img: "../filmmakers/lynch/mulholland-drive.jpg",
          date: "2001",
        },
      ],
    },
    {
      artist: "Xavier Dolan",
      lifePeriod: {
        start: 1989,
        end: null,
      },
      img: "../filmmakers/Xavier_Dolan_Cannes_2016.jpg",
      description: "",
      works: [
        {
          name: "J'ai tué ma mère",
          img: "../filmmakers/dolan/j-ai-tue-ma-mere.jpg",
          date: "2009",
        },
        {
          name: "Laurence Anyways",
          img: "../filmmakers/dolan/laurence-anyways.jpeg",
          date: "2012",
        },
        {
          name: "Mommy",
          img: "../filmmakers/dolan/mommy.jpg",
          date: "2014",
        },
      ],
    },
    {
      artist: "Ridley Scott",
      lifePeriod: {
        start: 1937,
        end: null,
      },
      img: "../filmmakers/Ridley-Scott.jpg",
      description: "",
      works: [
        {
          name: "Alien",
          img: "../filmmakers/ridley-scott/alien.jpg",
          date: "1979",
        },
        {
          name: "Blade Runner",
          img: "../filmmakers/ridley-scott/blade_runner.jpg",
          date: "1982",
        },
      ],
    },
    {
      artist: "David Fincher",
      lifePeriod: {
        start: 1962,
        end: null,
      },
      img: "../filmmakers/fincher.jpg",
      description: "",
      works: [
        {
          name: "Seven",
          img: "../filmmakers/fincher/seven.png",
          date: "1995",
        },
        {
          name: "The Game",
          img: "../filmmakers/fincher/the-game.jpg",
          date: "1997",
        },
        {
          name: "Fight Club",
          img: "../filmmakers/fincher/fight-club.jpg",
          date: "1999",
        },
        {
          name: "The Social Network",
          img: "../filmmakers/fincher/social-network.jpg",
          date: "2010",
        },
        {
          name: "Gone Girl",
          img: "../filmmakers/fincher/gone-girl.jpg",
          date: "2014",
        },
      ],
    },
    {
      artist: "Tim Burton",
      lifePeriod: {
        start: 1958,
        end: null,
      },
      img: "../filmmakers/tim-burton.jpg",
      description: "",
      works: [
        {
          name: "Edward aux mains d'argent",
          img: "../filmmakers/tim-burton/edward-scissorhands.jpg",
          date: "1990",
        },
        {
          name: "Mars Attacks!",
          img: "../filmmakers/tim-burton/mars-attacks.jpg",
          date: "1995",
        },
        {
          name: "Charlie et la Chocolaterie",
          img: "../filmmakers/tim-burton/charlie-et-la-chocolaterie.jpg",
          date: "2005",
        },
      ],
    },
    {
      artist: "Terry Gilliam",
      lifePeriod: {
        start: 1958,
        end: null,
      },
      img: "../filmmakers/terrygilliam.jpg",
      description: "",
      works: [
        {
          name: "Monty Python : Sacré Graal !",
          img: "../filmmakers/terrygilliam/galloping_knights.jpg",
          date: "1975",
        },
        {
          name: "Brazil",
          img: "../filmmakers/terrygilliam/brazil.jpg",
          date: "1985",
        },
      ],
    },
    {
      artist: "Pedro Almodóvar",
      lifePeriod: {
        start: 1949,
        end: null,
      },
      img: "../filmmakers/Almodovar.jpg",
      description: "",
      works: [
        {
          name: "Tout sur ma mère",
          img: "../filmmakers/almodovar/tout-sur-ma-mere.jpg",
          date: "1999",
        },
        {
          name: "Parle avec elle",
          img: "../filmmakers/almodovar/parle-avec-elle.jpg",
          date: "2002",
        },
        {
          name: "Volver",
          img: "../filmmakers/almodovar/volver.jpg",
          date: "2006",
        },
      ],
    },
    {
      artist: "Wes Andrerson",
      lifePeriod: {
        start: 1969,
        end: null,
      },
      img: "../filmmakers/Wes_Anderson.jpg",
      description: "",
      works: [
        {
          name: "Moonrise Kingdom",
          img: "../filmmakers/wes-anderson/moonrisekingdom.png",
          date: "2012",
        },
        {
          name: "The Grand Budapest Hotel",
          img: "../filmmakers/wes-anderson/grand-budapest-hotel.jpg",
          date: "2012",
        },
      ],
    },
    {
      artist: "Paul Thomas Anderson",
      lifePeriod: {
        start: 1970,
        end: null,
      },
      img: "../filmmakers/Paul_Thomas_Anderson.jpg",
      description: "",
      works: [
        {
          name: "Licorice Pizza",
          img: "../filmmakers/pt-anderson/licorice-pizza.jpg",
          date: "2021",
        },
        {
          name: "There will be blood",
          img: "../filmmakers/pt-anderson/there-will-be-blood.jpg",
          date: "2007",
        },
        {
          name: "The Master",
          img: "../filmmakers/pt-anderson/the-master.jpg",
          date: "2012",
        },
      ],
    },
  ];

  public static writers: Artist[] = [
    {
      artist: "Isaac Asimov",
      lifePeriod: {
        start: 1920,
        end: 1992,
      },
      img: "../writers/isaac-asimov.jpg",
      description: "",
      works: [
        {
          name: "Fondation",
          img: "../writers/fondation.jpg",
          date: "1951",
        },
      ],
    },
    {
      artist: "Frank Herbert",
      lifePeriod: {
        start: 1920,
        end: 1986,
      },
      img: "../writers/Frank_Herbert.jpg",
      description: "His son is Brian Herbert",
      works: [
        {
          name: "Dune",
          img: "../writers/Dune_Le_Cycle_de_Dune.jpg",
          date: "1965",
        },
      ],
    },
    {
      artist: "René Barjavel",
      lifePeriod: {
        start: 1911,
        end: 1985,
      },
      img: "../writers/Rene-Barjavel.jpg",
      description: "",
      works: [
        {
          name: "Ravage",
          img: "../writers/Ravage.jpg",
          date: "1943",
        },
        {
          name: "Le voyageur imprudent",
          img: "../writers/Le_Voyageur_imprudent.jpg",
          date: "1944",
        },
        {
          name: "Le grand secret",
          img: "../writers/le-grand-secret.jpg",
          date: "1973",
        },
      ],
    },
    {
      artist: "Stéphane Beauverger",
      lifePeriod: {
        start: 1969,
        end: null,
      },
      img: "../writers/Stéphane_Beauverger.jpg",
      description: "",
      works: [
        {
          name: "Le Déchronologue",
          img: "../writers/Le_Dechronologue.jpg",
          date: "2009",
        },
      ],
    },
    {
      artist: "Alain Damasio",
      lifePeriod: {
        start: 1969,
        end: null,
      },
      img: "../writers/Alain_Damasio.jpg",
      description: "",
      works: [
        {
          name: "La Horde du Contrevent",
          img: "../writers/La_Horde_du_Contrevent.jpg",
          date: "2004",
        },
      ],
    },
    {
      artist: "Stephen King",
      lifePeriod: {
        start: 1947,
        end: null,
      },
      img: "../writers/Stephen_King.jpg",
      description: "",
      works: [
        {
          name: "Différentes Saisons",
          img: "../writers/Differentes_Saisons.jpg",
          date: "1982",
        },
      ],
    },
    {
      artist: "Douglas Adams",
      lifePeriod: {
        start: 1952,
        end: 2001,
      },
      img: "../writers/Douglas_adams.jpg",
      description: "",
      works: [
        {
          name: "Le Guide du voyageur galactique",
          img: "../writers/H2G2_tome_1.jpg",
          date: "1979",
        },
      ],
    },
    {
      artist: "Dan Simmons",
      lifePeriod: {
        start: 1948,
        end: null,
      },
      img: "../writers/AVT_Dan-Simmons_299.jpg",
      description: "",
      works: [
        {
          name: "Hypérion",
          img: "../writers/Hyperion.jpg",
          date: "1989",
        },
      ],
    },
    {
      artist: "Aldous Huxley",
      lifePeriod: {
        start: 1894,
        end: 1963,
      },
      img: "../writers/Aldous_Huxley.jpg",
      description:
        'Ecrit "Le meilleur des mondes" avant 1984 de George Orwell (1949)',
      works: [
        {
          name: "Le meilleur des mondes",
          img: "../writers/Le_Meilleur_des_mondes.jpg",
          date: "1931",
        },
      ],
    },
    {
      artist: "Philip K.Dick",
      lifePeriod: {
        start: 1928,
        end: 1982,
      },
      img: "../writers/Philip_K_Dick.jpg",
      description: "",
      works: [
        {
          name: "Ubik",
          img: "../writers/Ubik.jpg",
          date: "1969",
        },
      ],
    },
    {
      artist: "Pierre Lemaitre",
      lifePeriod: {
        start: 1951,
        end: null,
      },
      img: "../writers/Lemaitre_Pierre.png",
      description: "",
      works: [
        {
          name: "Au revoir là-haut",
          img: "../writers/Au_revoir_la_haut.jpg",
          date: "2013",
        },
      ],
    },
    {
      artist: "William Golding",
      lifePeriod: {
        start: 1911,
        end: 1993,
      },
      img: "../writers/William_Golding_1983.jpg",
      description: "",
      works: [
        {
          name: "Sa Majesté des mouches",
          img: "../writers/samajestedesmouches.jpg",
          date: "1954",
        },
      ],
    },
    {
      artist: "Ernest Hemingway",
      lifePeriod: {
        start: 1899,
        end: 1961,
      },
      img: "../writers/ernest-hemingway.jpg",
      description: "",
      works: [
        {
          name: "Le viel homme et la mer",
          img: "../writers/Le-vieil-homme-et-la-mer.jpg",
          date: "1952",
        },
      ],
    },
    {
      artist: "Milan Kundera",
      lifePeriod: {
        start: 1929,
        end: 1981,
      },
      img: "../writers/kundera.jpg",
      description: "",
      works: [
        {
          name: "L'Insoutenable Légèreté de l'être",
          img: "../writers/L_Insoutenable_Legerete_de_l_etre.jpg",
          date: "1984",
        },
      ],
    },
    {
      artist: "Alexandre Dumas",
      lifePeriod: {
        start: 1802,
        end: 1870,
      },
      img: "../writers/dumas.jpg",
      description: "",
      works: [
        {
          name: "Le comte de Monte-Cristo",
          img: "../writers/Le-comte-de-monte-cristo.jpg",
          date: "1844",
        },
        {
          name: "Les trois mousquetaires",
          img: "../writers/3musketeers.jpg",
          date: "1844",
        },
      ],
    },
    {
      artist: "Michael Crichton",
      lifePeriod: {
        start: 1942,
        end: 2008,
      },
      img: "../writers/crichton.jpg",
      description: "",
      works: [
        {
          name: "Sphère",
          img: "../writers/Sphere.jpg",
          date: "1987",
        },
      ],
    },
    {
      artist: "Victor Hugo",
      lifePeriod: {
        start: 1802,
        end: 1885,
      },
      img: "../writers/victor-hugo.jpg",
      description: "",
      works: [
        {
          name: "Les misérables",
          img: "../writers/les-misérables.jpg",
          date: "1862",
        },
        {
          name: "Notre Dame de paris",
          img: "../writers/notre_dame_de_paris.jpg",
          date: "1831",
        },
      ],
    },
    {
      artist: "Honoré de Balzac",
      lifePeriod: {
        start: 1799,
        end: 1850,
      },
      img: "../writers/balzac.jpg",
      description: "Auteur des Rougon-Macquart",
      works: [
        {
          name: "Le Père Goriot",
          img: "../writers/le-pere-goriot.jpg",
          date: "1835",
        },
        {
          name: "Illusions perdues",
          img: "../writers/illusions-perdues.jpg",
          date: "1837",
        },
        {
          name: "La Peau de chagrin",
          img: "../writers/la-peau-de-chagrin.jpg",
          date: "1831",
        },
        {
          name: "Eugénie Grandet",
          img: "../writers/eugenie-grandet.jpg",
          date: "1833",
        },
      ],
    },
    {
      artist: "Émile Zola",
      lifePeriod: {
        start: 1840,
        end: 1902,
      },
      img: "../writers/zola.jpg",
      description: "Auteur des Rougon-Macquart",
      works: [
        {
          name: "Germinal",
          img: "../writers/germinal.jpg",
          date: "1885",
        },
        {
          name: "Nana",
          img: "../writers/nana.jpg",
          date: "1880",
        },
        {
          name: "L'assommoir",
          img: "../writers/l-assommoir.jpg",
          date: "1887",
        },
      ],
    },
    {
      artist: "Gustave Flaubert",
      lifePeriod: {
        start: 1821,
        end: 1980,
      },
      img: "../writers/flaubert.jpg",
      description: "",
      works: [
        {
          name: "Madame Bovary",
          img: "../writers/madame-bovary.jpg",
          date: "1856",
        },
        {
          name: "L'Éducation sentimentale",
          img: "../writers/l-education-sentimentale.jpg",
          date: "1869",
        },
      ],
    },
    {
      artist: "Guy de Maupassant",
      lifePeriod: {
        start: 1850,
        end: 1893,
      },
      img: "../writers/Maupassant.jpg",
      description: "",
      works: [
        {
          name: "Bel ami",
          img: "../writers/Bel-Ami.jpg",
          date: "1885",
        },
        {
          name: "Boule de suif",
          img: "../writers/boule-de-suif.jpg",
          date: "1880",
        },
      ],
    },
    {
      artist: "Emily Brontë",
      lifePeriod: {
        start: 1818,
        end: 1848,
      },
      img: "../writers/bronte.jpg",
      description: "",
      works: [
        {
          name: "Les Hauts de Hurlevent",
          img: "../writers/leo-de-hurlevent.jpg",
          date: "1847",
        },
      ],
    },
  ];

  public static formulas: LightTimeLineElement[] = [
    {
      name: "Théorème de Pythagore",
      date: "6000 av J.C",
      img: "../maths/pythagore.png",
    },
    {
      name: "Théorème de Thalès",
      date: "2000 av J.C",
      img: "../maths/thales.png",
    },
    {
      name: "Coefficient Binomial",
      date: "1713",
      img: "../maths/Coefficient_binomial.svg",
    },
    {
      name: "Loi binomiale",
      date: "1713",
      img: "../maths/loibinomial.svg",
      text: "les lois binomiales modélisent le nombre de succès obtenus lors de la répétition indépendante de plusieurs expériences aléatoires identiques.",
    },
    {
      name: "Somme premiers nombres",
      date: "1700",
      img: "../maths/somme-premiers-nombre.PNG",
      text: "Gauss aurait sortie la formule okl quand son prof l'a punis en lui demandant de calculer la somme des premiers nombres de 1 à 100",
    },
    {
      name: "Equilibre de Nash",
      date: "1700",
      img: "../maths/nash.PNG",
      text: "En théorie des jeux, un équilibre de Nash est une situation où : 1/ Chaque joueur prévoit correctement le choix des autres, 2/ Chaque joueur maximise son gain, compte tenu de cette prévision.",
    },
  ];

  public static history: Periods[] = [
    {
      name: "Égypte ancienne",
      start: -3150,
      end: -31,
      events: [],
    },
    {
      name: "Grèce antique",
      start: -776,
      end: -323,
      events: [
        {
          name: "Premier J-O",
          date: -776,
        },
        {
          name: "La Guerre du Péloponnèse",
          text: "la guerre éclate entre Athènes et Sparte, soutenues par leurs alliés respectifs. Sparte a enfin construit une flotte (avec l'aide des Perses) capable de rivaliser avec la suprématie maritime athénienne, et trouvé en Lysandre un brillant chef militaire, qui occupera l'Hellespont, passage stratégique pour l'approvisionnement en blé d'Athènes. Menacée de famine, Athènes envoie ses derniers navires contre Lysandre, qui les défait définitivement à Aigos Potamos en 405. Sa flotte perdue, Athènes est au bord de la banqueroute. En 404, Athènes demande la paix, et Sparte dicte de dures conditions : Athènes perd ses murailles, sa flotte, et toutes ses possessions outre-mer. Le parti anti-démocratique, soutenu par Sparte, prend le pouvoir.",
          date: -431,
          start: -431,
          end: -405,
        },
        {
          name: "Alexandre le grand",
          images: [
            "https://fr.wikipedia.org/wiki/Histoire_de_la_Gr%C3%A8ce_antique#/media/Fichier:MacedonEmpire.jpg",
          ],
          text: "Fils de Philippe II, élève d'Aristote et roi de Macédoine à partir de 336, il devient l'un des plus grands conquérants de l'histoire en prenant possession de l'immense empire perse et en s'avançant jusqu'aux rives de l'Indus.",
          date: -356,
          start: -356,
          end: -323,
        },
      ],
    },
  ];

  public static frenchCities: LightTimeLineElement[] = [
    { name: "Angers", img: "../geographie/villes/Angers.jpg" },
    { name: "Bordeaux", img: "../geographie/villes/Bordeaux.jpg" },
    {
      name: "Clermont-Ferrand",
      img: "../geographie/villes/Clermont-Ferrand.jpg",
    },
    { name: "Dijon", img: "../geographie/villes/Dijon.jpg" },
    { name: "Grenoble", img: "../geographie/villes/Grenoble.jpg" },
    { name: "La Rochelle", img: "../geographie/villes/la-rochelle.jpg" },
    { name: "Le Havre", img: "../geographie/villes/Le-Havre.jpg" },
    { name: "Le Mans", img: "../geographie/villes/Le-Mans.jpg" },
    { name: "Lille", img: "../geographie/villes/Lille.jpg" },
    { name: "Lyon", img: "../geographie/villes/Lyon.jpg" },
    { name: "Marseille", img: "../geographie/villes/marseille.jpg" },
    { name: "Montpellier", img: "../geographie/villes/Montpellier.jpg" },
    { name: "Nantes", img: "../geographie/villes/Nantes.jpg" },
    { name: "Nice", img: "../geographie/villes/Nice.jpg" },
    { name: "Nimes", img: "../geographie/villes/Nimes.jpg" },
    { name: "Paris", img: "../geographie/villes/Paris.jpg" },
    { name: "Reims", img: "../geographie/villes/Reims.jpg" },
    { name: "Rennes", img: "../geographie/villes/Rennes.jpg" },
    { name: "Saint-Etienne", img: "../geographie/villes/Saint-Etienne.jpg" },
    { name: "Strasbourg", img: "../geographie/villes/Strasbourg.jpg" },
    { name: "Toulon", img: "../geographie/villes/Toulon.jpg" },
    { name: "Toulouse", img: "../geographie/villes/Toulouse.jpg" },
    { name: "Tours", img: "../geographie/villes/Tours.jpg" },
  ];

  public static frenchRegions: LightTimeLineElement[] = [
    {
      name: "Auvergne Rhone-Alpes",
      img: "../geographie/regions/Auvergne-Rhone-Alpes.png",
    },
    {
      name: "Bourgogne Franche-Comté",
      img: "../geographie/regions/Bourgogne-Franche-Comte.png",
    },
    { name: "Bretagne", img: "../geographie/regions/bretagne.png" },
    {
      name: "Centre-Val de Loire",
      img: "../geographie/regions/Centre-Val_de_Loire.png",
    },
    { name: "Grand-Est", img: "../geographie/regions/Grand-Est.png" },
    {
      name: "Hauts de France",
      img: "../geographie/regions/Hauts-de-France.png",
    },
    { name: "Île-de-France", img: "../geographie/regions/Ile-de-France.svg" },
    { name: "Normandie", img: "../geographie/regions/normandie.svg" },
    {
      name: "Nouvelle Aquitaine",
      img: "../geographie/regions/Nouvelle-Aquitaine.png",
    },
    { name: "Occitanie", img: "../geographie/regions/Occitanie.png" },
    {
      name: "Pays de la Loire",
      img: "../geographie/regions/Pays_de_la_Loire.png",
    },
    {
      name: "Provence-Alpes Côte d'Azur",
      img: "../geographie/regions/Provence-Alpes-Cote_d_Azur.png",
    },
  ];

  public static rivers: LightTimeLineElement[] = [
    { name: "La Charente", img: "../geographie/fleuves/charente.png" },
    { name: "La Dordogne", img: "../geographie/fleuves/dordogne.png" },
    { name: "La Garonne", img: "../geographie/fleuves/garonne.png" },
    { name: "La Loire", img: "../geographie/fleuves/loire.png" },
    { name: "Le Lot", img: "../geographie/fleuves/Lot.png" },
    { name: "La Marne", img: "../geographie/fleuves/marne.png" },
    { name: "La Meuse", img: "../geographie/fleuves/meuse.png" },
    { name: "La Moselle", img: "../geographie/fleuves/moselle.png" },
    { name: "Le Rhin", img: "../geographie/fleuves/rhin.png" },
    { name: "Le Rhone", img: "../geographie/fleuves/rhone.png" },
    { name: "La Seine", img: "../geographie/fleuves/seine.png" },
  ];

  public static frenchDepartements: LightTimeLineElement[] = [
    { name: "Ain", img: "../geographie/departements/Ain.png" },
    { name: "Aisne", img: "../geographie/departements/Aisne.png" },
    { name: "Allier", img: "../geographie/departements/Allier.png" },
    {
      name: "Alpes-de-Haute-Provence",
      img: "../geographie/departements/Alpes-de-Haute-Provence.png",
    },
    { name: "Ardèche", img: "../geographie/departements/Ardèche.png" },
    { name: "Ardennes", img: "../geographie/departements/Ardennes.png" },
    { name: "Ariège", img: "../geographie/departements/Ariège.png" },
    { name: "Aube", img: "../geographie/departements/Aube.png" },
    { name: "Aude", img: "../geographie/departements/Aude.png" },
    { name: "Aveyron", img: "../geographie/departements/Aveyron.png" },
    { name: "Bas-Rhin", img: "../geographie/departements/Bas-Rhin.png" },
    {
      name: "Bouches-du-Rhône",
      img: "../geographie/departements/Bouches-du-Rhône.png",
    },
    { name: "Calvados", img: "../geographie/departements/Calvados.png" },
    { name: "Cantal", img: "../geographie/departements/Cantal.png" },
    { name: "Charente", img: "../geographie/departements/Charente.png" },
    {
      name: "Charente-Maritime",
      img: "../geographie/departements/Charente-Maritime.png",
    },
    { name: "Cher", img: "../geographie/departements/Cher.png" },
    { name: "Corrèze", img: "../geographie/departements/Corrèze.png" },
    { name: "Corse", img: "../geographie/departements/Corse.png" },
    { name: "Côte d'Or", img: "../geographie/departements/Cote-d-Or.png" },
    {
      name: "Côtes d'Armor",
      img: "../geographie/departements/Cotes-d-Armor.png",
    },
    { name: "Creuse", img: "../geographie/departements/Creuse.png" },
    { name: "Deux Sèvres", img: "../geographie/departements/Deux-Sèvres.png" },
    { name: "Dordogne", img: "../geographie/departements/Dordogne.png" },
    { name: "Doubs", img: "../geographie/departements/Doubs.png" },
    { name: "Drome", img: "../geographie/departements/Drome.png" },
    { name: "Eure", img: "../geographie/departements/Eure.png" },
    {
      name: "Eure-et-Loir",
      img: "../geographie/departements/Eure-et-Loir.png",
    },
    { name: "Finistère", img: "../geographie/departements/Finistère.png" },
    { name: "Gard", img: "../geographie/departements/Gard.png" },
    { name: "Gers", img: "../geographie/departements/Gers.png" },
    { name: "Gironde", img: "../geographie/departements/Gironde.png" },
    {
      name: "Haute-Garonne",
      img: "../geographie/departements/Haute-Garonne.png",
    },
    { name: "Haute-Loire", img: "../geographie/departements/Haute-Loire.png" },
    { name: "Haute-Marne", img: "../geographie/departements/Haute-Marne.png" },
    {
      name: "Hautes-Alpes",
      img: "../geographie/departements/Hautes-Alpes.png",
    },
    { name: "Haute-Saône", img: "../geographie/departements/Haute-Saône.png" },
    {
      name: "Hautes-Pyrénées",
      img: "../geographie/departements/Hautes-Pyrenees.png",
    },
    {
      name: "Haute-Vienne",
      img: "../geographie/departements/Haute-Vienne.png",
    },
    { name: "Haut-Rhin", img: "../geographie/departements/Haut-Rhin.png" },
    { name: "Hérault", img: "../geographie/departements/Hérault.png" },
    {
      name: "Ille-et-Vilaine",
      img: "../geographie/departements/Ille-et-Vilaine.png",
    },
    { name: "Indre", img: "../geographie/departements/Indre.png" },
    {
      name: "Indre-et-Loire (ou Touraine)",
      img: "../geographie/departements/Indre-et-Loire-ou-Touraine.png",
    },
    { name: "Isère", img: "../geographie/departements/Isère.png" },
    { name: "Jura", img: "../geographie/departements/Jura.png" },
    { name: "Landes", img: "../geographie/departements/Landes.png" },
    { name: "Loire", img: "../geographie/departements/Loire.png" },
    {
      name: "Loire-Atlantique",
      img: "../geographie/departements/Loire-Atlantique.png",
    },
    { name: "Loiret", img: "../geographie/departements/Loiret.png" },
    {
      name: "Loir-et-Cher",
      img: "../geographie/departements/Loir-et-Cher.png",
    },
    { name: "Lot", img: "../geographie/departements/Lot.png" },
    {
      name: "Lot-et-Garonne",
      img: "../geographie/departements/Lot-et-Garonne.png",
    },
    { name: "Lozère", img: "../geographie/departements/Lozere.png" },
    {
      name: "Maine-et-Loire",
      img: "../geographie/departements/Maine-et-Loire.png",
    },
    { name: "Manche", img: "../geographie/departements/Manche.png" },
    { name: "Marne", img: "../geographie/departements/Marne.png" },
    { name: "Mayenne", img: "../geographie/departements/Mayenne.png" },
    { name: "Meuse", img: "../geographie/departements/Meuse.png" },
    { name: "Morbihan", img: "../geographie/departements/Morbihan.png" },
    { name: "Moselle", img: "../geographie/departements/Moselle.png" },
    { name: "Nièvre", img: "../geographie/departements/Nièvre.png" },
    { name: "Nord", img: "../geographie/departements/Nord.png" },
    { name: "Oise", img: "../geographie/departements/Oise.png" },
    { name: "Orne", img: "../geographie/departements/Orne.png" },
    {
      name: "Pas-de-Calais",
      img: "../geographie/departements/Pas-de-Calais.png",
    },
    { name: "Puy-de-Dôme", img: "../geographie/departements/Puy-de-Dôme.png" },
    {
      name: "Pyrenees-Atlantiques",
      img: "../geographie/departements/Pyrenees-Atlantiques.png",
    },
    {
      name: "Pyrenees-Orientales",
      img: "../geographie/departements/Pyrenees-Orientales-.png",
    },
    {
      name: "Saône-et-Loire",
      img: "../geographie/departements/Saône-et-Loire.png",
    },
    { name: "Sarthe", img: "../geographie/departements/Sarthe.png" },
    {
      name: "Seine-et-Marne",
      img: "../geographie/departements/Seine-et-Marne.png",
    },
    {
      name: "Seine-Maritime",
      img: "../geographie/departements/Seine-Maritime.png",
    },
    { name: "Somme", img: "../geographie/departements/Somme.png" },
    { name: "Tarn", img: "../geographie/departements/Tarn.png" },
    { name: "Var", img: "../geographie/departements/Var.png" },
    { name: "Vendée", img: "../geographie/departements/Vendée.png" },
    { name: "Vienne", img: "../geographie/departements/Vienne.png" },
    { name: "Vosges", img: "../geographie/departements/Vosges.png" },
    { name: "Yonne", img: "../geographie/departements/Yonne.png" },
  ];
}

export type LightTimeLineElement = {
  name: string;
  date?: string;
  img: string;
  text?: string;
};

export type Periods = {
  name: string;
  text?: string;
  start: number;
  end: number;
  events: Event[];
};

export type Event = {
  name: string;
  text?: string;
  date: number;
  start?: number;
  end?: number;
  images?: string[];
};
