import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import TrackDocumentsListActionTools from './TrackDocuments/components/TrackDocumentsListActionTools'
import TrackDocumentsListTableTools from './TrackDocuments/components/TrackDocumentsListTableTools'
import TrackDocumentsListTable from './TrackDocuments/components/TrackDocumentsListTable'
import TrackDocumentsListSelected from './TrackDocuments/components/TrackDocumentsListSelected'



const TrackDocumentsList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Track Documents </h3>
                            <TrackDocumentsListActionTools />
                        </div>
                        <TrackDocumentsListTableTools />
                        <TrackDocumentsListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <TrackDocumentsListSelected />
        </>
    )
}

export default TrackDocumentsList
