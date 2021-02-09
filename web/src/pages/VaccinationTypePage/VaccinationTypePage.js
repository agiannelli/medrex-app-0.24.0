import VaccinationTypesLayout from 'src/layouts/VaccinationTypesLayout'
import VaccinationTypeCell from 'src/components/VaccinationTypeCell'

const VaccinationTypePage = ({ id }) => {
  return (
    <VaccinationTypesLayout>
      <VaccinationTypeCell id={id} />
    </VaccinationTypesLayout>
  )
}

export default VaccinationTypePage
