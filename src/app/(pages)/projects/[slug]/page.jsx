import { getProjects } from "@/lib/data";

const ProjectsDetails = async ({params}) => {
    const {slug} = await params;
    const allProjects = await getProjects();
    const filtered = allProjects.find((pr)=> pr.slug === slug)

    return (
        <div>
            <h1 className="text-4xl font-bold">{filtered.title}</h1>
            <p className="mt-4 text-lg text-gray-600">
                This is where the details of the project will be displayed.
            </p>            
        </div>
    );
};

export default ProjectsDetails;