import { useFetchProjects } from "./fetchProjects";

const Projects = () => {
  const { loading, projects } = useFetchProjects();
  if (loading) {
    return (
      <section className="projects">
        <h2>Loading...</h2>
      </section>
    );
  }
  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map(({ id, title, url, imageUrl }) => {
          return (
            <a
              href={url}
              rel="noreferrer"
              target="_blank"
              key={id}
              className="project"
            >
              <img src={imageUrl} alt="" className="img" />
              <h5 className="title">{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
