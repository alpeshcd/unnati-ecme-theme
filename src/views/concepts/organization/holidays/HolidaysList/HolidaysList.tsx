import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from './components/HolidaysListSelected'
import HolidaysListActionTools from './components/HolidaysListActionTools'
import HolidaysListTableTools from './components/HolidaysListTableTools'
import HolidaysListTable from './components/HolidaysListTable'

const HolidaysList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Holidays</h3>
                            <HolidaysListActionTools />
                        </div>
                        <HolidaysListTableTools />
                        <HolidaysListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default HolidaysList
