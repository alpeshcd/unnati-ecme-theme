import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import HolidaysListActionTools from './HolidaysList/components/HolidaysListActionTools'
import HolidaysListTableTools from './HolidaysList/components/HolidaysListTableTools'
import HolidaysListTable from './HolidaysList/components/HolidaysListTable'
import HolidaysListSelected from './HolidaysList/components/HolidaysListSelected'

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
            <HolidaysListSelected />
        </>
    )
}

export default HolidaysList
