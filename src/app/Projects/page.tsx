import { notFound } from "next/navigation";
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

export default async function Projects() {
  async function getProjects(): Promise<ProjectData[]> {
    "use server"
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
        console.error(`RES FAILED - STATUS: ${res.status}, STATUS TEXT: ${res.statusText}`)
        return []
      }

      const project: ProjectData[] = await res.json()
      return project
    } catch (error) {
      console.error(`Fetch Error: ${error}`)
      return []
    }
  }

  const projects = await getProjects();

  if (projects.length === 0) {
    console.error('PAGE FAILED')
    notFound()
  }

  return (
    <>
      <ProjectsContent projects={projects} />
    </>
  );
}