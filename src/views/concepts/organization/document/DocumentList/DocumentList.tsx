import AdaptiveCard from '@/components/shared/AdaptiveCard'
import Container from '@/components/shared/Container'
import DocumentListActionTools from './components/DocumentListActionTools'
import DocumentListTableTools from './components/DocumentListTableTools'
import DocumentListTable from './components/DocumentListTable'
import DocumentListSelected from './components/DocumentListSelected'

const DocumentList = () => {
    return (
        <>
            <Container>
                <AdaptiveCard>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h3>Document </h3>
                            <DocumentListActionTools/>
                        </div>
                        <DocumentListTableTools />
                        <DocumentListTable />
                    </div>
                </AdaptiveCard>
            </Container>
            <DocumentListSelected />
        </>
    )
}

export default DocumentList
