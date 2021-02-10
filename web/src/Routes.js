import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Private unauthenticated="home">
        <Route path="/notes/new" page={NewNotePage} name="newNote" />
        <Route path="/notes/{id}/edit" page={EditNotePage} name="editNote" />
        <Route path="/notes/{id}" page={NotePage} name="note" />
        <Route path="/notes" page={NotesPage} name="notes" />
        <Route path="/vaccination-records/new" page={NewVaccinationRecordPage} name="newVaccinationRecord" />
        <Route path="/vaccination-records/{id}/edit" page={EditVaccinationRecordPage} name="editVaccinationRecord" />
        <Route path="/vaccination-records/{id}" page={VaccinationRecordPage} name="vaccinationRecord" />
        <Route path="/vaccination-records" page={VaccinationRecordsPage} name="vaccinationRecords" />
        <Route path="/vaccination-types/new" page={NewVaccinationTypePage} name="newVaccinationType" />
        <Route path="/vaccination-types/{id:Int}/edit" page={EditVaccinationTypePage} name="editVaccinationType" />
        <Route path="/vaccination-types/{id:Int}" page={VaccinationTypePage} name="vaccinationType" />
        <Route path="/vaccination-types" page={VaccinationTypesPage} name="vaccinationTypes" />
        <Route path="/students/new" page={NewStudentPage} name="newStudent" />
        <Route path="/students/{id}/edit" page={EditStudentPage} name="editStudent" />
        <Route path="/students/{id}" page={StudentPage} name="student" />
        <Route path="/students" page={StudentsPage} name="students" />
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
