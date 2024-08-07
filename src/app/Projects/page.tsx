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

async function getProjects(): Promise<ProjectData[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/core/projects/?format=json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      }
    )

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`)
    }

    const projects: ProjectData[] = await res.json()
    console.log(projects)
    return projects
  } catch (error) {
    console.error(`Fetch Error: ${error}`)
    return []
  }
}

export default async function Projects() {
  const [projects, setProjects] = useState<ProjectData[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getProjects()
      setProjects(projects)
    }

    fetchProjects()
    
  }, [])

  return (
    <>
      <ProjectsContent projects={projects} />
    </>
  );
}