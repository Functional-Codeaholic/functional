"use client"
import React, { useEffect, useState } from "react"
import ProjectsContent from "./PageContent";

interface ProjectData {
  id: number;
  project_name: string;
  client_name: string;
  client_description: string;
  project_goal: string;
  experience: string;
  outcome: string;
  screenshot: string;
  project_url: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<ProjectData[]>([])

  useEffect(() => {
    async function fetchProjects() {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/core/projects/?format=json`
      console.log(`FETCHING FROM URL: ${url}`)

      try {
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          },
        })

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`)
        }

        const projects = await res.json()
        console.log(`FETCHED PROJECTS: ${projects}`)
        setProjects(projects)
      } catch (error) {
        console.error(`FETCH ERROR: ${error}`)
      }
    }
    fetchProjects()
  }, [])

  return <ProjectsContent projects={projects} />;
}
 
export default Projects;

// import React from "react"
// import ProjectsContent from "./PageContent";

// interface ProjectData {
//   id: number;
//   project_name: string;
//   client_name: string;
//   client_description: string;
//   project_goal: string;
//   experience: string;
//   outcome: string;
//   screenshot: string;
//   project_url: string;
// }

// async function getProjects(): Promise<ProjectData[]> {
//   const url = `${process.env.NEXT_PUBLIC_API_URL}/core/projects/?format=json`;

//   try {
//     const res = await fetch(url, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//       }
//     )

//     if (!res.ok) {
//       throw new Error(`HTTP error! Status: ${res.status}`)
//     }

//     const projects: ProjectData[] = await res.json()
//     console.log(projects)
//     return projects
//   } catch (error) {
//     console.error(`Fetch Error: ${error}`)
//     return []
//   }
// }

// export default async function Projects() {
//   const projects = await getProjects();
//   const url = `${process.env.NEXT_PUBLIC_API_URL}/core/projects/?format=json`;

//   return (
//     <>
//       <ProjectsContent projects={projects} url={url} />
//     </>
//   );
// }