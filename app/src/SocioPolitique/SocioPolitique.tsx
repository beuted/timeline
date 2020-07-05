import React from 'react';
import { Catalog } from '../Catalog';
import './SocioPolitique.scss';

type Props = {}

export default function SocioPolitique(props: Props) {
  // Sort by birth
  Catalog.formulas.sort((x, y) => x.date - y.date)
  return (
    <div className="container">
      <header className="app-header">
        Notes sur des livres et pensées socio-politiques
      </header>

      <div className="article">
        <h1>Emanuel Todd - Après la démocratie</h1>
        <img src="../sociopolitique/apres-la-democratie.jpg" alt="apres-la-democratie"/>
        <div>
          <h2>Vide Idéologique et Religieux</h2>
          <p>L'effondrement du catholicisme puis du PCF à laisser un vide idéologique en France. La gauche glisse à droite en commençant par le programme de Ségolene Royale
            qui doit avoir une composante identitaire car elle perd l'élection (Hymne chanté dans les écoles). Sarkozy vole les électeurs FN et nomme des socialistes au
            gouvernement affaiblissant la gauche. Plus de catholicisme = absence d'"ennemis" pour les idéologies (communisme) = Effondrement de celles-ci. Il faut trouver un
            nouvel ennemi donc l'islamophobie succède à l'arabophobie</p>
        </div>
        <div>
          <h2>Stagnation éducative et pessimisme culturel</h2>
          <p>Sarkozy et son gouvernement ne sont pas passé par l'ENA, niveau scolaire médiocre. Gouvernement pas cultivé = absence de programme. Il n'y a pas de baisse
            de l'éducation en France mais une stagnation. On a vu que ce qui entraîne un optimisme culturel c'est la progression de l'éducation, la stagnation entraîne
            un pessimisme. La télévision est peut-êtr eun facteur de cette stagnation.
          </p>
        </div>
        <div>
          <h2>De la Démocratie à l'Oligarchie</h2>
          <p>Population structurellement mécontente des élites. Les grande révolution ont été permise par un taux d'alphabétisation de plus de 50% (Laurence Stone).
            Une alphabétisation primaire entraîne la démocratie mais aussi l'introspection, l'anxiété et l'adhésion de masse à des idéologies pour combler cette anxiété,
            et donc donne des parties politiques puissants.
          </p>
          <p>Mais après mai 68 la société se divise ne instruits primaires et instruits secondaires (CSP+). Il y a de plus en plu sde BAC+2 qui forme une "élite de masse".
            Le monde "supérieur" peut pour la 1ere fois vivre en vase clos, et on s'identifie de plus en plus par son métier (non plus sa religion ou son idéologie).
            Avant l'élite était consciente de sa position et acceptait la communauté, maintenant l'"élite de masse" est narcissique, préoccupé d'elle même.
          </p>
        </div>
        <div>
          <h2>Les français et l'égalité</h2>
          <p>En Angleterre l'héritage est disposé comme les parents ke souhaite. En France il est réparti à pars égales. La France a l'égalité dans sa doctrine, pas l'Angleterre, ni les USA
            ou l'Allemagne. Ces pays sont plus à même d'accepter une dualité bourgeois / prolétaires. Il existe un lien entre la façon de voir la famille et la politique d'un pays.
          </p>
          <p>En France cette égalité s'estompe et le FN apparaît en partie stable, (la France est alors la risée de l'Europe!) à la fois inégalitarisme anti-maghrébin et
            égalitarisme anti-élite.
          </p>
          <p>Aux USA l'égalitarisme "entre blancs" s'est construit en rejet des noirs, indiens, chinois ... A Athène c'était citoyen vs esclaves et pendant l'Allemagne nazi la nuit
            du 4 août fut une révolution qui permis aux paysants, ouvrier et bourgeois de s'asseoir fraternellement aux cantines SS construit en rejet des juifs.
            Petit à petit ces "démocraties ethnique" se passent de discrimination (find e l'Apartheid...) Une seule vraie démocratie ethnique perdure, l'Israël.
            En France la démocratie s'est construite contre l'aristocratie nationale et supérieure (pas contre un étranger inferieur)
          </p>
          <p>Les émeutes des banlieues ont participé à faire élire Sarkozy mais c'était une émeute plus générationnelle qu'ethnique quand on regarde les statistiques. Le 15 février
            Sarkozy avait 30% des intentions de vote, le 7 mars 26 % puis il y a la création du ministère de l'immigration et de l'identité nationale le 22 mars Sarkozy égalise avec
            Ségolène Royale. 43% des électeurs de Sarkozy disent avoir été influencés par les émeutes gare du nord. (Qui coïncide étrangement au 2em tour nous dit Todd un peu complotiste)
            La création du ministère de l'identité national, le rejet des Turcs dans l'Europe, tout semble bien orchetré pour l'élection de Sarkozy.
          </p>
        </div>
        <div>
          <h2>Le libre échange contre la démocratie</h2>
          <p>Le protectionnisme peut ne pas être associé au populisme (Discours politique s'adressant aux classes populaires, fondé sur la critique du système et de ses représentants.)
          </p>
          <p>L'essor de la chine vient perturber l'équilibre du libre échange mondiale et les grandes puissances actuelles vont perdre en capital dans le système actuel. Le
            libre échange cause une augmentation des inégalités mondiales à l'échelle du pays. Dans une économie globale, l'idée d'augmenter les salaires de ses employés pour les faire
            consommer son produit (Fordisme) ne tient plus. Les salaires sont donc vu comme un coût pur.
          </p>
          <p>53% des français sont favorables au protectionnisme, 31% défavorable 16% sans opinions. Mais les socialistes sont pour le libre échange comme la doite (En particulier Strauss-Khan
            directeur du Fond monétaire international)</p>
        </div>

        <div>
          <h2>Lutte des classes ?</h2>
          <p>Le mouvement de contestation politique contr ele libéralisme progresse de bas en haut dans les classes sociales. La raison données est qu'initialement c'est les ouvriers
            qui ont été privés de leurs usines mais maintenant c'est les développeurs qui sont outsourcé en Inde. (mouais...)
          </p>
          <p>On observe chiffre à l'appuie, que depuis 1998 les inégalités se creusent en France entre la population et les 1%. Mais elles se creusent aussi au sein des 1%! Ca explique
            peut être pourquoi les dirigeants sont une classe sans conscience de groupe et sans projet.
            Avant les chefs d'entreprise étaient philanthropes mais maintenant ils n'ont plus ce but. Et comme l'argent n'élève pas la condition humaine ils sont frustrés et sans but.
            Ils demandent alors des réduction d'impôts et recherche désormais le pouvoir.
          </p>
          <p>Il faut traiter l'écologie de manière globalisée. En continuant d'exploiter des travailleurs en Chine l'Europe a délocalisé sa pollution.</p>
        </div>
        <div>
          <h2>Après la démocratie</h2>
          <p>Le libéralisme implique de laisser tourner la machine économique selon ses propres règles et permet une absence de programme économique pour les politique ce
            qui peut expliquer la montée du populisme
          </p>
        </div>
        <div>
          <h2>Conclusion</h2>
          <p>Il est nécessaire que l'espace politique, économique et sociales soit les même. Donc soit on créé un gouvernement planétaire soit en réduit l'espace économique à l'Europe.
            On peut faire du protectionnisme Européen car l'Europe a une industrie (contrairement aux USA)
          </p>
          <p>La solution de Todd est la suivante:</p>
          <p>Il faut admettre que l'Allemagne est le coeur industriel de l'Europe et arrèter de prétendre que la France peut protégé quoi
            que ce soit toute seule.</p>
          <p>Il faut faire comprendre à l'Allemagne qu'elle a plus à gagner à la relance de la demande intérieure européenne qu'à la poursuite indéfinie de la
            demande extérieure Chinoise ou mondiale.</p>
          <p>Faire pression en lui disant que si elle refuse la France devra exercer le protectionnisme seule entraînant la chute de l'Europe puisqu'elle serait suivie de son départ
            de l'Europe par l'Italie. L'Allemagne sera forcée de choisir le protectionnisme Européen.
          </p>
          <p>La Chine acceptera car elle ne peut se passer de l'industrie Européenne (Airbus ou centrale nucléaire) Elle ne peut se permettre de tomber en dépendance technologique du
            Japon ou des USA</p>
        </div>
      </div>
    </div>
  );
}