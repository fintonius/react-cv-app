import DataRecord from "./DataRecord";

export default function JobEntry(props) {
    const jobList = props.data?.map((category) => {
        if(category.category === 'experience') {
           return category.subObjects.map((job) => {
            return   <DataRecord 
                        placeName={job.placeName} 
                        dates={job.dates} 
                        description={job.description}
                        key={job.id}
                    />
            })
        };
    })
    return (
        <>
        <ul>{jobList}</ul>
        </>
    )
}