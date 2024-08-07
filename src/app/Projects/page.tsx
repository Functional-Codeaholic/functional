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

interface GetProjectsResult {
  projects: ProjectData[];
  resStatus: number;
  resHeaders: Headers;
}

async function getProjects(): Promise<GetProjectsResult> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/core/projects/?format=json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      }
    )

    const resStatus = res.status
    const resHeaders = res.headers

    if (!res.ok) {
      const text = await res.text();
      console.error(`fetch failed with status: ${res.status}, and text: ${text}`)
      return {
        projects: [],
        resStatus,
        resHeaders
      }
    }

    const projects: ProjectData[] = await res.json()
    return {
      projects,
      resStatus,
      resHeaders
    }
  } catch (error) {
    const projects = error
    return ({
      projects: [],
      resStatus: 500,
      resHeaders: new Headers()
    })
  }
}

export default async function Projects() {
  const { projects, resStatus, resHeaders } = await getProjects();

  // if (projects.length === 0) {
  //   console.error('PAGE FAILED')
  //   return (
  //     <div className="page" id="projects">
  //       <h1>Recent Projects</h1>
  //       <div>None to show right now</div>
  //     </div>
  //   )
  // }

  return (
    <>
      <ProjectsContent
        projects={projects}
        resStatus={resStatus}
        resHeaders={resHeaders}
      />
    </>
  );
}