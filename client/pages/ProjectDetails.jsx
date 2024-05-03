import useProjectDetails from "@/API/useProjectDetails";

function ProjectDetails() {
  const projectData = useProjectDetails();

  if (!projectData)
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="w-52 h-52 border-8 border-customblue border-dashed rounded-full animate-spin"></div>
      </div>
    );

  return (
    <>
      <section className="justify-center items-center w-full pt-[100px] pb-[200px] flex">
        {/* Hero Container */}
        <div className="max-w-[940px] mx-auto flex-1 ">
          {/* Hero Title and Tags */}
          <div className="max-w-[695px] mx-auto">
            {/* Tags */}
            <div className="mb-[24px]">
              <div className="flex flex-wrap gap-x-3 gap-y-4 mt-[24px] justify-center items-center">
                {projectData.properties.Tags.multi_select.map((tag) => (
                  <div
                    key={tag.id}
                    className=" flex-wrap gap-x-3 gap-y-4 mt-[24px] border border-customblue px-4 py-2 font-bold rounded-lg flex items-center justify-center text-sm text-white whitespace-nowrap"
                  >
                    {tag.name}
                  </div>
                ))}
              </div>
              {/* Tags Ends */}
            </div>
            {/* Tags Ends */}
            {/* Hero Title */}
            <div className="font-bold text-5xl text-center">
              <h1>{projectData.properties.ProjectName.title[0].plain_text}</h1>
            </div>
            {/* Hero Title Ends */}
          </div>
          {/* Hero Title and Tags Ends */}
          {/* Image */}
          <div className="h-[540px] rounded-lg mt-[56px]">
            <img
              src={projectData.properties.Media.files[0].file.url}
              alt=""
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          {/*  Image Ends */}
          {/* Info Boxes */}
          <div className="grid grid-cols-3 gap-x-6 gap-y-4 mt-6">
            {/* Box 1 */}
            <div className="max-w-[300px] bg-foreground rounded-md p-8 shadow-custom">
              <div className="text-3xl font-bold"> Topics</div>
              <div className="text-slate-400">
                {projectData.properties.Topics.rich_text[0].plain_text}
              </div>
            </div>

            {/* Box 2 */}
            <div className="max-w-[300px] bg-foreground rounded-md p-8 shadow-custom">
              <div className="text-3xl font-bold">Tech Stack</div>
              <div className="text-slate-400">
                <div className="flex flex-wrap gap-x-3 gap-y-4 justify-center items-center">
                  {projectData.properties.Tags.multi_select.map((tag) => (
                    <div key={tag.id}>{tag.name}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="max-w-[300px] bg-foreground rounded-md p-8 shadow-custom">
              <div className="text-3xl font-bold"> Duration</div>
              <div className="text-slate-400">
                {projectData.properties.Duration.rich_text[0].plain_text}
              </div>
            </div>
          </div>
          {/* Info Boxes Ends */}

          <div className="mt-[100px] text-lg font-normal text-white/50">
            {projectData.properties.LongSum.rich_text[0].plain_text}
          </div>
        </div>
        {/* Hero Container ends */}
      </section>
    </>
  );
}

export default ProjectDetails;
