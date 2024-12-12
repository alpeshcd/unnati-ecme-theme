import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import CustomerListSelected from './components/TrackDocumentsListSelected'
import TrackDocumentsListTableTools from './components/TrackDocumentsListTableTools'
import TrackDocumentsListTable from './components/TrackDocumentsListTable'
import TrackDocumentsListActionTools from './components/TrackDocumentsListActionTools'


const TrackDocumentsList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>TrackDocuments</h3>
                            <TrackDocumentsListActionTools />
                        </div>
                        <TrackDocumentsListTableTools />
                        <TrackDocumentsListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <CustomerListSelected />
        </>
    )
}

export default TrackDocumentsList
