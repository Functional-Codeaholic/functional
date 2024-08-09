"use client"
import React, { useEffect, useState } from "react"
import ProjectsContent from "./PageContent";

// define types for fields to be pulled from database
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
    // get data from projects table in database
    async function fetchProjects() {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/core/projects/?format=json`

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

        // sort the results that were fetched from the projects table from highest ID to lowest
        projects.sort((a: ProjectData, b: ProjectData) => b.id - a.id)
        setProjects(projects)
      } catch (error) {
        console.error(`FETCH ERROR: ${error}`)
      }
    }
    fetchProjects()
  }, [])

  // send the data from fetch over to be processed in PageContent.tsx
  return <ProjectsContent projects={projects} />;
}
 
export default Projects;