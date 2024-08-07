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
      console.error(`RES FAILED - STATUS: ${res.status}, STATUS TEXT: ${res.statusText}`)
      return []
    }

    const project: ProjectData[] = await res.json()
    console.log(`PROJECT VARIABLE -- ${project}`)
    return project
  } catch (error) {
    console.error(`Fetch Error: ${error}`)
    throw error;
  }
}

export default async function Projects() {
  const projects = await getProjects();

  if (projects.length === 0) {
    console.error('PAGE FAILED')
    return (
      <div className="page" id="projects">
        <h1>Recent Projects</h1>
        <div>None to show right now</div>
      </div>
    )
  }

  return (
    <>
      <ProjectsContent projects={projects} />
    </>
  );
}