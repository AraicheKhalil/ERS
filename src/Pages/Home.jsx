import DataTable from "@/components/DataTable"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs"




const AdministrateursEmployees = [
  {
    "CIN": "HH12477",
    "NomEtPrenom": "Sophie Martin",
    "Grade": "Ingénieur en informatique",
    "dateNaissance": "1985-03-14",
    "DateRecrutement": "2010-09-01",
    "Echelle": "11",
    "DateEchelle": "2018-01-15",
    "Echelon": "3",
    "DateEchelon": "2020-07-01",
    "Indice": "670",
    "Mutuelle": "Mutuelle Générale",
    "DiplomeSpecialité": "Master en génie logiciel",
    "SituationAdministrative": "En activité",
    "Affectation": "Département IT, Siège Social",
    "TraitementDossier": "En cours d'examen",
    "DateRetraité": "2045-03-14"
  },
  {
    "CIN": "HH12789",
    "NomEtPrenom": "Jean Dupont",
    "Grade": "Chef de projet",
    "dateNaissance": "1978-06-25",
    "DateRecrutement": "2005-04-18",
    "Echelle": "12",
    "DateEchelle": "2015-11-23",
    "Echelon": "4",
    "DateEchelon": "2018-09-15",
    "Indice": "710",
    "Mutuelle": "Mutuelle des Cadres",
    "DiplomeSpecialité": "MBA en gestion de projet",
    "SituationAdministrative": "En activité",
    "Affectation": "Département Projets, Bureau Régional",
    "TraitementDossier": "Validé",
    "DateRetraité": "2038-06-25"
  },
  {
    "CIN": "HH12856",
    "NomEtPrenom": "Marie Leblanc",
    "Grade": "Responsable RH",
    "dateNaissance": "1980-09-12",
    "DateRecrutement": "2008-03-10",
    "Echelle": "10",
    "DateEchelle": "2016-08-20",
    "Echelon": "2",
    "DateEchelon": "2019-05-07",
    "Indice": "630",
    "Mutuelle": "Mutuelle Santé Plus",
    "DiplomeSpecialité": "Master en ressources humaines",
    "SituationAdministrative": "En activité",
    "Affectation": "Département RH, Siège Social",
    "TraitementDossier": "En cours de traitement",
    "DateRetraité": "2040-09-12"
  },
  {
    "CIN": "HH12945",
    "NomEtPrenom": "Pierre Durand",
    "Grade": "Technicien supérieur",
    "dateNaissance": "1990-01-30",
    "DateRecrutement": "2015-05-20",
    "Echelle": "9",
    "DateEchelle": "2020-12-01",
    "Echelon": "1",
    "DateEchelon": "2021-03-15",
    "Indice": "580",
    "Mutuelle": "Mutuelle des Techniciens",
    "DiplomeSpecialité": "DUT en électronique",
    "SituationAdministrative": "En activité",
    "Affectation": "Département Maintenance, Siège Social",
    "TraitementDossier": "En attente",
    "DateRetraité": "2055-01-30"
  },
  {
    "CIN": "HH12354",
    "NomEtPrenom": "Laura Petit",
    "Grade": "Analyste financier",
    "dateNaissance": "1988-04-22",
    "DateRecrutement": "2012-11-05",
    "Echelle": "11",
    "DateEchelle": "2019-06-18",
    "Echelon": "3",
    "DateEchelon": "2021-11-30",
    "Indice": "665",
    "Mutuelle": "Mutuelle Financière",
    "DiplomeSpecialité": "Master en finance",
    "SituationAdministrative": "En activité",
    "Affectation": "Département Finance, Siège Social",
    "TraitementDossier": "Complété",
    "DateRetraité": "2048-04-22"
  },
  {
    "CIN": "HH12543",
    "NomEtPrenom": "Lucas Bernard",
    "Grade": "Ingénieur réseau",
    "dateNaissance": "1992-07-14",
    "DateRecrutement": "2016-02-29",
    "Echelle": "10",
    "DateEchelle": "2021-04-10",
    "Echelon": "2",
    "DateEchelon": "2023-10-01",
    "Indice": "645",
    "Mutuelle": "Mutuelle Tech",
    "DiplomeSpecialité": "Master en réseaux et télécommunications",
    "SituationAdministrative": "En activité",
    "Affectation": "Département IT, Bureau Régional",
    "TraitementDossier": "En cours d'examen",
    "DateRetraité": "2052-07-14"
  },
  {
    "CIN": "HH12678",
    "NomEtPrenom": "Emma Dubois",
    "Grade": "Assistante administrative",
    "dateNaissance": "1995-12-05",
    "DateRecrutement": "2018-07-15",
    "Echelle": "8",
    "DateEchelle": "2023-01-10",
    "Echelon": "1",
    "DateEchelon": "2024-02-20",
    "Indice": "560",
    "Mutuelle": "Mutuelle Administratives",
    "DiplomeSpecialité": "BTS en gestion administrative",
    "SituationAdministrative": "En activité",
    "Affectation": "Département Administration, Siège Social",
    "TraitementDossier": "En attente",
    "DateRetraité": "2060-12-05"
  },
  {
    "CIN": "HH12987",
    "NomEtPrenom": "Antoine Lefèvre",
    "Grade": "Développeur web",
    "dateNaissance": "1993-11-02",
    "DateRecrutement": "2017-09-25",
    "Echelle": "9",
    "DateEchelle": "2020-10-05",
    "Echelon": "1",
    "DateEchelon": "2022-12-12",
    "Indice": "590",
    "Mutuelle": "Mutuelle Web",
    "DiplomeSpecialité": "Licence en informatique",
    "SituationAdministrative": "En activité",
    "Affectation": "Département IT, Siège Social",
    "TraitementDossier": "En cours de validation",
    "DateRetraité": "2058-11-02"
  }
]

const redacteursEmployees = [
  {
    "CIN": "HH12543",
    "NomEtPrenom": "Lucas Bernard",
    "Grade": "Ingénieur réseau",
    "dateNaissance": "1992-07-14",
    "DateRecrutement": "2016-02-29",
    "Echelle": "10",
    "DateEchelle": "2021-04-10",
    "Echelon": "2",
    "DateEchelon": "2023-10-01",
    "Indice": "645",
    "Mutuelle": "Mutuelle Tech",
    "DiplomeSpecialité": "Master en réseaux et télécommunications",
    "SituationAdministrative": "En activité",
    "Affectation": "Département IT, Bureau Régional",
    "TraitementDossier": "En cours d'examen",
    "DateRetraité": "2052-07-14"
  },
  {
    "CIN": "HH12678",
    "NomEtPrenom": "Emma Dubois",
    "Grade": "Assistante administrative",
    "dateNaissance": "1995-12-05",
    "DateRecrutement": "2018-07-15",
    "Echelle": "8",
    "DateEchelle": "2023-01-10",
    "Echelon": "1",
    "DateEchelon": "2024-02-20",
    "Indice": "560",
    "Mutuelle": "Mutuelle Administratives",
    "DiplomeSpecialité": "BTS en gestion administrative",
    "SituationAdministrative": "En activité",
    "Affectation": "Département Administration, Siège Social",
    "TraitementDossier": "En attente",
    "DateRetraité": "2060-12-05"
  },
  {
    "CIN": "HH12987",
    "NomEtPrenom": "Antoine Lefèvre",
    "Grade": "Développeur web",
    "dateNaissance": "1993-11-02",
    "DateRecrutement": "2017-09-25",
    "Echelle": "9",
    "DateEchelle": "2020-10-05",
    "Echelon": "1",
    "DateEchelon": "2022-12-12",
    "Indice": "590",
    "Mutuelle": "Mutuelle Web",
    "DiplomeSpecialité": "Licence en informatique",
    "SituationAdministrative": "En activité",
    "Affectation": "Département IT, Siège Social",
    "TraitementDossier": "En cours de validation",
    "DateRetraité": "2058-11-02"
  },
  {
    "CIN": "HH12477",
    "NomEtPrenom": "Sophie Martin",
    "Grade": "Ingénieur en informatique",
    "dateNaissance": "1985-03-14",
    "DateRecrutement": "2010-09-01",
    "Echelle": "11",
    "DateEchelle": "2018-01-15",
    "Echelon": "3",
    "DateEchelon": "2020-07-01",
    "Indice": "670",
    "Mutuelle": "Mutuelle Générale",
    "DiplomeSpecialité": "Master en génie logiciel",
    "SituationAdministrative": "En activité",
    "Affectation": "Département IT, Siège Social",
    "TraitementDossier": "En cours d'examen",
    "DateRetraité": "2045-03-14"
  },
  {
    "CIN": "HH12789",
    "NomEtPrenom": "Jean Dupont",
    "Grade": "Chef de projet",
    "dateNaissance": "1978-06-25",
    "DateRecrutement": "2005-04-18",
    "Echelle": "12",
    "DateEchelle": "2015-11-23",
    "Echelon": "4",
    "DateEchelon": "2018-09-15",
    "Indice": "710",
    "Mutuelle": "Mutuelle des Cadres",
    "DiplomeSpecialité": "MBA en gestion de projet",
    "SituationAdministrative": "En activité",
    "Affectation": "Département Projets, Bureau Régional",
    "TraitementDossier": "Validé",
    "DateRetraité": "2038-06-25"
  },
  {
    "CIN": "HH12856",
    "NomEtPrenom": "Marie Leblanc",
    "Grade": "Responsable RH",
    "dateNaissance": "1980-09-12",
    "DateRecrutement": "2008-03-10",
    "Echelle": "10",
    "DateEchelle": "2016-08-20",
    "Echelon": "2",
    "DateEchelon": "2019-05-07",
    "Indice": "630",
    "Mutuelle": "Mutuelle Santé Plus",
    "DiplomeSpecialité": "Master en ressources humaines",
    "SituationAdministrative": "En activité",
    "Affectation": "Département RH, Siège Social",
    "TraitementDossier": "En cours de traitement",
    "DateRetraité": "2040-09-12"
  },
  {
    "CIN": "HH12945",
    "NomEtPrenom": "Pierre Durand",
    "Grade": "Technicien supérieur",
    "dateNaissance": "1990-01-30",
    "DateRecrutement": "2015-05-20",
    "Echelle": "9",
    "DateEchelle": "2020-12-01",
    "Echelon": "1",
    "DateEchelon": "2021-03-15",
    "Indice": "580",
    "Mutuelle": "Mutuelle des Techniciens",
    "DiplomeSpecialité": "DUT en électronique",
    "SituationAdministrative": "En activité",
    "Affectation": "Département Maintenance, Siège Social",
    "TraitementDossier": "En attente",
    "DateRetraité": "2055-01-30"
  },
  {
    "CIN": "HH12354",
    "NomEtPrenom": "Laura Petit",
    "Grade": "Analyste financier",
    "dateNaissance": "1988-04-22",
    "DateRecrutement": "2012-11-05",
    "Echelle": "11",
    "DateEchelle": "2019-06-18",
    "Echelon": "3",
    "DateEchelon": "2021-11-30",
    "Indice": "665",
    "Mutuelle": "Mutuelle Financière",
    "DiplomeSpecialité": "Master en finance",
    "SituationAdministrative": "En activité",
    "Affectation": "Département Finance, Siège Social",
    "TraitementDossier": "Complété",
    "DateRetraité": "2048-04-22"
  },
]

const headKey = [
  {
    "key" : "CIN",
  },
  {
    "key" : "Nom/Prenom",
  },
  {
    "key" : "Grade",
  },
  {
    "key" : "Date naissance",
  },
  {
    "key" : "Date recrutement ",
  },
  {
    "key" : "Echelle ",
  },
  {
    "key" : "Date echelle ",
  },
  {
    "key" : "Echelon",
  },
  {
    "key" : "Date Echelon",
  },
  {
    "key" : "Indice",
  },
  {
    "key" : "Mutuelle",
  },
  {
    "key" : "Diplome spécialialité",
  },
  {
    "key" : "Situation administrative",
  },
  {
    "key" : "Affectation ",
  },
  {
    "key" : "Traitement dossier",
  },
  {
    "key" : "Date Retraité",
  }
]



export default function Home() {
  return (
    <>
      <div className="md:p-8 p-4">
        <Tabs defaultValue="administrateurs" className="w-full">
          <TabsList className="grid w-full lg:grid-cols-6 h-fit grid-cols-response ">
            <TabsTrigger value="administrateurs">Administrateurs</TabsTrigger>
            <TabsTrigger value="redacteurs">Redacteurs</TabsTrigger>
            <TabsTrigger value="ingenieurs">Ingenieurs</TabsTrigger>
            <TabsTrigger value="techniciens">techniciens</TabsTrigger>
            <TabsTrigger value="adj-Administratif">Adj Administratif</TabsTrigger>
            <TabsTrigger value="adj-Techniques">Adj Techniques</TabsTrigger>
          </TabsList>
          

          <TabsContent value="administrateurs">
            <DataTable data={AdministrateursEmployees} HeadKeys={headKey} />
          </TabsContent>

          <TabsContent value="redacteurs">
            <DataTable data={redacteursEmployees}  HeadKeys={headKey} />
          </TabsContent>

          <TabsContent value="ingenieurs">
            <DataTable data={AdministrateursEmployees}  HeadKeys={headKey}  />
          </TabsContent>

          <TabsContent value="techniciens">
            <DataTable data={redacteursEmployees}   HeadKeys={headKey}/>
          </TabsContent>

          <TabsContent value="adj-Administratif">
            <DataTable data={AdministrateursEmployees}  HeadKeys={headKey} />
          </TabsContent>

          <TabsContent value="adj-Techniques">
            <DataTable data={redacteursEmployees}  HeadKeys={headKey} />
          </TabsContent>

        </Tabs>
      </div>
    </>
  )
}
