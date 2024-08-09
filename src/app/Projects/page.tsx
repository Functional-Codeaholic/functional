import React from "react"
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
  const url = `${process.env.NEXT_PUBLIC_API_URL}/core/prdojects/?format=json`;

  try {
    const res = await fetch(url, {
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
  const projects = await getProjects();
  const url = `${process.env.NEXT_PUBLIC_API_URL}/core/projects/?format=json`;

  return (
    <>
      <ProjectsContent projects={projects} url={url} />
    </>
  );
}